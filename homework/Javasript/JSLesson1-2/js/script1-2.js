//Возведение в степень
var num1 = prompt('Enter your number', '');
var num2 = prompt('Rase to the power', '');

function rase(base, exponent) {
	var result = 1;

	for (i = 0; i < exponent; i++) {
		result = result*base; 
	}
	
	return result;
	
	}

console.log(rase(num1, num2) );


//Массив
var arr = [];
for (var i = 0; i < 5; i++) {
	var n = prompt('Enter a name', '');
	arr.push (n);
}

//console.log(arr);

var userName = prompt('Enter a user name', '');

var p = arr.indexOf(userName);
if (arr[p] === userName)  {
	alert(userName + ' ,Вы успешно вошли');
} else {
	alert('Имя пользователя не найдено');
}