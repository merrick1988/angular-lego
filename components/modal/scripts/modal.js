(function () {
	'use strict';

	angular.module('mainModule')
		.directive("tsModal", function($modal, $templateCache, $compile){
			return {
				restrict: "A",
				scope: true,
				link: function (scope, element, attrs) {
					var init,
					ModalInstanceCtrl;

					init = function () {
						$templateCache.put(attrs.tsModal + '.html', $(attrs.tsModal).html());
						$(attrs.tsModal).remove();
					};

					ModalInstanceCtrl = function ($scope, $modalInstance) {
						$scope.close = function () {
							$modalInstance.close();
						};
					};

					element.bind("click", function () {
						var template = $templateCache.get(attrs.tsModal + '.html'),
							linkFn = $compile(template);

							linkFn(scope);

							$modal.open({
								template: template,
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
