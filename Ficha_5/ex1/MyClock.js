/**
 * MyClock 
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClock extends CGFobject
{
	constructor(scene) 
	{
		super(scene);

        // define the cylinder
        this.cylinder = new MyCylinder(this.scene, 12, 1);

        // define the cylinder top
        this.cylinderTop = new MyCircle(this.scene, 12);

        // Pointers
        this.pointerH = new MyClockHand(this.scene);

        // define the texture to apply over the cylinder top
        this.cylinderTopAppearance = new CGFappearance(this.scene);
		this.cylinderTopAppearance.loadTexture("../resources/images/clock.png");
        this.cylinderTopAppearance.setSpecular(0.8, 0.8, 0.8, 1);
        this.cylinderTopAppearance.setDiffuse(1, 1, 1, 1);
        this.cylinderTopAppearance.setAmbient(0.6, 0.6, 0.6, 1);

        // hour pointer matterial
        this.hourPointer = new CGFappearance(this.scene);
        this.hourPointer.setAmbient(0, 0, 0, 1);
	};

	display() {
        this.scene.pushMatrix();
            this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.hourPointer.apply();
            this.scene.translate(0,0,1);
            this.pointerH.setAngle(90);
            this.pointerH.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0,0,1);
            this.cylinderTopAppearance.apply();
            this.cylinderTop.display();
        this.scene.popMatrix();
    }
};