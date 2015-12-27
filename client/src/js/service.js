angular.module('avalon')
    .factory('service', ['$resource','CONFIG',
        function ($resource,CONFIG) {
            var url=CONFIG.url

            var joinGame=function (playerName) {
                console.log('join')
                var resource=$resource(url+'/join')
                resource.save({playerName:playerName},function (res) {
                    console.log(res)
                })
            }

            var test= function(){
                console.log('test')
            }

            return {
                joinGame:joinGame,
                test:test
            };
        }
    ])