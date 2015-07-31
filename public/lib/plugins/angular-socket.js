/*
 *http://code.tutsplus.com/tutorials/more-responsive-single-page-applications-with-angularjs-socketio-creating-the-library--cms-21738
 */

var module = angular.module('socket.io', []);

module.provider('$socket', function $socketProvider() {
    
    var ioUrl = '';
    var ioConfig = {};
    
    function setOption(name, value, type) {
        if (typeof value != type) {
            throw new TypeError("'"+ name +"' must be of type '"+ type + "'");
        }     
        ioConfig[name] = value;
    }
        
    this.setResource = function setResource(value) {
        setOption('resource', value, 'string');
    };
    this.setConnectTimeout = function setConnectTimeout(value) {
        setOption('connect timeout', value, 'number');
    };
    this.setTryMultipleTransports = function setTryMultipleTransports(value) {
        setOption('try multiple transports', value, 'boolean');
    };
    this.setReconnect = function setReconnect(value) {
        setOption('reconnect', value, 'boolean');
    };
    this.setReconnectionDelay = function setReconnectionDelay(value) {
        setOption('reconnection delay', value, 'number');
    };
    this.setReconnectionLimit = function setReconnectionLimit(value) {
        setOption('reconnection limit', value, 'number');
    };
    this.setMaxReconnectionAttempts = function setMaxReconnectionAttempts(value) {
        setOption('max reconnection attempts', value, 'number');
    };
    this.setSyncDisconnectOnUnload = function setSyncDisconnectOnUnload(value) {
        setOption('sync disconnect on unload', value, 'boolean');
    };
    this.setAutoConnect = function setAutoConnect(value) {
        setOption('auto connect', value, 'boolean');
    };
    this.setFlashPolicyPort = function setFlashPolicyPort(value) {
        setOption('flash policy port', value, 'number')
    };
    this.setForceNewConnection = function setForceNewConnection(value) {
        setOption('force new connection', value, 'boolean');
    };
    this.setConnectionUrl = function setConnectionUrl(value){
        if ('string' !== typeof value) {
            throw new TypeError("setConnectionUrl error: value must be of type 'string'");
        }
        ioUrl = value;
    }
    
    this.$get = function $socketFactory($rootScope) {
        // console.log(io);
        // console.log(ioConfig);
        // console.log(ioUrl);
        var socket = io(ioUrl, ioConfig);
                
        return {
            on : function on(event, callback){
                socket.on(event, function(){
                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
                    var args = arguments;
                    // $apply faz com que a callback possa invocar variaveis
                    // em $scope que tenham sido declaradas pela
                    // directiva ng-model ou {{}}
                    $rootScope.$apply(function () {
                        // este callback.apply regista a função callback que
                        // poderá conter referencias à variavel socket
                        callback.apply(socket, args);
                    });
                });
            },
            off: function off(event, callback) {
                if (typeof callback == 'function') {
                    //neste caso o callback nao tem acesso a $scope nem à
                    //scope definida pela variavel socket
                    socket.removeListener(event, callback);
                } else {
                    socket.removeAllListeners(event);
                }
            },
            emit: function emit(event, data, callback) {
                if (typeof callback == 'function') {
                    socket.emit(event, data, function () {
                        var args = arguments;
                        $rootScope.$apply(function () {
                            callback.apply(socket, args);
                        });
                    });
                }    
                else{
                    socket.emit(event, data);
                }
            }
        };
    };
});