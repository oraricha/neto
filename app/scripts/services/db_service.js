'use strict';

angular.module('oraricha.Netomedia')

	.factory("dbService", function() {
		var items = $.get({	
			url: "../../data/data.json",
			success: function(data) {
				console.log(data)
			}
		});

		return {
			items: items
		}
	});
