(function () {
	'use strict';

	angular.module('mainModule')
		.directive("tsFileUpload", function($modal, $templateCache){
			return {
				restrict: "A",
				scope: {preview: "&"},
				link: function(scope, element){
					var init,
						changePhoto;

					changePhoto = function(){
						//Check for the various File API support.

						if (window.File && window.FileReader && window.FileList) {
							scope.preview = scope.preview()
							var oFReader = new FileReader(),
								photo = element[0].files[0];

							oFReader.readAsDataURL(photo);
							scope.preview.name = photo.name;


							oFReader.onload = function (oFREvent) {
								scope.preview.src = oFREvent.target.result;
								scope.$apply();
							};
						} else {
							alert(" FileReader is not supporting");
						}
					}

					init = function(){
						element[0].addEventListener('change', changePhoto, false);

					};

					init();
				}
			}
		});
})();
