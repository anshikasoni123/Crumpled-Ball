class Bucket
{
    constructor(x, y, width, height)
    {
        var options = {isStatic : true}

        this.Body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        //this.image = loadImage("dustbingreen.png")
        
        World.add(world, this.Body)

    }

    display()
    {
        rectMode(CENTER)

        var pos = this.Body.position;

        rect(pos.x, pos.y, this.width, this.height)

        //image(this.image, pos.x, pos.y, this.width, this.height)
    }
}