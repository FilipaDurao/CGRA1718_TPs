class MyFloor extends CGFobject
{
	constructor(scene) 
	{
        super(scene);
        this.cube = new MyUnitCubeQuad(this.scene);
    };
    
    display() {
        
        this.scene.translate(0, 0.05, 0);
        this.scene.scale(8, 0.1, 6);
        this.cube.display();

    }
};