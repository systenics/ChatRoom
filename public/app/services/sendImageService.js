angular.module('Services',[])
.service('sendImageService', function ($http, $rootScope) {
	this.sendImage = function (file) {
		// console.log(file);
		// var fd = new FormData();
        // fd.append('file', file);
        // fd.append('name', 'saad');
        // console.log("fd", fd);
        var fd= {name : "Ankit", 
        			Desg : "Developer"};
		 return $http.post( $rootScope.baseUrl + '/v1/demo', fd, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            }).then(function (response) {
                return response;
            });

	};

});