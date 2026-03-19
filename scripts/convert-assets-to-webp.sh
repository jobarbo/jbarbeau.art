#!/usr/bin/env zsh
set -euo pipefail

# Batch-convert images in public/assets to .webp using cwebp.
# By default it keeps the original files; use --delete-originals to remove them.

cd "$(dirname "$0")/.." # repo root

INPUT_DIR="public/assets"
QUALITY=80
DELETE_ORIGINALS=0

while [[ $# -gt 0 ]]; do
	case "$1" in
		--delete-originals)
			DELETE_ORIGINALS=1
			shift
			;;
		--keep-originals)
			DELETE_ORIGINALS=0
			shift
			;;
		--quality=*)
			QUALITY="${1#*=}"
			shift
			;;
		*)
			echo "Unknown option: $1"
			echo "Usage: $0 [--keep-originals|--delete-originals] [--quality=80]"
			exit 1
			;;
	esac
done

if ! command -v cwebp >/dev/null 2>&1; then
	echo "Missing 'cwebp' (libwebp). Install with: brew install webp"
	exit 1
fi

if [[ ! -d "$INPUT_DIR" ]]; then
	echo "Input dir not found: $INPUT_DIR"
	exit 1
fi

tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

total=0
converted=0
deleted=0
skipped_existing=0
failed=0

# Recursively walk the directory without relying on zsh's `globstar`.
# We output NUL-delimited paths to safely handle spaces.
while IFS= read -r -d '' f; do
	((total+=1))

	out="${f%.*}.webp"

	# If a WebP already exists, just optionally delete the original.
	if [[ -f "$out" ]]; then
		if [[ "$DELETE_ORIGINALS" -eq 1 ]]; then
			rm -f -- "$f"
			((deleted+=1))
		else
			((skipped_existing+=1))
		fi
		continue
	fi

	tmp_out="$tmp_dir/$(basename "${out}").${RANDOM}.$$.tmp.webp"

	# Note: cwebp uses `-alpha_q` (not `-alpha_quality`) depending on version.
	if cwebp -q "$QUALITY" -m 6 -alpha_method 1 -alpha_q 100 "$f" -o "$tmp_out" >/dev/null 2>&1; then
		mv -f -- "$tmp_out" "$out"
		((converted+=1))

		if [[ "$DELETE_ORIGINALS" -eq 1 ]]; then
			rm -f -- "$f"
			((deleted+=1))
		fi
	else
		rm -f -- "$tmp_out" || true
		((failed+=1))
		echo "Failed: $f"
	fi
done < <(
	python3 - <<'PY'
import os

input_dir = "public/assets"
exts = {".png", ".jpg", ".jpeg", ".tif", ".tiff"}

for root, _, files in os.walk(input_dir):
	for name in files:
		ext = os.path.splitext(name)[1].lower()
		if ext in exts:
			path = os.path.join(root, name)
			# NUL-delimit for safe shell consumption.
			print(path, end="\0")
PY
)

echo "Done."
echo "Total scanned:   $total"
echo "Converted:       $converted"
echo "Skipped existing:$skipped_existing"
echo "Deleted:         $deleted"
echo "Failed:          $failed"

