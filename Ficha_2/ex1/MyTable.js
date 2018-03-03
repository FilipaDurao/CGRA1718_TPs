class MyTable extends CGFobject
{
	constructor(scene) 
	{
        super(scene);
        this.cube = new MyUnitCubeQuad(this.scene);
    };
    
    display() {

		// Tampo da mesa
		this.scene.pushMatrix();

		this.scene.translate(0, 3.65, 0);
		this.scene.scale(5, 0.3, 3);
		this.cube.display();

		this.scene.popMatrix();


		// Primeira perna da mesa
		this.scene.pushMatrix();

		this.scene.translate(-2.35, 0, -1.35);
		this.scene.scale(0.3, 3.5, 0.3);
		this.scene.translate(0, 0.5, 0);
		this.cube.display();

		this.scene.popMatrix();

		// Segunda perna da mesa
		this.scene.pushMatrix();

		this.scene.translate(2.35, 0, -1.35);
		this.scene.scale(0.3, 3.5, 0.3);
		this.scene.translate(0, 0.5, 0);
		this.cube.display();

		this.scene.popMatrix();


		// Terceira perna da mesa
		this.scene.pushMatrix();

		this.scene.translate(2.35, 0, 1.35);
		this.scene.scale(0.3, 3.5, 0.3);
		this.scene.translate(0, 0.5, 0);
		this.cube.display();

		this.scene.popMatrix();


		// Quarta perna da mesa
		this.scene.pushMatrix();

		this.scene.translate(-2.35, 0, 1.35);
		this.scene.scale(0.3, 3.5, 0.3);
		this.scene.translate(0, 0.5, 0);
		this.cube.display();

		this.scene.popMatrix();

    }
};