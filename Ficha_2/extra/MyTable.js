class MyTable extends CGFobject
{
	constructor(scene) 
	{
        super(scene);
        this.cube = new MyUnitCubeQuad(this.scene);

        this.materialSteel = new CGFappearance(this.scene);
		this.materialSteel.setAmbient(0.3,0.3,0.3,1);
		this.materialSteel.setDiffuse(1,1,1,1);
		this.materialSteel.setSpecular(1,1,1,1);	
		this.materialSteel.setShininess(200);

		this.materialWood = new CGFappearance(this.scene);
		this.materialWood.setAmbient(0.55,0.27,0.07,1);
		this.materialWood.setDiffuse(0.55,0.27,0.07,1);
		this.materialWood.setSpecular(0.55,0.27,0.07,1);	
		this.materialWood.setShininess(10);
		
    };
    
    display() {

		// Tampo da mesa
		this.scene.pushMatrix();

		this.scene.translate(0, 3.65, 0);
		this.scene.scale(5, 0.3, 3);
		this.materialWood.apply();
		this.cube.display();

		this.scene.popMatrix();


		// Primeira perna da mesa
		this.scene.pushMatrix();

		this.scene.translate(-2.35, 0, -1.35);
		this.scene.scale(0.3, 3.5, 0.3);
		this.scene.translate(0, 0.5, 0);
		this.materialSteel.apply();

		this.cube.display();

		this.scene.popMatrix();

		// Segunda perna da mesa
		this.scene.pushMatrix();

		this.scene.translate(2.35, 0, -1.35);
		this.scene.scale(0.3, 3.5, 0.3);
		this.scene.translate(0, 0.5, 0);
		this.materialSteel.apply();
		this.cube.display();

		this.scene.popMatrix();


		// Terceira perna da mesa
		this.scene.pushMatrix();

		this.scene.translate(2.35, 0, 1.35);
		this.scene.scale(0.3, 3.5, 0.3);
		this.scene.translate(0, 0.5, 0);
		this.materialSteel.apply();
		this.cube.display();

		this.scene.popMatrix();


		// Quarta perna da mesa
		this.scene.pushMatrix();

		this.scene.translate(-2.35, 0, 1.35);
		this.scene.scale(0.3, 3.5, 0.3);
		this.scene.translate(0, 0.5, 0);
		this.materialSteel.apply();
		this.cube.display();

		this.scene.popMatrix();

    }
};