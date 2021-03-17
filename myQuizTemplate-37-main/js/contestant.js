
class Contestant {
  constructor(){
    this.index = null;
    this.name = null;
    this.answer = 0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "contestants/contestant" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getContestantInfo(){
    var playerInfoRef = database.ref('contestants');
    playerInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }


}
