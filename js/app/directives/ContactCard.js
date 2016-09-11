function ContactCard() {
	return {
		scope: {},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username }}</span>',
			'</div>'
		].join(''),
		controller: function() {

		},
		bindToController: {
			name: '=',
 			email: '=',
 			phone: '=',
 			username: '='
		},
		controllerAs: 'ctrl'
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);