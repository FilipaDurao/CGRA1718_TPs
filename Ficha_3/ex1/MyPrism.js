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

		var theta = 2.0*Math.PI/this.slices; // external angle
		for(let j = 0; j < this.stacks; j++) {
			for(let i = 0; i < this.slices; i++) {
				// push the vertice twice
				var normal = (Math.cos(theta/2.0), Math.sin(theta/2.0), 0);

				this.vertices.push(
					Math.cos(i*theta),
					Math.sin(i*theta),
					j*1.0/this.stacks
				);
				this.normals.push(Math.cos(theta/2.0), Math.sin(theta/2.0), 0);

				//
				this.vertices.push(
					Math.cos((i+1)*theta),
					Math.sin((i+1)*theta),
					j*1.0/this.stacks
				);
				this.normals.push(Math.cos(theta/2.0), Math.sin(theta/2.0), 0);

				//
				this.vertices.push(
					Math.cos(i*theta),
					Math.sin(i*theta),
					(j+1)*1.0/this.stacks
				);
				this.normals.push(Math.cos(theta/2.0), Math.sin(theta/2.0), 0);

				//
				this.vertices.push(
					Math.cos((i+1)*theta),
					Math.sin((i+1)*theta),
					(j+1)*1.0/this.stacks
				);
				this.normals.push(Math.cos(theta/2.0), Math.sin(theta/2.0), 0);

				// add the in
				var a = i*4;
				this.indices.push(a, a+1, a+2);
				this.indices.push(a+1, a+3, a+2);
			}

			console.log(this);
		}


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
