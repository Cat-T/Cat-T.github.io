
/*--------- LESSON #15 (AJAX) ----------*/

function GoogleCallback (func, data) {
    window[func](data);
};

var search =$('.search')

$(function() {
 
    var $wrapper = $('.wrapper');
    var $button = $('.search__button')  

    $button.on('click', function(e) {

        var $text = $('.search__input').val();

        e.preventDefault();
   
        $.ajax({

            url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg
="+ $text +"&rsz=8&callback=GoogleCallback&context=?",
            // url: "http://ajax.googleapis.com/ajax/services/search/web?v=2.0&key=AIzaSyD5gSUdK9hVxb0mqvi4fw2hrMgbotUJGVA&q="+ $text +"&rsz=8&callback=GoogleCallback&context=?",
            // AIzaSyD5gSUdK9hVxb0mqvi4fw2hrMgbotUJGVA
            dataType : "jsonp",
            success: function (data) {
                $result = $('.result');
                $result.remove();

                var ul = document.createElement("ul");
                $.each(data.results, function(i, val) {
                    var li = document.createElement("li");
                    li.innerHTML = ('<h3><a href="' + val.url + '">' + val.title + '</a></h3><p class="visibleURL">' + val.visibleUrl + '</p><p class="content">' + val.content + '</p>');                           
                    ul.appendChild(li);
                });

                var $result = document.createElement('div');
                $result.classList.add('result');
                $result.appendChild(ul);
                $wrapper.append($result);
            }

        });
    });

});


/*--------- LESSON #16 (PROTOTYPE) ----------*/
;(function(){
    
    // class Human
    function Human(name, age, gender, height, weight) {
        this.name = name || "Katya";
        this.age = age || 30;
        this.gender = gender || "female";
        this.height = height || 168;
        this.weight = weight || 53;
    }


    // class Worker inherits class Human
    function Worker(name, age, gender, height, weight, job, wage) {
        Human.apply(this, arguments);
        this.job = job || "risk-manager";
        this.wage = wage || '$1000';
    }

    Worker.prototype = Object.create(Human.prototype);
    Worker.prototype.constructor = Worker;

    Worker.prototype.working = function() {
        var str = '';
        if (this.gender === 'female') {
            str = this.name +' is '+this.age+ ' years old and he is working as a ' + this.job;
        } else {
            str = this.name +' is '+this.age+ ' years old and she is working as a ' + this.job;         
        }
        return str;
    };

    
    // class Student inherits class Human
    function Student(name, age, gender, height, weight, studyPlace, scholarship) {
        Human.apply(this, arguments);
        this.studyPlace = studyPlace || "manager";
        this.scholarship = scholarship || '$500';
    }

    Student.prototype = Object.create(Human.prototype);
    Student.prototype.constructor = Student;

    Student.prototype.watchSeries = function() {
        return this.name +' is '+ this.age +' years old and is watching Fast\'N\'Loud and has average scholarship in amount of ' + this.scholarship;
    };


    var worker1 = new Worker("John");
    var worker2 = new Worker("Monica", undefined, "female", 170, 61, "baby-sitter");
    var worker3 = new Worker("Jan", 26, "female", 170, 56, "model", "$1000");

    var student1 = new Student(undefined, 19);
    var student2 = new Student("Polina", 21, "female");
    var student3 = new Student("Inna", 23, "female", 167, 48, "KPI", 800);

    console.log("worker1: ", worker1);
    console.log(worker1.working());
    console.log("worker1: ", worker2);
    console.log(worker2.working());
    console.log("worker1: ", worker3);
    console.log(worker3.working());

    console.log("sudent1: ", student1);
    console.log(student1.watchSeries());
    console.log("sudent1: ", student2);
    console.log(student2.watchSeries());
    console.log("sudent1: ", student3);
    console.log(student3.watchSeries());
})();