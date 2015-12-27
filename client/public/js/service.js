angular.module('avalon')
    .factory('service', ['$resource','CONFIG',
        function ($resource,CONFIG) {
            var obj={}
            var url=CONFIG.url
            var roomResource=$resource(url+'/room')
            var playerResource=$resource(url+'/player')

            obj.createRoom=function (roomNum) {
                var sendData={
                    roomNum:roomNum
                }
                roomResource.save(sendData,function (res) {
                    console.log(res)
                })
            }

            obj.addPlayer=function (roomNum, playerName) {
                var sendData={
                    playerName:playerName,
                    roomNum:roomNum
                }
                playerResource.save(sendData,function (res) {
                    console.log(res)
                })
            }

            obj.removePlayer=function (roomNum, playerName) {
                var sendData={
                    playerName:playerName,
                    roomNum:roomNum
                }
                playerResource.delete(sendData,function (res) {
                    console.log(res)
                })
            }

            obj.test= function(){
                console.log('test')
            }

            return obj
        }
    ])