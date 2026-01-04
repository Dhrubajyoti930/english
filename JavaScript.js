	const button = document.getElementById('open-btn');
    const canvas = document.getElementById("side-bar");
    const ctx = canvas.getContext("2d");
	var open = 0;
    
    ctx.fillStyle = "rgb(30, 30, 30)";
	
	function openSideBar(){
	
		if (!open){
			ctx.fillRect(0, 0, windowWidth, windowHeight);
			canvas.style.height = "70%";
			canvas.style.width = "30%";
			button.innerText = "☰ Close Sidebar";
			open = 1;
		}else{
			canvas.style.height = "0%";
			canvas.style.width = "0%";
			button.innerText = "☰ Open Sidebar";
			
			open = 0;
		}
	}
	button.addEventListener("click", openSideBar);