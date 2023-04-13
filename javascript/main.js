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
let slickRotato = 30;	//変化後の角度
let slickAddNumber = 0;		//slickの加算値


/*==========function==========*/
/*-----setRootProperty-----*/
function setRootProperty(name, value) {	//カスタムプロパティに値を代入(プロパティ名、代入したい値)
	const root = document.querySelector(':root');
	root.style.setProperty(name, value);
}

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
	// console.log("L:"+ slickOriginalLeftX + "   C" + slickOriginalCenterX + "   R:" + slickOriginalRightX);
}
function getMovePosition() {
	getSlickCLR();
	let slickLeftX = slickLeft.getBoundingClientRect().left;
	let slickCenterX = slickCenter.getBoundingClientRect().left;
	let slickRightX = slickCenter.getBoundingClientRect().left;
	// console.log("CENTER:" + slickCenterX);
	// console.log("LEFT:" + slickLeftX);
	// console.log("Right" + slickRightX);
}
function setRemoveSlickClassLR() {	//スライダーの左右の要素にクラスを追加
	slickLeft.classList.add('slick-left');
	slickRight.classList.add('slick-right');
	slickRemoveLeft.remove
}


/*==========window.onload==========*/
window.onload = function() {
	getSlickCLR();
	slickLeft.classList.add('slick-left');
	slickRight.classList.add('slick-right');
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
		getMovePosition();
		slickLeftRotato = 30;
		console.log(slickLeftRotato);
		setRootProperty('--slick-left_rotate', slickLeftRotato + 'deg');
	})
	worksBox.addEventListener('mousedown', e => {
		getOriginalPosition();
		slickAddNumber = slickRotato / (slickOriginalCenterX - slickOriginalLeftX);
	})
	
	// .on('beforeChange', function () {
	// 	$('.slick-center').prev().addClass('slick-left').removeClass('slick-right');
	// 	$('.slick-center').next().addClass('slick-right').removeClass('slick-left');
	// 	$('.slick-center').removeClass('slick-left slick-right');
	// });
});