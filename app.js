
var form=document.getElementById('form');
form.addEventListener('submit',function(e){
e.preventDefault();

	if (document.getElementById('b').checked) {
document.getElementById('demo').innerHTML="your color is blue";			
		}
		else if (document.getElementById('r').checked){
			document.getElementById('demo').innerHTML="your color is red";
		}
		else if (document.getElementById('bl').checked){
			document.getElementById('demo').innerHTML="your color is black";
		}
		else if (document.getElementById('w').checked){
			document.getElementById('demo').innerHTML="your color is white";
		}
		else {
			document.getElementById('demo').innerHTML="Plz, choose a color";
		}
	});