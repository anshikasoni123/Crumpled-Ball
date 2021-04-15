class Base
{
    constructor(x, y, width, height)
    {
        var options = {isStatic : true}

        this.Body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png")
        
        World.add(world, this.Body)

    }

    display()
    {
        imageMode(CENTER)

        var pos = this.Body.position;
    

        image(this.image, pos.x, pos.y, this.width*4, this.height*4)
    }
}