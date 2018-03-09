/**
 * MyPrism
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyQuad extends CGFobject
{
	constructor(scene, slices, stacks) 
	{
		super(scene);

		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [];

		this.indices = [];

		this.normals = [];

		// fill vertices and normals array
		/**
		 * Seja Θ = 2*PI / numero_lados
		 * Para i = 0 até i = numero_lados-1
		 * 		Adiciona vértice (cos(i*Θ), sin(i*Θ), 0) duas vezes (devido às normais)
		 * 		Adiciona duas normais
		 * 			- (cos(Θ+(i+0.5)), sin(Θ+(i+0.5)), 0)
		 * 			- (cos(Θ+(i-0.5)), sin(Θ+(i-0.5)), 0)
		 * 		i <- i + 1
		 */

		 /**
		  * Fill indices array
		  * Vertices are counter-clock sorted
		  * Para i = 0 até i = vertices.length
		  * 	Adiciona [i, i+2, i+4]
		  * 	Adiciona [i+1, i+3, i+5]
		  * 	i += numero_lados*2
		  */

		// Array methods like push might be useful here
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
			
		this.primitiveType=this.scene.gl.TRIANGLES;
				 
		this.initGLBuffers();
	};
};
