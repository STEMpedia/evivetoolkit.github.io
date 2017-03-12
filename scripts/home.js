window.addEventListener('scroll',function(){
	if(window.scrollY<100){
		document.querySelector('.navbar').setAttribute('class','navbar navbar-expanded');
	}else{
		document.querySelector('.navbar').setAttribute('class','navbar');
	}
});

/*
*code for slideshow
*/

var galleryInfo = [
  {title:'Arduino at Heart',text:'evive is powered by Arduino MEGA 2560'},
  {title:'Power Module',text:'evive offers multiple power outputs: a 3.3V, a 5V and a potentiometer controlled variable output'},
  {title:'Plug and Play Hardware Interface',text:"Control motors, relays, steppers, servos, motor drivers, pneumatics using evive's inbuilt motor driver"},
  {title:'Mini Oscilloscope',text:'Mini dual-channel oscilloscpe for 30V and 3A range with 24-bit isolated ADC'},
  {title:'LabVIEW Desktop interface',text:'Wirelessly control evive and log data using LINX based opensource LabVIEW interface'},
  {title:'Visual Interface',text:'Take control of evive using onscreen menu, device monitoring & plotting facilities'},
  {title:'IoT Hub',text:'WiFi, bluetooth and Xbee adapters for IoT applications'},
  {title:'Touch',text:'12 capacitive touch inputs'},
  {title:'Sense | Plot | Log',text:'24-bit ADCs based precise voltage & current sensing channels, onscreen plotting options & data logging with SD Card'},
  {title:'DIY Skateboard with evive',text:''},
  {title:'Scientific Calculator with evive',text:''},
  ];
var x = document.getElementsByClassName("saharan-slide");
var galleryText = document.getElementsByClassName('gallery-text')[0];
var galleryTitle = document.getElementsByClassName('gallery-title')[0];
var slideCount = 0;
var slideIndex = 1;
showDivs(slideIndex);
var timeoutId = 0;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  clearTimeout(timeoutId);
  var i;
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
  	if(slideCount==0){
  		dots[i].setAttribute('data-number',i+1);
  		dots[i].addEventListener('click',function(e){
  			var ba = e.target.getAttribute('data-number');
  			currentDiv(ba);
  		});
  	}

     // x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" current-slide", "");
     x[i].className = x[i].className.replace(' show','');
  }
  x[slideIndex-1].className += " show";
  galleryText.innerHTML = galleryInfo[slideIndex-1]['text'];
  galleryTitle.innerHTML = galleryInfo[slideIndex-1]['title'];
  dots[slideIndex-1].className += " current-slide";
  slideCount++;
  timeoutId = setTimeout(function(){
  	plusDivs(1);
  },5000);
}



/*
*maker code 
*/

var makerTextList = ['MAKER','EDUCATOR','STUDENT'];
var textChanger = document.getElementsByClassName('text-changer')[0];
var makerTextIndex = 0;
setInterval(function(){
	makerTextIndex++;
	if(makerTextIndex>=makerTextList.length){
		makerTextIndex = 0;
	}
	textChanger.innerHTML = makerTextList[makerTextIndex];
},2500);