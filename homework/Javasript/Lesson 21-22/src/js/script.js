'use strict';

$(function () {

  var html = $('#testing').html();

  var data = {
    headerTitle: 'TEST',
    questions: [{
        title: 'Question №1',
        options: ['Answer №1', 'Answer №2', 'Right answer №3'],
        trueValue: [2]
      }, {
        title: 'Question №2',
        options: ['Answer №1', 'Right answer №2', 'Answer №3'],
        trueValue: [1]
      },{
        title: 'Question №3',
        options: ['Answer №1', 'Right answer №2', 'Right answer №3', 'Answer №4'],
        trueValue: [1, 2]
      },{
        title: 'Question №4',
        options: ['Right answer №1', 'Right answer №2', 'Answer №3', 'Answer №4'],
        trueValue: [0, 1]
      }],
        submit: 'Check my results'
    };

  var content = tmpl(html, data);

  $('body').append(content);

  localStorage.setItem('testing', JSON.stringify(data));
  var test = localStorage.getItem('testing');

  test = JSON.parse(test);

  console.log(test);

  $('#submit').on('click', function () {
    var test = document.getElementsByClassName('test__item');
    var answ = JSON.parse(localStorage.getItem('testing'));
    var modal = document.querySelector('#modal-body');
    var html = '';

    var errPusher = function errPusher(block) {
      html += "<div><p>Block of questions #" + parseInt(block + 1) + " has errors. Please, check answers. =(</p></div>";
      test[block].classList.add('errored');
    };

    var answCheker = function answCheker(trueAnsw, value) {
      for (var block = 0; block < trueAnsw.length; block++) {
        if (trueAnsw[block] == value) return true;
      }
      return false;
    };

    var setResult = function setResult(block, result, error) {
      test[block].classList.add(result);
      if (error) errPusher(block);
    };

    for (var block = 0; block < test.length; block++) {
      var rightAnswers = answ.questions[block].trueValue;
      var rightAnswersLength = rightAnswers.length;
      var chekboxes = test[block].getElementsByTagName('input');
      var errCounter = 0;
      var unchecked = 0;

      for (var k = 0; k < chekboxes.length; k++) {
        var checkbox = chekboxes[k];
        if (checkbox.checked == true) {
          if (answCheker(rightAnswers, k)) {
            if (rightAnswersLength == 1) {
              setResult(block, 'successed');
              break;
            }
          } else {
            if (rightAnswersLength > 1) {
              errCounter++;
            } else {
              setResult(block, 'errored', 1);
              break;
            }
          }
        } else {
          unchecked++;
        }

        if (unchecked == chekboxes.length) {
          setResult(block, 'errored', 1);
          break;
        }
      }
      if (errCounter) setResult(block, 'errored', 1);
    }

    if (!html) html = "<div><p>All your answers are correct!</p></div>";

    html += '<button onClick="reloadPage()">Close me!</button>';

    modal.innerHTML = html;
    var form = document.querySelector('.test');
    form.style.opacity = "0.3";
    modal.style.display = "block";
  });
});

var reloadPage = function reloadPage() {
  return document.location.href = document.location.href;
};

var createRightAnswers = function createRightAnswers(test) {
  var answersObject = {};
  test.questions.forEach(function (question, index) {
    answersObject["question" + index] = question.trueValue;
  });
  return answersObject;
};