function Dark()
{	
	var x,y,z,w;
	x=document.getElementById("X").value;
	y=document.getElementById("Y").value;
	z=document.getElementById("Z").value;	
	
	w = x*y*z;
	//document.getElementById("results").value=w;

	//document.getElementById("results").innerHTML="<font color='blue'>"+w+"</font>";	
	document.getElementById("results").innerHTML="<font color='green'>"+w+"</font>";
}

