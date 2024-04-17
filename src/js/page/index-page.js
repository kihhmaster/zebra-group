// import $ from "jquery";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import MotionPathPlugin from "gsap/MotionPathPlugin";
// import ScrollToPlugin from "gsap/ScrollToPlugin";
// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);
// gsap.registerPlugin(ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
	
	let titleParsing = document.querySelectorAll(".js-title__parsing")
	function parsingByLetters() {
		titleParsing.forEach((item) => {
			let itemText = item.textContent
			if (itemText !== "")  {
				let itemNewText = itemText.trim().split('').map(s => `<span>${s}</span>`).join('')
				item.innerHTML = itemNewText
			} return

		})
	}
	parsingByLetters()


	let titleAnimation1 = document.getElementById("title__animation--1")
	let titleAnimation2 = document.getElementById("title__animation--2")
	function titleAnimation(item) {
		if (item !== null)  {
			let list = item.querySelectorAll("span")
			for(let i = 0; i < list.length; i++) {
				setTimeout(function() {
					list[i].classList.add('active');
				}, 100 * i)
			}
			
		}

	}

	function counterOperation(element, duration) {
		let animationDuration = duration;
		let countElement = element;
		
		// let animateCountUp = element
		const frameDuration = 1000 / 60;
	
		const totalFrames = Math.round(animationDuration / frameDuration);
	
		const easeOutQuad = (t) => t * (2 - t);
	
		const animateCountUp = (el) => {
			let frame = 0;
			const countTo = parseInt(el.innerHTML, 10);
	
			const counter = setInterval(() => {
				frame++;
	
				const progress = easeOutQuad(frame / totalFrames);
	
				const currentCount = Math.round(countTo * progress);
	
				if (parseInt(el.innerHTML, 10) !== currentCount) {
					el.innerHTML = currentCount;
				}
	
				if (frame === totalFrames) {
					clearInterval(counter);
				}
			}, frameDuration);
		};
		countElement.forEach(animateCountUp);
	}
	function startCounter(item, time) {
		let counterList = item
		let counterTime = time
		counterOperation(counterList, counterTime)
	}

	const timerStart = document.querySelectorAll(".energy__quantity__timer");

	

	let energyBtn = document.querySelector("#energy__btn .btn__animation")
	let energyWindmill = document.querySelector(".js-energy__windmill")
	energyBtn.addEventListener("click", (e) => {
		let el = e.currentTarget.parentNode;
		let elBtn = el.querySelector(".btn__animation")
		el.classList.add("disabled")
		energyWindmill.classList.add("active")
		elBtn.setAttribute('disabled', '');
		// let el = findparentClass(e.target, 'btn')
		// let parent = target.parentElement
		setTimeout(() => {
			energyWindmill.classList.remove("active")
			el.classList.remove("disabled")
			elBtn.removeAttribute('disabled', '');
		}, 6000)
		console.log(elBtn)
	})

	function energyStarAnimate() {
		titleAnimation(titleAnimation1);
		setTimeout(() => {
			let energyQuantityTimer = document.querySelector(".energy__quantity__timer")
			energyQuantityTimer.classList.add("active")
			startCounter(timerStart, 2100)
		}, 1500)
		setTimeout(() => {
			titleAnimation(titleAnimation2);
		}, 1800)
	}
	energyStarAnimate()
});

