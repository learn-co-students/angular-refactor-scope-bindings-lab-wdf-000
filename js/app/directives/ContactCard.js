function ContactCard() {
	return {
		scope: {},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ contact.name }}',
				'<label>Email:</label>',
				'{{ contact.email }}',
				'<label>Phone:</label>',
				'{{ contact.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ contact.username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E',
		controller: function() {
			this.username = this.username.toLowerCase();
		},
		controllerAs: 'contact',
		bindToController: {name: '=',
											 email: '=',
										   phone: '=',
										   username: '='},
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
