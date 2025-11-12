// Live Frame functionality for generative art iframes
export class LiveFrame {
	constructor() {
		this.iFrameArray = [
			{url: "https://kodamandala.netlify.app/", urlParam: "fxhash", aspectRatio: "1/1", name: "Kodamandala - working title"},
			{url: "https://jeudeligne.netlify.app/", urlParam: "hash", aspectRatio: "1/1.3756", name: "Jeu de ligne - 2023"},
			{url: "https://ex-lignis.netlify.app/", urlParam: "fxhash", aspectRatio: "1/1.75", name: "EX-LIGNIS (working title)"},
		];

		this.currentUrl = "";
		this.randomIframe = null;
		this.currentFullHash = "";
		this.canvas = null;
		this.iframe = null;
	}

	init() {
		this.canvas = document.querySelector("[data-canvas]");
		this.iframe = document.getElementById("generativeArtFrame");

		if (!this.iframe) {
			console.warn("LiveFrame: iframe element not found");
			return;
		}

		this.setupEventListeners();
		this.setupIntersectionObserver();
	}

	generateRandomHash(size = 64) {
		let genHash = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
		let hash = "0x" + genHash(64);
		return hash;
	}

	async copyToClipboard(text) {
		try {
			await navigator.clipboard.writeText(text);
			// Show visual feedback
			const copyBtn = document.getElementById("copyHashBtn");
			if (copyBtn) {
				copyBtn.classList.add("copied");
				setTimeout(() => {
					copyBtn.classList.remove("copied");
				}, 1500);
			}
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	}

	updateIframeAndHash() {
		// Generate random hash
		const hash = this.generateRandomHash(64);
		this.currentFullHash = hash; // Store the full hash
		// create excerpt of the hash
		const hashExcerpt = hash.substring(0, 8);
		const hashElement = document.getElementById("randomHash");
		if (hashElement) {
			hashElement.textContent = `Seed: #${hashExcerpt}...`;
		}

		// Select random iframe
		this.randomIframe = this.iFrameArray[Math.floor(Math.random() * this.iFrameArray.length)];

		// add the hash to the url
		this.currentUrl = `${this.randomIframe.url}?${this.randomIframe.urlParam}=${hash}`; // Store URL in the outer variable

		// Update iframe
		if (this.iframe) {
			this.iframe.src = this.currentUrl;
			this.iframe.style.aspectRatio = this.randomIframe.aspectRatio;
		}

		// Update project name
		const projectNameElement = document.getElementById("projectName");
		if (projectNameElement) {
			projectNameElement.textContent = `Project: ${this.randomIframe.name}`;
		}
	}

	openInNewTab() {
		if (this.currentUrl) {
			window.open(this.currentUrl, "_blank"); // Use the stored URL
		}
	}

	updateHash() {
		//update only the hash not the iFrame
		const hash = this.generateRandomHash(64);
		this.currentFullHash = hash; // Store the full hash
		const hashExcerpt = hash.substring(0, 8);
		const hashElement = document.getElementById("randomHash");
		if (hashElement) {
			hashElement.textContent = `Seed: #${hashExcerpt}...`;
		}

		// reload the iframe
		if (this.iframe && this.randomIframe) {
			this.iframe.src = `${this.randomIframe.url}?${this.randomIframe.urlParam}=${hash}`;
			this.iframe.style.aspectRatio = this.randomIframe.aspectRatio;
		}

		// Update project name
		const projectNameElement = document.getElementById("projectName");
		if (projectNameElement && this.randomIframe) {
			projectNameElement.textContent = `Project: ${this.randomIframe.name}`;
		}

		this.currentUrl = `${this.randomIframe.url}?${this.randomIframe.urlParam}=${hash}`;
	}

	setupEventListeners() {
		// Add event listeners to the buttons
		const refreshBtn = document.querySelector("[data-refresh]");
		const fullscreenBtn = document.querySelector("[data-fullscreen]");
		const copyBtn = document.getElementById("copyHashBtn");

		if (refreshBtn) {
			refreshBtn.addEventListener("click", () => this.updateHash());
		}

		if (fullscreenBtn) {
			fullscreenBtn.addEventListener("click", () => this.openInNewTab());
		}

		if (copyBtn) {
			copyBtn.addEventListener("click", () => this.copyToClipboard(this.currentFullHash));
		}
	}

	setupIntersectionObserver() {
		if (!this.iframe) return;

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.updateIframeAndHash(); // Load the iframe content
					observer.unobserve(this.iframe); // Stop observing once loaded
				}
			});
		});

		observer.observe(this.iframe);
	}
}

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
	const liveFrame = new LiveFrame();
	liveFrame.init();
});
