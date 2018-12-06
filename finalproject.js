//for dude
var arm_rot;
var r_rot;
var l_rot;

var boxeurX;
var boxeurY;
var boxeurRot;

function setup() {

	createCanvas(400, 400);
	
	//for boxeur
	boxeurScale = 1;
	hairX=130;
	hairY=137;
	boxeurX = 0;
	boxeurY = 0;
	boxeurRot = 0;

	//for dude
	arm_rot = 0;
	r_rot = 0;
	l_rot = 0;

}

function draw() {

	background(255);
	outsideTavern();

}

function dude(x,y){
   push();
      translate(x,y);
      //face
      fill(190,140,90);
      ellipse(0,0, 30,40);
      //hat
      fill(0,200,0);
      triangle(20,-10, -5, -30, -15, -20);
      //feather
      for(var angle=0; angle<PI; angle+= PI/100){
         var x0 = -20 + -30*cos(angle);
         var y0 = -15 + -10*sin(angle);

         var x1 = -20 + -20*cos(angle);
         var y1 = -20 + -10*sin(angle);

         stroke(255,0,0);
         line(x0,y0, x1,y1);
      }
      //hat
      stroke(0);
      fill(0,100,0);
      triangle(-20,-10, 20,-10, -15,-24);
      fill(200,0,0);     
      //torso
      fill(0,200,0);
      rect(-10,20, 20, 50);
      //lute/guitar
      fill(90,70,40);
      ellipse(15,50, 10, 30);
      quad(15,45, 30,30, 30,35, 15, 55);
      //arm
      fill(0,200,0);
      push();
         translate(0,40);
         rotate(arm_rot);
         rect(0,0, 20,10);
      pop();
      //legs
      fill(0);
      push();
         translate(0,70);
         rotate(r_rot);
         rect(0,0,7,40);
      pop();
      push();
         translate(-10,70);
         rotate(l_rot);
         rect(0,0,7,40);
      pop();
      //cape
      fill(0,100,0);
      quad(10,20, -10,20, -20,80, -10,90);
   pop();
}

function boxeur(x, y) {
	translate(x, y);

	//neck
	push();
	translate(100, 150);
	rotate(PI/3);
	fill(247, 113, 120);
	noStroke();
	rect(100-94, 150-197, 30, 98);
	pop();

	//torso
	fill(247, 113, 120);
	push();
	noStroke();
	arc(100-25, 150+43, 50, 50, HALF_PI, PI/2);
	pop();

	//more torso
	push();
	stroke(247, 113, 120);
	strokeWeight(6);
	curve(100-50, 150+20, 100-65, 150+130, 100-48, 150+45, 100-30, 150+95);
	pop();

	//stomach
	push();
	noStroke();
	translate(100, 150);
	rotate(PI/20);
	rect(100-142, 150-100, 50, 80, 5);
	pop();

	//chest
	push();
	noStroke();
	ellipse(100+25, 150+50, 80, 55);
	pop();

	//upper arm
	push();
	rotate(boxeurRot);
	noStroke();
	quad(123, 202, 160, 195, 185, 260, 143, 250);
	strokeWeight(5);
	stroke(247, 113, 120);
	curve(100+44, 150, 100+39, 150+90, 100+80, 150+120, 100+48, 150+120);
	curve(100, 150+200, 100+60, 150+60, 100+85, 150+110, 100-50, 150);
	quad(153, 250, 161, 250, 199, 250, 179, 270);
	pop();

	//lower arm
	push();
	rotate(boxeurRot);
	translate(100, 150);
	rotate(PI/10);
	noStroke();
	rect(110, 0, 20, 95, 15);
	pop();

	//hand part 1
	push();
	rotate(boxeurRot);
	stroke(107, 68, 87);
	strokeWeight(2);
	line(205, 190, 220, 196);
	fill(76, 117, 169);
	noStroke();
	rect(205, 176, 8, 15, 10);
	stroke(0);
	strokeWeight(0);
	bezier(210, 190, 235, 211, 245, 160, 225, 160);
	pop();

	//hand part 2
	push();
	rotate(boxeurRot);
	fill(76, 117, 169);
	noStroke();
	translate(100, 150);
	rotate(PI/8);
	rect(105, -40, 20, 12, 100);
	pop();

	//hand part 3
	push();
	rotate(boxeurRot);
	fill(76, 117, 169);
	noStroke();
	translate(100, 150);
	rotate(PI/10);
	rect(108.5, -18, 8, 15, 100);
	pop();

	//2nd hand
	push();
	fill(76, 117, 169);
	strokeWeight(0);
	bezier(163, 195, 170, 200, 185, 185, 160, 185);
	rect(167, 181, 5, 8);
	bezier(157, 183, 150, 170, 180, 155, 175, 190);
	pop();

	//face
	push();
	noStroke();
	translate(100, 150);
	rotate(PI/5);
	rect(30, -38, 17, 35, 10);
	pop();

	//hair
	push();
	fill(58, 31, 2);
	strokeWeight(0);
	translate(hairX, hairY);
	scale(boxeurScale);
	bezier(0, 0, 5, -7, 30, -19, 28, 11);
	ellipse(10, -2, 20, 15);
	pop();

	//nose
	push();
	noStroke();
	triangle(150, 155, 145, 165, 152, 165);
	pop();

	//shorts
	push();
	fill(59, 32, 3);
	noStroke();
	quad(33, 270, 85, 278, 70, 335, 35, 330);
	quad(70, 300, 85, 277, 120, 320, 90, 340);
	stroke(160, 76, 30);
	line(55, 273, 50, 332);
	pop();

	//left leg
	push();
	strokeWeight(0);
	bezier(50, 331, 33, 326, 38, 350, 30, 380);
	bezier(49, 331, 80, 332, 75, 365, 30, 380);
	pop();

	//right leg
	push();
	noStroke();
	quad(95, 336, 115, 323, 125, 345, 110, 355);
	rotate(PI/8);
	rect(235, 270, 15, 20, 5);
	rotate(-PI/8);
	rect(107, 348, 15, 30, 10);
	pop();

	//left foot
	push();
	noStroke();
	fill(62, 33, 1);
	rect(27, 375, 31, 10, 10);
	stroke(62, 33, 1);
	strokeWeight(3);
	curve(30, 370, 30, 375, 48, 374, 40, 373);
	pop();

	//right foot
	push();
	noStroke();
	fill(62, 33, 1);
	rect(107, 368, 30, 12, 10);
	stroke(62, 33, 1);
	strokeWeight(3);
	curve(107, 365, 107, 368, 123, 367, 115, 353);
	pop();

}

