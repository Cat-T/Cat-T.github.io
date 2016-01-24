(function() {
	
  document.addEventListener('DOMContentLoaded', contentResume);
 
	function contentResume() {
		
		var  data =	{
			myName: 'Татаренко Екатерина Владимировна',
			image: 'img/pic.jpg',
			status: 'Студент GoIT online',
			aboutMe: 'Я с вами, потому что:',
			about: ['FrontEnd - это микс творчества и программирования',
							'FrontEnd даёт возможность удалённой работы',
							'FrontEnd - это потрясающий шанс вплести свою ниточку во всемирную паутину'
			],
			phoneTitle: 'Мой контактный телефон',
			phoneNumber: '+380677917537',
			contactFacebook: 'Мой профиль в Facebook',
			facebookUrl: 'https://www.facebook.com/kateryna.tatarenko',
			facebookLink: 'facebook.com/kateryna.tatarenko',
			feedback: 'Feedback',
			email: 'tatarenko.cat@gmail.com'
		};

		var addResume = document.getElementById('addResume');
		var tmpl = _.template(document.getElementById('resume').innerHTML);
		
		addResume.innerHTML = tmpl(data);
	};
})();
