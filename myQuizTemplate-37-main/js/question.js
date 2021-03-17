class Question {

    constructor() {
      this.question = createElement('h3');
      this.button = createButton('Submit');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.option1 = createElement('h3');
      this.option2 = createElement('h3');
      this.option3 = createElement('h3');
      this.option4 = createElement('h3');

      this.name = createInput("");
      this.option = createInput("");


    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.name.hide();
      this.option.hide();
      this.title.hide();

    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350, 0);
  
      this.question.html("What starts and ends with 'E' but has only one letter?");
      this.question.position(150,80);
      this.option1.html("1. Everyone");
      this.option1.position(150,100);
      this.option2.html("2. Envelope");
      this.option2.position(150,120);
      this.option3.html("3. Estimate");
      this.option3.position(150,140);
      this.option4.html("4. Example");
      this.option4.position(150,160);

      this.name.position(150,230);
      this.option.position(350, 230);



      this.button.position(300, 300);

      this.button.mousePressed(()=>{
        this.title.hide();
        this.name.hide();
        this.option.hide();
        this.button.hide();

        contestant.name = this.name.value();
        contestant.answer = this.option.value();

        playerCount+=1;
        contestant.index = playerCount;
        contestant.update();
        contestant.updateCount(playerCount);
        
        this.greeting.html("Hello " + contestant.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    
    }
  }