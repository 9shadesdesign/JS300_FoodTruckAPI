$(function () {

	'use strict';

	var foodTypes = [];

	$.get('/trucks', function (truckList) {
		var list = [];
		if (truckList) {
			truckList.forEach(function (truck) {
				list.push('<li><a href="/trucks/' + truck._id + '">' + truck.name + '</a></li>');
			});
			$('.trucks-list').append(list);
		}
	});
	
});