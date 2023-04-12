/*==========variable==========*/
let slickCenter = document.querySelector('.slick-center');
let slickLeft = "";
let slickRight = "";

/*==========function==========*/
/*-----slick-----*/
function getPosition() {

	let slickLeft = slickCenter.previousElementSibling;
	let slickRight = slickCenter.nextElementSibling;

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
	// let worksContents = document.getElementsByClassName('works-contents');
	// getSlickLR(worksContents);
	// slickLeft.classList.add('slick-left');
	// slickRight.classList.add('slick-right');
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
	worksBox.addEventListener('mousedown', e => {
		// let slickCenter = document.querySelector('.slick-center');
		// let slickLeft = slickCenter.previousElementSibling;
		// let slickRight = slickCenter.nextElementSibling;
		let rect = getPosition();
	})
	
	// .on('beforeChange', function () {
	// 	$('.slick-center').prev().addClass('slick-left').removeClass('slick-right');
	// 	$('.slick-center').next().addClass('slick-right').removeClass('slick-left');
	// 	$('.slick-center').removeClass('slick-left slick-right');
	// });
});