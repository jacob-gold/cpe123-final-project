var club_scale = 1;
var club_x = 200;
var club_y = 25;
var club_rotate = -10;

var man_scale = .67;
var man_x = 130;
var man_y = 380;

function setup ()
{
	createCanvas (400,400);
}

function draw ()
{

//BACKGROUND
   background(254);

   textSize(45);
   text('UN', 15,50);
   textSize(60);
   text('CICLOPE', 50,100);
   fill('#5FA9CF');

push();

	scale(man_scale)
	translate(man_x,man_y);

	var C = 200

	noStroke();
	fill('#fcaba9'); //skin color

	beginShape();
		vertex(C, C);

	//Leg Right
		bezierVertex(C-2,C-10, C-8,C-12, C-25,C-11);
		bezierVertex(C-30,C-10, C-30,C-20, C-20,C-45);
		bezierVertex(C-15,C-65, C-25,C-73, C-20,C-75);

		//knee start
		bezierVertex(C-16,C-80, C-20,C-100, C-19,C-130);
		bezierVertex(C-30,C-135, C-35,C-135, C-66,C-130);
		bezierVertex(C-60,C-120, C-30,C-80, C-40,C-73);
		bezierVertex(C-55,C-60, C-40,C-45, C-40,C-11);
		bezierVertex(C-43,C, C-42,C, C,C);
	endShape();


	//Left Leg
		fill('#fcaba9');
			quad(C-123,C-130, C-80,C-130, C-95,C-80, C-120,C-80,);
			noStroke();
			beginShape();
				vertex(C-95,C-80);
				bezierVertex(C-97,C-75, C-98,C-70, C-101,C-70);
				bezierVertex(C-99,C-60, C-110, C-40, C-115,C-35);
				bezierVertex(C-120,C-30, C-115,C-25, C-117, C-23);
				//foot
				bezierVertex(C-115,C-21, C-110,C-15, C-110,C-11);
				bezierVertex(C-120,C-8, C-130,C-11, C-130,C-12);
				bezierVertex(C-130,C-15, C-128,C-23, C-128,C-23);
				bezierVertex(C-130,C-25, C-130,C-27, C-128, C-30);
				bezierVertex(C-126,C-33, C-135,C-50, C-120,C-80)
			endShape();


	//torso
		fill('#fcaba9');
		noStroke();
		beginShape();
			vertex(C-125,C-200)
			bezierVertex(C-115,C-210, C-140,C-260, C-140,C-325);
			bezierVertex(C-105, C-350, C-50,C-350, C,C-325);
			bezierVertex(C-25,C-260, C-35,C-210, C-31,C-200);
			//bezierVertex(C-10,C-325, C-)
		endShape();


	//nipples
		fill('#e27624');
		noStroke();
		ellipse(C-28,C-255, 6,6);
		ellipse(C-95,C-255, 6,6);


	//Head
		fill('#fcaba9');
		noStroke();
		//stroke(2);
		quad(C-105,C-325, C-95,C-373, C-60,C-373, C-40,C-325);
		ellipse(C-65, C-375, 50,70);
		ellipse(C-95, C-380,10,20);
		beginShape();
			vertex(C-105,C-325);
			//bezierVertex();
		endShape();

	//Hair and Beard
		fill('#e27624'); 
		noStroke();
		//stroke(2);
		beginShape();
		vertex(C-93,C-380)
		bezierVertex(C-95,C-390, C-89,C-420, C-50,C-410)
		bezierVertex(C-35,C-400, C-50,C-380, C-70,C-395)
		bezierVertex(C-84, C-390, C-86, C-370, C-80,C-364)
		bezierVertex(C-75,C-350, C-70,C-365, C-40,C-360)
		bezierVertex(C-38, C-345, C-43,C-330, C-75,C-336)
		bezierVertex(C-87,C-340, C-94,C-360, C-93,C-380)
		endShape();

		//Mouth
		fill('#fcaba9');
		ellipse(C-58,C-350,18,8)

	//Eye
		fill(255);
		ellipse(C-58,C-378,18,8)
		fill('#5FA9CF');
		ellipse(C-55,C-378,6,6)


	//Club
		push();
		
			translate(club_x, club_y);
			scale(club_scale);
			rotate(radians(club_rotate));

			fill('#859E4B');
			rect(0,0, 70,10, 5)
			ellipse(80, 5, 80,30)
			quad(0,0, 0,10, 80,20, 80,-10);
			triangle(60+20,-5, 60+20,-25, 40+20,-5)
			triangle(80+15,10, 80+15,30, 60+15,10)

		pop();




	//Arm right
		
		fill('#fcaba9');
		noStroke();
		//stroke(2);

			ellipse(C-7,C-291, 50, 70)

		push();
		rotate(radians(-10));
		translate(10, 30)
			ellipse(C-5, C-246, 38, 65)
		pop();

		push();
		rotate(radians(-15));
		translate(3, 56);
			ellipse(C, C-210, 28, 60)
		pop();

			//elbow
		push();
		rotate(radians(-13));
		translate(-3, 45);
			ellipse(C, C-220, 20, 50);
		pop();

			//hand
		push();
		rotate(radians(-10));
		translate(0,36);
			rect(C, C-185, 26,26, 10);
		pop();



	//kilt
		fill('#e27624'); //clothing clolor
		noStroke();
		beginShape();
			vertex(C-19,C-130);
			bezierVertex(C-15,C-160, C-25,C-165, C-30,C-200);
			bezierVertex(C-35,C-205, C-55, C-210, C-125,C-200);
			bezierVertex( C-123,C-190, C-134,C-130, C-123, C-130);
			bezierVertex(C-105,C-126, C-40,C-126, C-19,C-130);
		endShape();

		beginShape();
		//stroke(2);
			vertex(C-60, C-200)
			bezierVertex(C-35,C-240, C-30,C-260, C-20,C-332);
			bezierVertex(C-24,C-336, C-30,C-337, C-35,C-337);
			bezierVertex(C-35,C-335, C-40,C-240, C-90,C-200)
		endShape();

	//Arm Left

		fill('#fcaba9');
		noStroke();
		//stroke(2);

			ellipse(C-130, C-291, 60, 70);

		push();
		rotate(radians(10));
		translate(-20, -20)
			ellipse(C-135, C-240, 35, 70);
		pop();


		push();
		rotate(radians(-5));
		translate(-13,-5)
			ellipse(C-135, C-200, 25,80);
		pop();

			rect(C-155, C-173, 26,30, 10)


pop();


}