/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyQuad extends CGFobject {
	constructor(scene, minS, maxS, minT, maxT) {
		super(scene);
		this.minS = minS || 0;
		this.maxS = maxS || 1;
		this.minT = minT || 0; 
		this.maxT = maxT || 1;
		this.initBuffers();
	};

	initBuffers() {
		this.vertices = [
			0.5, 0.5, 0,
			0.5, -0.5, 0, 
			-0.5, 0.5, 0, 
			-0.5, -0.5, 0
		];

		this.indices = [
			0, 2, 1,
			1, 2, 3
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];
		
		this.texCoords = [
			this.minS, this.minT,
			this.minS, this.maxT,
			this.maxS, this.minT,
			this.maxS, this.maxT
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};