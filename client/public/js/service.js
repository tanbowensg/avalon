angular.module('avalon')
    .factory('service', ['$resource','CONFIG',
        function ($resource,CONFIG) {
            var url=CONFIG.url

            var joinGame=function (playerName,room) {
                console.log(room)
                var resource=$resource(url+'/join')
                var sendData={
                    playerName:playerName,
                    room:room
                }
                resource.save(sendData,function (res) {
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