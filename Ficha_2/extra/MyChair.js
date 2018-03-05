class MyChair extends CGFobject
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

		// Tampo da cadeira
		this.scene.pushMatrix();

		this.scene.translate(0, 2.275, 0);
		this.scene.scale(1.5, 0.15, 1.5);
		this.materialWood.apply();
		this.cube.display();

		this.scene.popMatrix();


		// Primeira perna da cadeira
		this.scene.pushMatrix();
		
		this.scene.translate(0.65, 1.1, 0.65);
		this.scene.scale(0.2, 2.2, 0.2);
		this.materialSteel.apply();
		this.cube.display();

		this.scene.popMatrix();

		// Segunda perna da cadeira
		this.scene.pushMatrix();

		this.scene.translate(0.65, 1.1, -0.65);
		this.scene.scale(0.2, 2.2, 0.2);
		this.materialSteel.apply();
		this.cube.display();

		this.scene.popMatrix();


		// Terceira perna da cadeira
		this.scene.pushMatrix();

		this.scene.translate(-0.65, 1.1, 0.65);
		this.scene.scale(0.2, 2.2, 0.2);
		this.materialSteel.apply();
		this.cube.display();

		this.scene.popMatrix();


		// Quarta perna da cadeira
		this.scene.pushMatrix();

		this.scene.translate(-0.65, 1.1, -0.65);
		this.scene.scale(0.2, 2.2, 0.2);
		this.materialSteel.apply();
		this.cube.display();

		this.scene.popMatrix();


		// Encosto da cadeira
		this.scene.pushMatrix();

		this.scene.translate(0, 3.50, -0.65);
		this.scene.scale(1.5, 2.3, 0.2);
		this.materialWood.apply();
		this.cube.display();

		this.scene.popMatrix();



    }
};
