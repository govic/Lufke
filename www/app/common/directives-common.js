angular.module('lufke')
	.directive('myPost', function(){
            return {
                restrict: 'E',
                templateUrl: 'app/common/directive-post.html'
              };
});