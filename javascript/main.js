/*==========variable==========*/
let slickCenter = '';
let slickLeft = '';
let slickRight = '';
let slickLeftX = '';
let slickCenterX = '';
let slickRightX = '';
let slickOriginalLeftX = '';
let slickOriginalCenterX = ''; 
let slickOriginalRightX = '';
let slickLeftRotato = 0;
let slickRotato = 30;	//変化後のrotate
let slickAddNumber = 0;		//slickの加算値


/*==========function==========*/
/*-----slick-----*/
function getSlickCLR() {
	slickCenter = document.querySelector('.slick-center');
	slickLeft = slickCenter.previousElementSibling;
	slickRight = slickCenter.nextElementSibling;
}
function getOriginalPosition() {
	getSlickCLR();
	slickOriginalLeftX = slickLeft.getBoundingClientRect().left;
	slickOriginalCenterX = slickCenter.getBoundingClientRect().left;
	slickOriginalRightX = slickRight.getBoundingClientRect().left;
	console.log("L:"+ slickOriginalLeftX + "   C" + slickOriginalCenterX + "   R:" + slickOriginalRightX);
}
function getMovePosition() {
	getSlickCLR();
	let slickLeftX = slickLeft.getBoundingClientRect().left;
	let slickCenterX = slickCenter.getBoundingClientRect().left;
	let slickRightX = slickCenter.getBoundingClientRect().left;
	console.log("CENTER:" + slickCenterX);
	console.log("LEFT:" + slickLeftX);
	console.log("Right" + slickRightX);
}

// function getSlickLR(array) {
// 	for ( item of array ) {
// 		let dataSlickIndex = Number(item.getAttribute('data-slick-index'));
// 		console.log(dataSlickIndex);
// 		switch (dataSlickIndex) {
// 			case -1:
// 				slickLeft = item;
// 				break;

// 			case 1:
// 				slickRight = item;
// 				break;

// 			default:
// 				break;
// 		}
// 	};
// }

/*==========window.onload==========*/
window.onload = function() {
	getSlickCLR();
	slickLeft.firstElementChild.classList.add('slick-left');
	slickRight.firstElementChild.classList.add('slick-Right');
}


/*==========main==========*/
/*-----slick-----*/
$(function() {
	$('.slider').slick({
		centerMode: true,
		centerPadding: "20%",
		dots: true,
	})

	let worksBox = document.querySelector('.works-box');
	worksBox.addEventListener('mousemove', e => {
		// let slickCenter = document.querySelector('.slick-center');
		// let slickLeft = slickCenter.previousElementSibling;
		// let slickRight = slickCenter.nextElementSibling;
		getMovePosition();
		slickLeft.style.setProperty('--slick-left_rotate', slickAddNumber);
	})
	worksBox.addEventListener('mousedown', e => {
		getOriginalPosition();
		addNumber = slickAfterRotato / (slickOriginalCenterX - slickOriginalLeftX);
		console.log(addNumber);
	})
	
	// .on('beforeChange', function () {
	// 	$('.slick-center').prev().addClass('slick-left').removeClass('slick-right');
	// 	$('.slick-center').next().addClass('slick-right').removeClass('slick-left');
	// 	$('.slick-center').removeClass('slick-left slick-right');
	// });
});