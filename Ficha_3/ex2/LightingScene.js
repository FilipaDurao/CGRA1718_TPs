var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

class LightingScene extends CGFscene 
{
	constructor()
	{
		super();
	};

	init(application) 
	{
		super.init(application);

		this.initCameras();

		this.initLights();

		this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		
		// Prism
		this.prismA = new MyPrism(this, 8, 20);
		this.cilA = new MyCylinder(this, 8, 20);

		// Materials
		this.materialDefault = new CGFappearance(this);
		
	};

	initCameras() 
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights() 
	{
		this.setGlobalAmbientLight(0.3,0.3,0.3, 1.0);


		// Create light 1
		this.lights[0].setPosition(2.5, 4, 0, 1.0);
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)	
		// Light 1 caractheristics
		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].enable();


	};

	updateLights() 
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}


	display() 
	{
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();

		// Draw axis
		this.axis.display();

		this.materialDefault.apply();

		// ---- END Background, camera and axis setup

		// ---- BEGIN Scene drawing section


		this.pushMatrix();
			this.scale(1, 1, 6);
			this.prismA.display();
		this.popMatrix();


		this.pushMatrix();
			this.scale(1, 1, 6);
			this.translate(5, 0, 0);
			this.cilA.display();
		this.popMatrix();
/*
		// Prism with only one stack
		this.pushMatrix();
			this.scale(1, 6, 1);
			this.translate(0, 1, 0);
			this.rotate(degToRad*90, 1, 0, 0);
			this.prismA.display();
		this.popMatrix();

		this.pushMatrix();
			//this.scale(1,6,1);
			this.translate(5,1,0);
			this.rotate(degToRad*90, 1, 0, 0);
			this.prismB.display();
		this.popMatrix();

*/
			
		// ---- END Scene drawing section
		
	};
};
