class launcher{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,	
            length:1,	
            stiffness:.004, 		 
			pointB:anchor, 
			
		}
		
		this.bodyA=body;
		this.pointB=anchor;
		this.launcher=Constraint.create(options);
		World.add(world,this.launcher);
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB;

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}