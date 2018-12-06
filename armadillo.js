function setup() 
{
   createCanvas(400, 400);
}


function draw() 
{

//   BACKGROUND   //

   background('#0B0912');

   noStroke();

push();

translate(-20,0);
rotate(radians(-5));

   fill('#C7322F');
   rect(220,20,25,160);

   fill('#FFF546');
   rect(30,110,70,120);

   fill('#FFF546');
   rect(100,70,25,140);

   fill('#FFF546');
   rect(100+25,70+25,25,140-25);

   fill('#FFF546');
   rect(185,70,30,140);

   fill('#C7322F');
   rect(140,50,10,160);

   fill('#C7322F');
   rect(170,50,5,160);

   fill('#C7322F');
   rect(185,50,5,160);

   fill('#C7322F');
   rect(185+25,50,5,160);

   fill('#C7322F');
   rect(0,90,30,160);

   fill('#C7322F');
   rect(60,50,25,180);

   fill('#FFF546');
   rect(245,100,70,120);

   fill('#FFF546');
   rect(340,135,70,100);

   fill('#C7322F');
   rect(100,40,10,180);

   fill('#C7322F');
   rect(100,40,10,180);

   fill('#C7322F');
   rect(270,70,10,180);

   fill('#C7322F');
   rect(315,130,15,100);

   fill('#C7322F');
   rect(350,150,5,100);

   fill('#C7322F');
   rect(370,160,12,110);

pop();



//    ARMIDILLO   //


push();
translate(80,-40)
rotate(radians(10));
 	//   HEAD   //

	 	fill('#7870F2');
	   		ellipse(150, 200, 40, 40);//main circle 1//

	   		//  SNOUT  //
	   			quad(150,185,108,200,112,208,150,208);//top jaw//
	   			quad(150,198,120,220,124,225,150,208);//bottum jaw//

	   		//  NOSE  //
	   			fill('#2E374D');//dark shell color//
	   				ellipse(110,201,5,5);

	   		//  EARS  //
	   			fill('#7870F2'); //skin color//
				
				rect(160,180-7,17,17,7,0,7,0); //front ear//
					fill('#2E374D');//dark shell color//
					rect(160+2,180-2,10,10,7,0,7,0);//inner ear//

				fill('#6B64D9'); //back ear skin color//

				rect(160-17,180-6,15,15,7,0,7,0);//back ear//

	   		//  HAT  //
	   			fill('#544A61');//light shell color//
	   				arc(150,200,40,40,PI + QUARTER_PI, 0, PIE)

	   			fill('#7870F2'); //skin color//
	   				arc(150-5,210-5,40,40,PI + QUARTER_PI, 0, PIE)

	   		//  EYES  //
	   			fill('#2E374D');//dark shell color//
	   				ellipse(140,195,6,7);
				fill(245); //white of eye//
	   				ellipse(139,195,3,3);
	   			stroke(1);
	   			strokeWeight(2);
   				line(140,187,146,193)
   				noStroke();





	//   FEET   //

		fill('#7870F2'); //skin color//
		
		rect(170,240,20,45,0,0,5,0);//front foot rect//
			fill(255);//clawcolor//
			triangle(170,275,170,285,158,285);//front paw tri//

		fill('#7870F2');
		rect(143,219,17,46,0,0,5,0);//back foot rect//
			fill(255);
			triangle(143,255,143,265,131,265);//back paw tri//



	//   BELLY arc   //

		fill('#7870F2')
		push();
		translate(70,-40);
		rotate(radians(15))
		arc(200,227,110,90,0, PI, CHORD);
		pop();



	//   TAIL     //

		fill('#7870F2')

		push();
		translate(103-10,-135)
		rotate(radians(20));
		triangle(317,328,297,328,307,235);
		pop();

		ellipse(265,275,30,30);


	//   SHELL   //

		fill('#544A61');//dark shell color//

		push();
		translate(113,-68);
		rotate(radians(25));
		arc(225,225,123,76,PI,0,CHORD);
		pop();	


		fill('#544A61');//light shell color//

	   	ellipse(245,256,72,72);//  4  back big shell circle//

		fill('#2E374D');//dark shell color//
	 		ellipse(204+15,234+5,65,65);/  3  front big shell circle//
				fill('#544A61');//light shell color//
	 				ellipse(200+15,230+5,65,65);//front big shell circle//


		fill('#2E374D');//dark shell color//
	 		ellipse(204+5,234,65,65);//  2  front big shell circle//
				fill('#544A61');//light shell color//
	 				ellipse(200+5,230,65,65);//front big shell circle//


		fill('#2E374D');//dark shell color//
	 		ellipse(195,230,70,70);//  1  front big shell circle//
				fill('#544A61');//light shell color//
	 				ellipse(190,225,70,70);//front big shell circle//

	pop();



//bottum rectangles//
push();

translate(-10,230);
rotate(radians(-355));

   fill('#C7322F');
   rect(220,20,25,160);

   fill('#FFF546');
   rect(30,110,70,120);

   fill('#FFF546');
   rect(100,70,25,140);

   fill('#FFF546');
   rect(100+25,70+25,25,140-25);

   fill('#FFF546');
   rect(185,70,30,140);

   fill('#C7322F');
   rect(140,50,10,160);

   fill('#C7322F');
   rect(170,50,5,160);

   fill('#C7322F');
   rect(185,50,5,160);

   fill('#C7322F');
   rect(185+25,50,5,160);

   fill('#C7322F');
   rect(0,90,30,160);

   fill('#C7322F');
   rect(60,50,25,180);

   fill('#FFF546');
   rect(245,100,70,120);

   fill('#FFF546');
   rect(340,135,70,100);

   fill('#C7322F');
   rect(100,40,10,180);

   fill('#C7322F');
   rect(100,40,10,180);

   fill('#C7322F');
   rect(270,70,10,180);

   fill('#C7322F');
   rect(315,130,15,100);

   fill('#C7322F');
   rect(350,150,5,100);

   fill('#C7322F');
   rect(370,160,12,110);

pop();


}