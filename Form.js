class Form{
    constructor(){
        this.Title = createElement('h3');
        this.inputbox = createInput("Name");
        this.button = createButton("Enter");
        this.greeting = createElement('h5');   
    }
    display(){
        this.Title.html("Multiplayer Gaming");
        this.Title.position(130,0);
        
        
        this.inputbox.position(130,160);

        
        this.button.position(250,200);

        

        this.button.mousePressed(()=>{
           this.inputbox.hide();
            this.button.hide();
            player.name = this.inputbox.value();
            playercount = playercount + 1;
            player.index = playercount;
            player.updateplayerinfo();
            player.updateplayercount(playercount);
            this.greeting.html(" Welcome " + player.name + " To Multiplayer Gaming ");
            this.greeting.position(130,160);
        })
    }
    hide(){
        this.inputbox.hide();
        this.button.hide();
        this.greeting.hide();
    }
}