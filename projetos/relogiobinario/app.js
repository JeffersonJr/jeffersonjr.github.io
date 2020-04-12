var main = function () {

	$(document).keydown(function (event) {
		if (event.which == 72) {
			$('#Modal').modal('toggle');
		} else if (event.which == 84) {
			$('.header').toggleClass('disapear');
		} else if (event.which == 66) {
			$('.bin').toggleClass('disapear');
		} else if (event.which == 67) {
			$('.dec').toggleClass('disapear');
		};

	});

	window.setInterval(function () {
		clock()
	}, 1000);

	var lighting = function (n, t) {
		if (n == 1) {
			$('.' + t + '-1').addClass('on').removeClass('off');
			$('.' + t + '-2').addClass('off').removeClass('on');
			$('.' + t + '-4').addClass('off').removeClass('on');
			$('.' + t + '-8').addClass('off').removeClass('on');

			$('.bin-' + t + '-1').text('1');
			$('.bin-' + t + '-2').text('0');
			$('.bin-' + t + '-4').text('0');
			$('.bin-' + t + '-8').text('0');
		} else if (n == 2) {
			$('.' + t + '-1').addClass('off').removeClass('on');
			$('.' + t + '-2').addClass('on').removeClass('off');
			$('.' + t + '-4').addClass('off').removeClass('on');
			$('.' + t + '-8').addClass('off').removeClass('on');

			$('.bin-' + t + '-1').text('0');
			$('.bin-' + t + '-2').text('2');
			$('.bin-' + t + '-4').text('0');
			$('.bin-' + t + '-8').text('0');
		} else if (n == 3) {
			$('.' + t + '-1').addClass('on').removeClass('off');
			$('.' + t + '-2').addClass('on').removeClass('off');
			$('.' + t + '-4').addClass('off').removeClass('on');
			$('.' + t + '-8').addClass('off').removeClass('on');

			$('.bin-' + t + '-1').text('1');
			$('.bin-' + t + '-2').text('2');
			$('.bin-' + t + '-4').text('0');
			$('.bin-' + t + '-8').text('0');
		} else if (n == 4) {
			$('.' + t + '-1').addClass('off').removeClass('on');
			$('.' + t + '-2').addClass('off').removeClass('on');
			$('.' + t + '-4').addClass('on').removeClass('off');
			$('.' + t + '-8').addClass('off').removeClass('on');

			$('.bin-' + t + '-1').text('0');
			$('.bin-' + t + '-2').text('0');
			$('.bin-' + t + '-4').text('4');
			$('.bin-' + t + '-8').text('0');
		} else if (n == 5) {
			$('.' + t + '-1').addClass('on').removeClass('off');
			$('.' + t + '-2').addClass('off').removeClass('on');
			$('.' + t + '-4').addClass('on').removeClass('off');
			$('.' + t + '-8').addClass('off').removeClass('on');

			$('.bin-' + t + '-1').text('1');
			$('.bin-' + t + '-2').text('0');
			$('.bin-' + t + '-4').text('4');
			$('.bin-' + t + '-8').text('0');
		} else if (n == 6) {
			$('.' + t + '-1').addClass('off').removeClass('on');
			$('.' + t + '-2').addClass('on').removeClass('off');
			$('.' + t + '-4').addClass('on').removeClass('off');
			$('.' + t + '-8').addClass('off').removeClass('on');

			$('.bin-' + t + '-1').text('0');
			$('.bin-' + t + '-2').text('2');
			$('.bin-' + t + '-4').text('4');
			$('.bin-' + t + '-8').text('0');
		} else if (n == 7) {
			$('.' + t + '-1').addClass('on').removeClass('off');
			$('.' + t + '-2').addClass('on').removeClass('off');
			$('.' + t + '-4').addClass('on').removeClass('off');
			$('.' + t + '-8').addClass('off').removeClass('on');

			$('.bin-' + t + '-1').text('1');
			$('.bin-' + t + '-2').text('2');
			$('.bin-' + t + '-4').text('4');
			$('.bin-' + t + '-8').text('0');
		} else if (n == 8) {
			$('.' + t + '-1').addClass('off').removeClass('on');
			$('.' + t + '-2').addClass('off').removeClass('on');
			$('.' + t + '-4').addClass('off').removeClass('on');
			$('.' + t + '-8').addClass('on').removeClass('off');

			$('.bin-' + t + '-1').text('0');
			$('.bin-' + t + '-2').text('0');
			$('.bin-' + t + '-4').text('0');
			$('.bin-' + t + '-8').text('8');
		} else if (n == 9) {
			$('.' + t + '-1').addClass('on').removeClass('off');
			$('.' + t + '-2').addClass('off').removeClass('on');
			$('.' + t + '-4').addClass('off').removeClass('on');
			$('.' + t + '-8').addClass('on').removeClass('off');

			$('.bin-' + t + '-1').text('1');
			$('.bin-' + t + '-2').text('0');
			$('.bin-' + t + '-4').text('0');
			$('.bin-' + t + '-8').text('8');
		} else {
			$('.' + t + '-1').addClass('off').removeClass('on');
			$('.' + t + '-2').addClass('off').removeClass('on');
			$('.' + t + '-4').addClass('off').removeClass('on');
			$('.' + t + '-8').addClass('off').removeClass('on');

			$('.bin-' + t + '-1').text('0');
			$('.bin-' + t + '-2').text('0');
			$('.bin-' + t + '-4').text('0');
			$('.bin-' + t + '-8').text('0');
		};
	};

	var clock = function () {

		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var dia = date.getDate();
		var mes = date.getMonth();
		var ano = date.getFullYear();

		var s2 = seconds % 10;
		var s1 = (seconds - s2) / 10 % 10;
		var m2 = minutes % 10;
		var m1 = (minutes - m2) / 10 % 10;
		var h2 = hours % 10;
		var h1 = (hours - h2) / 10 % 10;
		var d1 = (dia)
		var d2 = (mes)+1
		var d3 = (ano)

		lighting(s2, 's-2');
		lighting(s1, 's-1');
		lighting(m2, 'm-2');
		lighting(m1, 'm-1');
		lighting(h2, 'h-2');
		lighting(h1, 'h-1');
		

		$('.dec-hour1 p').text(`${h1}`);
		$('.dec-hour2 p').text(`${h2}:`);
		$('.dec-minute1 p').text(`${m1}`);
		$('.dec-minute2 p').text(`${m2}:`);
		$('.dec-second1 p').text(`${s1}`);
		$('.dec-second2 p').text(`${s2}`);
		$('.dia-day h5').text(`Data: ${d1} / ${d2} / ${d3}`)
	};

};

$(document).ready(main);