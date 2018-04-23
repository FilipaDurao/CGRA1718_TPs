/**
 * MyClockHand 
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClockHand extends CGFobject
{
	constructor(scene) 
	{
        super(scene);
        this.pointer = new MyCylinder(this.scene, 12, 1);
        this.initBuffers();
        this.angle = 0;
	};

    display() {
        this.scene.pushMatrix();
            this.scene.rotate(-Math.PI/2, 1, 0, 0); // set the pointer to vertical position (+y direction)
			this.pointer.display();
		this.scene.popMatrix();
    }

    setAngle(degrees) {
        this.scene.rotate(-degrees*Math.PI / 180.0, 0, 0, 1); // rotate around z
    }
};