function ContactCard() {
	return {
		scope: {},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ cCard.name }}',
				'<label>Email:</label>',
				'{{ cCard.email }}',
				'<label>Phone:</label>',
				'{{ cCard.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ cCard.username }}</span>',
			'</div>'
		].join(''),
    controller: function(){
    },
    controllerAs: 'cCard',
    bindToController: {
      name: '=',
      email: '=',
      phone: '=',
      username: '='
    },
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
