/**
 * MyPrism
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyPrism extends CGFobject
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
		 * Let Θ = 2*PI / slices (angulo externo)
		 * 
		 * For i = 0 till i = stacks - 1
		 * 		
		 * 		For j = 0 till j = slices - 1
		 * 			Add two vertices, because each will have a different normal [cos(j*Θ), sin(j*Θ), i]
		 * 			Add the two normals to each vertice
		 * 				- (cos(Θ*(j+0.5)), sin(Θ*(j+0.5)), i)
		 * 				- (cos(Θ*(j-0.5)), sin(Θ*(j-0.5)), i)
		 * 			j <- j + 1
		 */

		/**
		  * Fill indices array
		  * Vertices are counter-clock sorted
		  * For i = 0 till i = vertices.length
		  * 	add [i, i+2, i+4]
		  * 	add [i+1, i+3, i+5]
		  * 	i += slices*2
		  */

		// Array methods like push might be useful here
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
					
		this.primitiveType=this.scene.gl.TRIANGLES;
				 
		this.initGLBuffers();
	};
};
