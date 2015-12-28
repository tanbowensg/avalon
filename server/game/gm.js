var Room=require("./store")

var gm={
	character:[
		["meilin"],
		["pingmin","meilin"],
		["pingmin","meilin","modeleide"],
		["pingmin","meilin","modeleide","paixiweier"],
		["pingmin","meilin","modeleide","paixiweier","cike"],
	]
}

//游戏等待开始阶段
gm.createRoom=function (store,roomNum) {
	if(store[roomNum]){
		return store[roomNum]
	} else {
		store[roomNum] = new Room(roomNum)
		return store[roomNum]
	}
}

gm.addPlayer = function (store, room, name) {
	store[room].addPlayer(name)
}

gm.removePlayer = function (store, room, name) {
	// console.log(room)
	// console.log(store)
	// console.log(store[room])
	store[room].removePlayer(name)
}

// gm.addPlayer("张合")
// gm.addPlayer("王涛")
// gm.addPlayer("郭昊")
// gm.addPlayer("我")
// gm.addPlayer("黄高原")

gm.start=function (store) {
	console.log('game start')

	gm.arrangeCharacters()

	for (var i = gm.players.playerList.length - 1; i >= 0; i--) {
		console.log(gm.players.playerList[i].name)
		console.log(gm.players.playerList[i].id)
		console.log(gm.players.playerList[i].character)
		console.log("-------------------------------")
	};
}

gm.arrangeCharacters=function(store){
	var _characterList=gm.character[gm.players.num-1]
	_characterList.shuffle()

	for (var i = _characterList.length - 1; i >= 0; i--) {
		gm.players.playerList[i].character = _characterList[i]
	};
}

Array.prototype.shuffle=function(){
    var iLength = this.length,
        i = iLength,
        mTemp,
        iRandom;
 
    while(i--){
        if(i !== (iRandom = Math.floor(Math.random() * iLength))){
            mTemp = this[i];
            this[i] = this[iRandom];
            this[iRandom] = mTemp;
        }
    }
 
    return this;
}

// gm.start()

module.exports = gm;
