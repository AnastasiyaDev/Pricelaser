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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBmb28gPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjbW9ibGUtbWVudScpXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgJy5qcy1vcGVuLWxvZy1tZW51JywgdGhpcy5vcGVuTG9nTWVudS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsICcuanMtb3Blbi1uYXYtbWVudScsIHRoaXMub3Blbk5hdk1lbnUuYmluZCh0aGlzKSk7XG5cdH0sXG5cblx0b3BlbkxvZ01lbnU6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JCgnI2xvZy1saXN0Jykuc2xpZGVUb2dnbGUoJ21pZGRsZScpO1xuXHRcdCQoJyNuYXYtbGlzdCcpLnNsaWRlVXAoJ21pZGRsZScpO1xuXHR9LFxuXG5cdG9wZW5OYXZNZW51OiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoJyNuYXYtbGlzdCcpLnNsaWRlVG9nZ2xlKCdtaWRkbGUnKTtcblx0XHQkKCcjbG9nLWxpc3QnKS5zbGlkZVVwKCdtaWRkbGUnKTtcblx0fSxcbn07XG5cbmZvby5pbml0KCk7XG4iXSwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
