
	var num_cap = 1;
	var num_cuerpo = 1; 
	var num_pies = 1;
	var total = 4;
	
	function cabeza(){
		num_cap = num_cap + 1;
        if (num_cap > 4) {num_cap=1}
        document.getElementById("cabeza1").style.backgroundImage = "url('img/cabeza" + num_cap + ".png')";
	}
		function cara(){
		num_cuerpo = num_cuerpo + 1;
            if (num_cuerpo > total) {num_cuerpo=1}
            document.getElementById("cara1").style.backgroundImage = "url('img/cara" + num_cuerpo + ".png')";
	}
		function cuerpo(){
		num_pies = num_pies + 1;
            if (num_pies > total) {num_pies=1}
            document.getElementById("cuerpo1").style.backgroundImage = "url('img/cuerpo" + num_pies + ".png')";
	}
	