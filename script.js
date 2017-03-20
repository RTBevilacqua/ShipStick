$(function(){ 

var calendarFrom = $('#calendar-from-destination');

	//ACTION FOR ONE WAY BUTTON
	$('.one-way').on('click', function() {
		$(this).css('background', '#52AA54');
		$('.round-trip').css('background', '#D8D8D8');
		TweenMax.to(calendarFrom, 1, {y: -20, opacity: 0});
	});

	//ACTION FOR ROUND TRIP BUTTON
	$('.round-trip').on('click', function() {
		$(this).css('background', '#52AA54');
		$('.one-way').css('background', '#D8D8D8');
		TweenMax.to(calendarFrom, 1, {y: 10, opacity: 1});
	});

	//ACTION CLICK ON DAY
	$('.sm-cal td').on('click', function() {
		$(this).css('background', 'orange');
	})

});