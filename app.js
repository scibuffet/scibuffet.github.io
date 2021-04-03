let loadManager = (homepage)=>{

	let displayAll = ()=>{
		let header = document.querySelector('header');
		let sections = document.querySelectorAll('section');
		let footer = document.querySelector('footer');
		header.style.display='flex';
		footer.style.display='flex';
		setInterval(()=>{
			for (sec of sections){
				if (window.innerWidth>500){
					sec.classList.add('tab-desktop');
					sec.classList.remove('mobile');
				}
				else{
					sec.classList.add('mobile');
					sec.classList.remove('tab-desktop');
				}
			}
		},300);
	}
	
	if (homepage){
		
		let landing = document.querySelector('.landing');
		landing.style.height = `${0.9*window.innerHeight}`;
		landing.style.opacity = '1';

		let paths = document.querySelectorAll('path');
		let lengths = [];
		for(path of paths) {
			let len = path.getTotalLength();
			lengths.push(len);
		}
		for(let i=0; i<paths.length; i++){
			paths[i].style.strokeDasharray = `${lengths[i]}px`;
			paths[i].style.strokeDashoffset = `${lengths[i]}px`;
			paths[i].style.animation = `textLoad 3s ease forwards ${.1*i}s`;
		}
		
		setTimeout(displayAll,6500);

		let vanishLanding = ()=>{
			let landing = document.querySelector('.landing');
			let opa = Number(landing.style.opacity);
			opa -= 0.05;
			landing.style.opacity = `${opa}`;
		}

		let vanishManager = ()=>{
			let timer = setInterval(vanishLanding,100);
			let clearTimer = ()=> {
				clearInterval(timer);
				let landing = document.querySelector('.landing');
				landing.style.display='none';
			}
			setTimeout(clearTimer, 2000);
		}

		setTimeout(vanishManager,4500);
	}
	else{
		displayAll();
	}
}