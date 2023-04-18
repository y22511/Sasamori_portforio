/*==========variable==========*/
/*-----slick-----*/
let slickCenter = '';
let slickLeft = '';
let slickRight = '';
let slickLeft2 = '';
let slickRight2 = '';
let slickLeftX = '';
let slickCenterX = '';
let slickRightX = '';
let slickOriginalLeftX = '';
let slickOriginalCenterX = ''; 
let slickOriginalRightX = '';
let slick_X = 160;
let slickLeft_X = slick_X;
let slickRight_X = -slick_X;
let slick_Z = 200;
let slickLeft_Z = -slick_Z;
let slickRight_Z = -slick_Z;
let slickRotate = 30;	//変化後の角度
let slickLeftRotate = slickRotate;
let slickRightRotate = -slickRotate;


/*==========function==========*/
/*-----setRootProperty-----*/
function setRootProperty(name, value) {	//カスタムプロパティに値を代入(プロパティ名、代入したい値)
	const root = document.querySelector(':root');
	root.style.setProperty(name, value);
}

/*-----slick-----*/
function getSlickLR() {
	slickLeft = slickCenter.previousElementSibling;
	slickRight = slickCenter.nextElementSibling;
	slickLeft2 = slickLeft.previousElementSibling;
	slickRight2 = slickRight.nextElementSibling;
}
function setSlickClassLR() {	//スライダーの左右の要素にクラスを追加
	slickLeft.classList.add('slick-left');
	slickRight.classList.add('slick-right');
	slickLeft2.classList.add('slick-left2');
	slickRight2.classList.add('slick-right2');
}
function removeSlickClassLR() {	//スライダーの左右の要素のクラスを削除
	let slickLeftRemove = document.querySelector('.slick-left');
	let slickRightRemove = document.querySelector('.slick-right');
	let slickLeft2Remove = document.querySelector('.slick-left2');
	let slickRight2Remove = document.querySelector('.slick-right2');
	slickLeftRemove.classList.remove('slick-left');
	slickRightRemove.classList.remove('slick-right');
	slickLeft2Remove.classList.remove('slick-left2');
	slickRight2Remove.classList.remove('slick-right2');
}
function getOriginalPosition() {
	slickOriginalLeftX = slickLeft.getBoundingClientRect().left;
	slickOriginalCenterX = slickCenter.getBoundingClientRect().left;
	slickOriginalRightX = slickRight.getBoundingClientRect().left;
}
function getMovePosition() {
	slickLeftX = slickLeft.getBoundingClientRect().left;
	slickCenterX = slickCenter.getBoundingClientRect().left;
	slickRightX = slickRight.getBoundingClientRect().left;
}
function getSlickProportion(move, original) {
	let proportion = 1 - (move - original) / (slickOriginalCenterX - original);
	return proportion;
}
function setSlickTransform() {
	let leftProportion = getSlickProportion(slickLeftX, slickOriginalLeftX);
	let rightProportion = getSlickProportion(slickRightX, slickOriginalRightX);
	setRootProperty('--slick-left2_rotate', leftProportion * slickLeftRotate + slickLeftRotate + 'deg');
	setRootProperty('--slick-left_rotate', leftProportion * slickLeftRotate + 'deg');
	setRootProperty('--slick-center_rotate', leftProportion * slickLeftRotate - slickRotate  + 'deg');
	setRootProperty('--slick-right_rotate', rightProportion * slickRightRotate + 'deg');
	setRootProperty('--slick-right2_rotate', rightProportion * slickRightRotate + slickRightRotate + 'deg');
	setRootProperty('--slick-left2_X', leftProportion * slickLeft_X + slickLeft_X + 'px');
	setRootProperty('--slick-left_X', leftProportion * slickLeft_X + 'px');
	setRootProperty('--slick-center_X', leftProportion * slickLeft_X - slick_X + 'px');
	setRootProperty('--slick-right_X', rightProportion * slickRight_X + 'px');
	setRootProperty('--slick-right2_X', rightProportion * slickRight_X + slickRight_X + 'px');
	if (leftProportion > 1) {
		setRootProperty('--slick-center_Z', leftProportion * slickLeft_Z + slick_Z + 'px');
	} else {
		setRootProperty('--slick-center_Z', rightProportion * slickRight_Z + slick_Z + 'px');
	}
	if (leftProportion * slickLeft_Z > 0) {
		leftProportion = -leftProportion;
	} else if (rightProportion * slickRight_Z > 0) {
		rightProportion = -rightProportion;
	}
	setRootProperty('--slick-left2_Z', leftProportion * slickLeft_Z + slickLeft_Z + 'px');
	setRootProperty('--slick-left_Z', leftProportion * slickLeft_Z + 'px');
	setRootProperty('--slick-right_Z', rightProportion * slickRight_Z + 'px');
	setRootProperty('--slick-right2_Z', rightProportion * slickRight_Z + slickRight_Z + 'px');
}
function setSlickZindex() {
	let left2Z = Number(String(getComputedStyle(slickLeft2).getPropertyValue('--slick-left2_Z')).trim().slice(0, -2));
	let leftZ = Number(String(getComputedStyle(slickLeft).getPropertyValue('--slick-left_Z')).trim().slice(0, -2));
	let centerZ = Number(String(getComputedStyle(slickCenter).getPropertyValue('--slick-center_Z')).trim().slice(0, -2));
	let rightZ = Number(String(getComputedStyle(slickRight).getPropertyValue('--slick-right_Z')).trim().slice(0,-2));
	let right2Z = Number(String(getComputedStyle(slickRight2).getPropertyValue('--slick-right2_Z')).trim().slice(0,-2));
	if (leftZ < centerZ && rightZ < centerZ) {
		setRootProperty('--slick-left2_Z-index', 0);
		setRootProperty('--slick-left_Z-index', 1);
		setRootProperty('--slick-center_Z-index', 2);
		setRootProperty('--slick-right_Z-index', 1);
		setRootProperty('--slick-right2_Z-index', 0);
	} else if (left2Z < leftZ || right2Z < rightZ) {
		setRootProperty('--slick-left2_Z-index', 0);
		setRootProperty('--slick-left_Z-index', 2);
		setRootProperty('--slick-center_Z-index', 1);
		setRootProperty('--slick-right_Z-index', 2);
		setRootProperty('--slick-right2_Z-index', 0);
	} else {
		setRootProperty('--slick-left2_Z-index', 2);
		setRootProperty('--slick-left_Z-index', 1);
		setRootProperty('--slick-center_Z-index', 0);
		setRootProperty('--slick-right_Z-index', 1);
		setRootProperty('--slick-right2_Z-index', 2);
	}
}


/*==========window.onload==========*/
window.onload = function() {
	slickCenter = document.querySelector('.slick-track').querySelectorAll('[tabindex="0"]')[0];
	getSlickLR();
	setSlickClassLR();
	getOriginalPosition();
}


/*==========main==========*/
/*-----slick-----*/
$(function() {
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		centerMode: true,
		centerPadding: "25%",
		dots: true,
		speed: 500,
		swipeToSlide: true,
	})
	.on('afterChange', function (slick, currentSlide, nextSlide) {
		slickCenter = document.querySelector('#slick-slide0' + nextSlide);
		getSlickLR();
		removeSlickClassLR();
		setSlickClassLR();
	});


	let worksBox = document.querySelector('.works-box');
	worksBox.addEventListener('transitionrun', e => {
		let roop = setInterval(() => {
			getSlickLR();
			getMovePosition();
			setSlickTransform();
			setSlickZindex();
		}, 1);
		worksBox.addEventListener('transitionend', e => {
			getSlickLR();
			getMovePosition();
			setSlickTransform();
			setSlickZindex();
			clearInterval(roop);
		});
	})
});