function drawNote(x,y){
   push();
      translate(x,y);
      stroke(255);
      fill(255);
      strokeWeight(2);
      line(-5,0, 5,0);
      line(-5,0, -5,10);
      line(5,0, 5,7);
      ellipse(-7,10, 5);
      ellipse(3,7, 5);
   pop();
}

function GameOverTavern() {
	background(0)

	push();
		translate(0, -50)

			fill(255, 0 ,0);
			textSize(70);
			textStyle(BOLD)
			text('Game Over', width/25, height/3)
	pop();

			fill(255)
			textSize(20)
			text('You went to sleep and died of cancer' , width/10, 2*height/3)


		push();

			translate(width/2, height/2)
			rotate(3/2*PI)
			dude(-130, -50)
		pop();
	deadEmoji(width/2, 165);
}

function deadEmoji(x, y){

	translate(x, y)
		fill(255,204,51);	
		ellipse(0, 0, 150);
		strokeWeight(5);

	push();
		
		fill(0);
		line(-40, -40 , -20, -20)
		line(-40, -20, -20, -40)

		translate(55, 0);
		line(-40, -40 , -20, -20)
		line(-40, -20, -20, -40)
	pop();

		line(-40, 30, 35, 30)
}
function GameOverBigGuy() {
	background(0)

	push();
		translate(0, -50)

			fill(255, 0 ,0);
			textSize(70);
			textStyle(BOLD)
			text('Game Over', width/25, height/3)
	pop();

			fill(255)
			textSize(15)
			text('BOOM! POP! POW! He pummels you over and over', width/12, 2*height/3)


		push();

			translate(width/2, height/2)
			rotate(3/2*PI)
			dude(-130, -50)
		pop();

	deadEmoji(width/2, 165)

}

function outsideTavern() {
	
	dude(310, 200);
	
	push();
		tavernDoor();
		boxeur(boxeurX, boxeurY);
		textBox(120, 25, "I am going to be the one \n to save the princess");
		boxeurX += 3;
		if(boxeurX >= 90) {
			boxeurX -= 3;
			boxeurY +=5;
			if(boxeurY >= 30) {
				boxeurY -= 5;
				boxeurRot += PI/48;
				if(boxeurRot >= PI/35) {
					boxeurRot += -PI/40;
				}
			}
		}
	pop();	

}

function tavernDoor() {
	push();
		noFill();
		line(75, 325, 350, 325);
		line(75, 50, 75, 325);
		line(75, 50, 0, 75);
		line(15, 350, 15, 100);
		line(15, 100, 60, 85);
		line(60, 85, 55, 325);
		ellipse(25, 200, 15);
		fill(0);
		text("Tavern", 15, 85);
	pop();
}

function textBox(x, y, words) {
	push();
		fill(200, 38, 150);
		rect(x, y, 200, 100, 50);
		arc(x+50, y+100, 50, 50, 0, HALF_PI);
		fill(0);
		textSize(15);
		text(words, x+25, y+45);
	pop();
}