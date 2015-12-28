var store={}

var Room=function (room) {
    this.roomNum=room
    this.state=false
    this.player={
        playerList:[
            {
                id:0,
                name:"bowen",
                character:"meilin",
                status:false,
            }
        ]
    }

    this.addPlayer=function(name) {
        var newPlayer={
            id:this.player.playerList.length,//TODO：这里个会有个奇怪的null不知道为什么
            // id:Math.random(),
            name:name,
            character:"",
            status:false
        }
        console.log(newPlayer)
        this.player.playerList.push(newPlayer)
        console.log(this.player.playerList)
    }

    this.removePlayer=function(name) {
        console.log(name)
        console.log(this.roomNum)
        this.player.playerList.removeByValue('name',name)
    }
}

store.checkPlayerStatus=function () {
    for (var i = this.player.playerList.length - 1; i >= 0; i--) {
        if(!this.player.playerList[i].status){
            return false
        }
    }
    return true
}

Array.prototype.removeByValue=function(key,value){
    for (var i = this.length - 1; i >= 0; i--) {
        if(this[i][key]===value){
            this.splice(i,1)
        }
    };
}

module.exports = Room