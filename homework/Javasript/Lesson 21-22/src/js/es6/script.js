'use strict';

$(() => {

  let html = $('#testing').html();

  const data = {
    headerTitle: 'TEST',
    questions: [
      {
        title: 'Question №1',
        options: ['Answer №1', 'Answer №2', 'Right answer №3'],
        trueValue: [2]
      },
      {
        title: 'Question №2',
        options: ['Answer №1', 'Right answer №2', 'Answer №3'],
        trueValue: [1]
      },
      {
        title: 'Question №3',
        options: ['Answer №1', 'Right answer №2', 'Right answer №3', 'Answer №4'],
        trueValue: [1, 2]
      },
      {
        title: 'Question №4',
        options: ['Right answer №1', 'Right answer №2', 'Answer №3', 'Answer №4'],
        trueValue: [0, 1]
      }],
        submit: 'Check my results'
    };

  let content = tmpl(html,data);

  $('body').append(content);
  
  localStorage.setItem('testing', JSON.stringify(data));
  let test = localStorage.getItem('testing');

  test = JSON.parse(test);

  console.log(test)

$('#submit').on('click', () => {
  let test = document.getElementsByClassName('test__item')
  let answ = JSON.parse(localStorage.getItem('testing'))
  let modal = document.querySelector('#modal-body')
  let html = ''

  let errPusher = block => {
    html += "<div><p>Block of questions #"+parseInt(block+1)+" has errors. Please, check answers. =(</p></div>"
    test[block].classList.add('errored')
  }

  let answCheker = (trueAnsw, value) => {
    for (let block = 0; block < trueAnsw.length; block++) {
      if(trueAnsw[block] == value) return true
    }
    return false
  }

  let setResult = (block, result, error) => {
    test[block].classList.add(result)
    if(error) errPusher(block)
  }


  for (let block  = 0; block  < test.length; block ++) {
    let rightAnswers = answ.questions[block].trueValue
    let rightAnswersLength = rightAnswers.length
    let chekboxes = test[block].getElementsByTagName('input')
    let errCounter = 0
    let unchecked = 0

    for (let k = 0; k < chekboxes.length; k++) {
      let checkbox = chekboxes[k]
      if(checkbox.checked == true) {
        if(answCheker(rightAnswers, k)) {
          if(rightAnswersLength == 1) {
            setResult(block, 'successed')
            break;
          }
         } else {
          if(rightAnswersLength > 1) {
            errCounter++
          } else {
           setResult(block, 'errored', 1)
           break;
          }
        }
        } else {
          unchecked++
        }

        if(unchecked == chekboxes.length) {
          setResult(block, 'errored', 1)
          break;
        }
      }
      if(errCounter) setResult(block, 'errored', 1) 
  }

  if(!html) html = "<div><p>All your answers are correct!</p></div>"

  html += '<button onClick="reloadPage()">Close me!</button>'

  modal.innerHTML = html
  let form = document.querySelector('.test')
  form.style.opacity = "0.3"
  modal.style.display = "block"
})
});

let reloadPage = () => document.location.href = document.location.href

let createRightAnswers = test => {
    let answersObject = {};
    test.questions.forEach((question, index) => {
      answersObject["question"+index] = question.trueValue;
    });
    return answersObject;
  }