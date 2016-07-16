"use strict";

var foo = {
    init: function () {
        $('#moble-menu')
            .on('click', '.js-open-log-menu', this.openLogMenu.bind(this))
            .on('click', '.js-open-nav-menu', this.openNavMenu.bind(this));
	},

	openLogMenu: function (event) {
		event.preventDefault();
		$('#log-list').slideToggle('middle');
		$('#nav-list').slideUp('middle');
	},

	openNavMenu: function (event) {
		event.preventDefault();
		$('#nav-list').slideToggle('middle');
		$('#log-list').slideUp('middle');
	},
};

foo.init();
