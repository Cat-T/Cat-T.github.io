var app = {
	createElement: function(params) {
		var element = document.createElement(params.tagName);
			
			if(params.inputType){
				element.setAttribute('type', params.inputType);
			} 
	if (params.className){
		element.className = params.className;
	}		
	
	if (params.content){
		element.innerHTML = params.content;
	}
			
	if (params.parentElement) {
		params.parentElement.appendChild(element);
	}
		return element;
	},	
		
	generateQuestions: function(questionsAmount, answerAmount) {
		
		for (var i = 1; i < questionsAmount + 1; i++){
			this.createElement ({
				tagName: 'h3',
				className: 'questions',
				content: i + '. Вопрос №' + i,
				parentElement: form
			});
		
			for (var j = 0; j < answerAmount; j++) {
				var label = this.createElement ({
					tagName: 'label',
					className: 'answers',
					content: 'Вариант ответа №' + (j + 1),
					parentElement: form
				});
				
				var checkbox = this.createElement({
					tagName: 'input',
					inputType: 'checkbox',
				});
				
				label.insertAdjacentElement('afterBegin', checkbox);
			}	
		};
	}
}


var body = document.querySelector('body');

 app.createElement( {
	 tagName: 'h1',
	 className: 'title',
	 content: 'Тест по программированию',
	 parentElement: body
 });

var form = app.createElement({
  tagName: 'form',
  parentElement: body
});

app.generateQuestions(3,3);

app.createElement({
		tagName: 'button',
		inputType:'submit',
		className: 'btn btn-primary btn-lg',
		content: 'Проверить мои результаты',
		parentElement: form
});