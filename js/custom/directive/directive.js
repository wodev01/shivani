app.directive('changeColor', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.template = "<input type='color' name='favcolor' ng-model='changecolor'>";

    directive.scope = {
        changecolor : "=change"
    }
    console.log(directive.scope);
    return directive;
});