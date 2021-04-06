let manageLoad = (homepage, responsiveSentinel=true)=>{

	let displayAll = ()=>{
		document.querySelector('body').style.backgroundColor='black';
		
		let header = document.querySelector('header');
		let sections = document.querySelectorAll('section');
		let footer = document.querySelector('footer');

		header.style.display='flex';
		if (footer!=null){
			footer.style.display='flex';
		}
		
		if(responsiveSentinel){
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
	}
	
	if (homepage){
		
		let landing = document.querySelector('.landing');
		landing.style.height = `${0.9*window.innerHeight}`;
		document.querySelector('body').style.backgroundColor = 'white';
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


let manageStickyHead = (delay=8000)=>{
	let stickyHeadDisplayManager = ()=>{
		setInterval(()=>{
			let body = document.querySelector('body');
			let scrolled_dist = body.scrollTop;
			
			let sec_one = document.querySelector('section');
			let sec_one_offset = sec_one.offsetTop;
			
			let stickyHead = document.querySelector('#sticky-head');
			
			if (scrolled_dist > 0 && scrolled_dist > (sec_one_offset - window.innerHeight/50)){
				stickyHead.style.display = 'flex';
			}
			else if (scrolled_dist === 0 || scrolled_dist < (sec_one_offset - window.innerHeight/50)){
				stickyHead.style.display = 'none';
			}
		},100);
	}
	
	setTimeout(stickyHeadDisplayManager, delay);
}
