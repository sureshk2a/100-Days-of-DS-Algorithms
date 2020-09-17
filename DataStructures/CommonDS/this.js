class Player {
    constructor(name,type)
    {
        this.name = name;
        this.type = type;
    }
    introduce()
    {
        console.log("Hey! I'm "+this.name+", I'm a "+this.type);
    }
}

var player = new Player("Suresh","Pro");
player.introduce();
