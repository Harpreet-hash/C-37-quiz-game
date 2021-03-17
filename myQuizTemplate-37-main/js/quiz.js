class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
  
      
    }
    play(){
        background("yellow")
        question.hide();
        
        
        Contestant.getContestantInfo();
        if(allContestants!=undefined){

            textSize(25)
            fill("blue")
            text("Result of the quiz",380,30);
            text("NOTE: Those who answered correctly are highlighted in green",230,217);
  
            var y=240;
            var x=200;
            for(var plr in allContestants){

                if(allContestants[plr].answer==2){

                    fill("green")
                }else{
                    fill("red")
                }
                text(allContestants[plr].name+" : "+allContestants[plr].answer,x,y)
                
                y+=30;
            }

        }
    }
}