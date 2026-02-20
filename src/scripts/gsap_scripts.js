import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

console.log(gsap, ScrollTrigger, SplitText);

// split elements with the class "split" into words and characters
let split = SplitText.create("[data-split-text]", {type: "words, chars"});

// Set initial state - hide all characters
gsap.set(split.chars, {autoAlpha: 0, y: 10, scale: 0.6});

// Create a timeline to stagger between different elements
let tl = gsap.timeline();

// Animate each element's characters with a stagger between elements
split.elements.forEach((element, index) => {
	tl.to(
		split.chars.filter((char) => element.contains(char)),
		{
			duration: 0.2,
			y: 0, // animate to original position
			autoAlpha: 1, // fade in to full opacity
			stagger: 0.05, // 0.05 seconds between each character
			ease: "back.out(1.27)", // ease out with a bit of overshoot
			scale: 1,
		},
		index === 0 ? 0 : index * 0.2, // first element starts immediately, others get increasing delay
	);
});
