/*==========variable==========*/
let slickLeft = "";
let slickRight = "";

/*==========function==========*/
/*-----slick-----*/
function getSlickLR(array) {
	for ( item of array ) {
		let dataSlickIndex = Number(item.getAttribute('data-slick-index'));
		console.log(dataSlickIndex);
		switch (dataSlickIndex) {
			case -1:
				slickLeft = item;
				break;

			case 1:
				slickRight = item;
				break;

			default:
				break;
		}
	};
}

/*==========window.onload==========*/
window.onload = function() {
	// let worksContents = document.getElementsByClassName('works-contents');
	// getSlickLR(worksContents);
	// slickLeft.classList.add('slick-left');
	// slickRight.classList.add('slick-right');
}


/*==========jQuery==========*/
/*-----slick-----*/
$(function() {
	$('.slider').slick({
		centerMode: true,
		centerPadding: "20%",
		dots: true,
	})

	.on('afterChange', function () {
		$('.slick-center').prev().addClass('slick-left').removeClass('slick-right');
		$('.slick-center').next().addClass('slick-right').removeClass('slick-left');
		$('.slick-center').removeClass('slick-left slick-right');
	});
});