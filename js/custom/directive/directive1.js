app.directive('student', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";

    directive.scope = {
        student : "=name1"
    }

    console.log(directive.scope);

    directive.compile = function(element, attributes) {
        element.css("border", "1px solid #cccccc");

        var linkFunction = function($scope, element, attributes) {
            element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
            element.css("background-color", "#ff00ff");
        }
        return linkFunction;
    }

    return directive;
});