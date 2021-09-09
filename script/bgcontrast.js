var bgcontrast;
(function(){
	var style = window.getComputedStyle(document.body);
	var color = style.getPropertyValue('background-color');
	var re = /rgba?[(]([0-9]+), ([0-9]+), ([0-9]+).*[)]+/i;
	var found = color.match(re);
	var r = parseInt(found[1]);
	var g = parseInt(found[2]);
	var b = parseInt(found[3]);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
	bgcontrast = (yiq >= 128) ? 'black' : 'white';
})();
document.write("<span style=\"color:"+bgcontrast+"\">powered by</span> ");

if(bgcontrast == 'black'){
	document.write('<img alt="logo" src="img\jr.webp" height="30" style="vertical-align:middle;" /> Jefferson Junior'); 
} else {
	document.write('<img alt="logo" src="img\jr.webp" height="30" style="vertical-align:middle;" /> Jefferson Junior');
}