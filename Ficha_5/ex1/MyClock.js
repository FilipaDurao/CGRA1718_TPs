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
        this.hoursPointer = new MyClockHand(this.scene);
        this.minutesPointer = new MyClockHand(this.scene);
        this.secondsPointer = new MyClockHand(this.scene);

        // define the texture to apply over the cylinder top
        this.cylinderTopAppearance = new CGFappearance(this.scene);
		this.cylinderTopAppearance.loadTexture("../resources/images/clock.png");
        this.cylinderTopAppearance.setSpecular(0.8, 0.8, 0.8, 1);
        this.cylinderTopAppearance.setDiffuse(1, 1, 1, 1);
        this.cylinderTopAppearance.setAmbient(0.6, 0.6, 0.6, 1);

        // hour pointer matterial
        this.hoursPointerAppearance = new CGFappearance(this.scene);
        this.hoursPointerAppearance.setAmbient(0, 0, 1, 1);

        // minutes pointer matterial
        this.minutesPointerAppearance = new CGFappearance(this.scene);
        this.minutesPointerAppearance.setAmbient(1, 0, 0, 1);

        // seconds pointer matterial
        this.secondsPointerAppearance = new CGFappearance(this.scene);
        this.secondsPointerAppearance.setAmbient(0, 1, 0, 1);
	};

	display() {
        this.scene.pushMatrix();
            this.cylinder.display();
        this.scene.popMatrix();

        // hour pointer
        this.scene.pushMatrix();
            this.hoursPointerAppearance.apply();
            this.scene.scale(0,0,0.5);
            this.scene.translate(0,0,1);
            //this.hoursPointer.setAngle(90);
            this.hoursPointer.display();
        this.scene.popMatrix();

        // minutes pointer
        this.scene.pushMatrix();
            this.minutesPointerAppearance.apply();
            this.scene.translate(0,0,1);
            this.minutesPointer.setAngle(180);
            this.minutesPointer.display();
        this.scene.popMatrix();

        // seconds pointer
        this.scene.pushMatrix();
            this.secondsPointerAppearance.apply();
            this.scene.translate(0,0,1);
            this.secondsPointer.setAngle(270);
            this.secondsPointer.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0,0,1);
            this.cylinderTopAppearance.apply();
            this.cylinderTop.display();
        this.scene.popMatrix();
    }
};