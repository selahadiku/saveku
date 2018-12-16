var customAddthis = {

	addThisUserid: 'ra-xxxxxx',
	shareButtonSelector: '.share',

	init: function() {

		var $addthisButton = $('.addthis_button_compact');
		var $shareButton = $(this.shareButtonSelector);

		$shareButton.on('click', function(e) {

			e.preventDefault();

			Modernizr.load({
				load: '//s7.addthis.com/js/300/addthis_widget.js#pubid=' + this.addThisUserid,
				complete: function() {

					if (!addthis) {
						return;
					}

					var attempts = 0;
					var addthisinterval = window.setInterval(function() {

						addthis.toolbox('.addthis_toolbox')

						// AddThis is slow, so we'll wait for a maximum of 15 seconds
						if (attempts > 50) {
							window.clearInterval(addthisinterval);
						}

						if ($addthisButton[0].onclick) {
							$addthisButton.trigger('click');
							window.clearInterval(addthisinterval);
						}

						attempts += 1;

					}, 300);

				}
			});

		});

	}
};

// http://support.addthis.com/customer/portal/articles/1337994-the-addthis_config-variable
var addthis_config = {
   services_expanded: 'facebook,twitter,linkedin,googleplus,email'
}

customAddthis.init();
