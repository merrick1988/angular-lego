(function () {
	'use strict';

	angular.module('mainModule')
		.directive("tsModal", function($modal, $templateCache){
			return {
				restrict: "A",
				scope: {tsModal: "@"},
				link: function(scope, element){
					var init,
						ModalInstanceCtrl;

					init = function(){
						$templateCache.put('modal.html', $(scope.tsModal).html());
						$(scope.tsModal).remove();
					};

					ModalInstanceCtrl  = function ($scope, $modalInstance) {
						$scope.ok = function (result) {
							console.log(result)
							$modalInstance.close(result);
						};

						$scope.cancel = function () {
							$modalInstance.dismiss();
						};

						$scope.close = function () {
							$modalInstance.close();
						};
					};

					element.bind("click", function(){
						$modal.open({
							template: $templateCache.get('modal.html'),
							backdrop: 'static',
							scope: scope,
							controller: ModalInstanceCtrl
						});
					})

					init();
				}
			}
		});
})();
