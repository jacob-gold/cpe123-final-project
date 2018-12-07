function BloodDripping(){
noStroke();

for(var i = 0; i < 200; i++){

	fill(random(170,190), random(0,30), random(0,20))

	ellipse((random(0,width)), (random(height/6, height)),random(.5,2), random(.5,2));
	ellipse((random(0,width)), (random(height/6, height)),random(1,5), random(1,5));
	ellipse((random(0,width)), (random(height/6, height)),random(.5,2), random(.5,2))
	ellipse((random(0,width)), (random(height/6, height)),random(1,2), random(1,2));	
	}

}
