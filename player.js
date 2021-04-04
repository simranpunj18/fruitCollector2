class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
          // create the property for the score and intialize with zero
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}

if(player.index !== null) {
    objects.destroy;
    if(score === >0 +1);
    update(){
        database.ref;
        playerInfoRef.on;
        allPlayers = data.val();
    }

    player.score =player.score+1;
}

//text to display player score.  

   text("Player 1 :" + allPlayers.player1.score,50,50);
