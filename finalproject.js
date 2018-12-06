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
	//if correct option chosen
	//set_scene4();
	//scene4();

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

function drawNote(n_x,n_y){
   this.x = n_x;
   this.y = n_y;
   this.d_n = createVector(random(-.5,.5), random(-1,0));

   this.renderN = function(){
      push();
         translate(this.x,this.y);
         stroke(255);
         fill(255);
         strokeWeight(2);
         line(-5,0, 5,0);
         line(-5,0, -5,10);
         line(5,0, 5,7);
         ellipse(-7,10, 5);
         ellipse(3,7, 5);
      pop();
   };

   this.updateN = function(){
      this.x += this.d_n.x;
      this.y += this.d_n.y;
   }
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

function scene4(){
   background(0,255,255);
   grass();
   tower(250,270);
   push();
      translate(200,-20);
      scale(.4);
      armadillo();
   pop();
   cloud = 0;
   for(var i=0; i<num_clouds; i++){
      drawCloud(c_loc[i].x,c_loc[i].y,cloud);
      cloud += 5;
      c_loc[i].add(d_cloud[i]);
      if(c_loc[i].x > width+15 || c_loc[i].y <= -15 || c_loc[i].y > height+15){
         c_loc[i].x = -60;
         c_loc[i].y = random(-10, 180);
         d_cloud[i] = createVector(random(.1,.5), random(-.1,.1));
      }
   }

   if(dudex <= 150){
      dudeWalk();
      dudex += .75;
      dude(dudex, dudey);
   }

   if(dudex >= 150 && !scene4_op1 && !scene4_op2 && !scene4_op3){
      fill(255);
      textAlign(CENTER);
      rect(70, 160, 100,50);
      rect(180, 160, 100,50);
      rect(290, 160, 100,50);

      fill(0);
      textSize(20);
      text('Which song will you play for your princess?', 195,135);

      textSize(10);
      text('Itsy Bitsy Spider', 120, 190);
      text('Ring Around', 230, 185);
      text('the Rosey', 230, 195);
      text('London Bridge is', 340,185);
      text('Falling Down', 340, 195);

      dude(dudex, dudey);
   }

   if(scene4_op1){
      if(dudex <=320){
         ladder();
         dudeWalk();
         dudex += .75;
      }
      if(dudex >= 320 && dudey >= 50){
         ladder();
         dudeWalk();
         dudey -= .75;
      }
      if(dudex >= 320 && dudey <= 50){
         scene4_op1res = true;
         scene4_op1 = false;
      }

      dude(dudex, dudey);

         if(time <= 2*60){
            if(!arm_up)
               arm_rot -= PI/80;
            if(arm_up)
               arm_rot += PI/80;
            if(arm_rot <= -PI/4 || arm_rot >= PI/4)
               arm_up = !arm_up;
         }

         for(var i=0; i<num_notes; i++){
            note[i].renderN();
            note[i].updateN();
            if(note[i].x <= -10 || note[i].x >= 410 || note[i].y <= -10 || note[i].y >= 410){
               note.splice(i,1);
               note.push(new drawNote(dudex+10, dudey+30));
            }
         }
      time += 1;
   }
   if(scene4_op1res){
      background(200);
      push();
         scale(2);
         dude(100,100);
         strokeWeight(5);
         for(var i=0; i < width; i += 20){
            line(i,0, i,height);
         }
         for(var j=0; j < height; j+= 20){
            line(0,j, width,j);
         }
      pop();
      fill(255,0,0);
      textAlign(CENTER);
      textSize(50);
      text('You got stuck', 200, 50);
      text('in the tower', 200, 100);
   }
   if(scene4_op2){
      if(!arm_up)
         arm_rot -= PI/80;
      if(arm_up)
         arm_rot += PI/80;
      if(arm_rot <= -PI/4 || arm_rot >= PI/4)
         arm_up = !arm_up;

      dude(dudex, dudey);

      for(var i=0; i<num_flower; i++){
         flowers[i].renderF();
         flowers[i].updateF();
         if(flowers[i].loc.x <= -10 || flowers[i].loc.x >= 410 || flowers[i].loc.y <= -10 || flowers[i].loc.y >= 410){
            flowers.splice(i,1);
            flowers.push(new flower(dudex, dudey-50));
         }
      }
      time += 1;
      if(time >= 3*60){
         scene4_op2 = false;
         scene4_op2res = true;
      }
   }
   if(scene4_op2res){
      background(100);

      push();
         translate(dudex,dudey)
         scale(2);
         rotate(-PI/2);
         dude(0,0);
      pop();

      fill(255,0,0);
      textSize(40);
      text('Poisonous Flowers,', 200,120);
      text('You Died!', 200,160);
   }
   if(scene4_op3){
      if(time <= 5*60){
         if(!arm_up)
            arm_rot -= PI/80;
         if(arm_up)
            arm_rot += PI/80;
         if(arm_rot <= -PI/4 || arm_rot >= PI/4)
            arm_up = !arm_up;
      }

      dude(dudex, dudey);

      for(var i=0; i<num_notes; i++){
         note[i].renderN();
         note[i].updateN();
         if(note[i].x <= -10 || note[i].x >= 410 || note[i].y <= -10 || note[i].y >= 410){
            note.splice(i,1);
            note.push(new drawNote(dudex+10, dudey+30));
         }
      }
      
      time += 1;

      if(time >= 60){
         tower(250,270);
         push();
            translate(a_x,a_y);
            scale(.4);
            armadillo();
         pop();

         if(a_x >= dudex-40 && a_y <= dudey){
            a_x -= 1/3;
            a_y += 1;
         }

         if(time >= 5*60){
            background(0,0,100);
            for(var i=num_spark-1; i>=0; i--){
               createS[i].renderS();
               createS[i].updateS();
               if(createS[i].loc >= createS[i].endloc ||
                  createS[i].loc.y <= 20){
                  sparkrg = createVector(createS[i].s_colr, createS[i].s_colg);
                  sparkb = createVector(createS[i].s_colb, 0);
                  firework.push(new PSys(createS[i].loc, sparkrg, sparkb, random(40,50)));
                  sys_life.push(100);
                  createS.splice(i,1);
                  createS.push(new spark());
                  variable ++;
               }
            }

            for(var i=firework.length-1; i>=0; i--){
               firework[i].run();
               if(sys_life[i] <= 0){
               firework.splice(i,1);
               sys_life.splice(i,1);
               }
            }

            dude(dudex,dudey);
            push();
               translate(a_x,a_y);
               scale(.4);
               armadillo();
            pop();
         }
      }
   }
}

function mousePressed(){
   if(scene == 4){
      if(mouseX >= 70 && mouseX <= 170 && mouseY >= 160 && mouseY <= 210){
         scene4_op1 = true;
         num_notes = 10;
         for(var i=0; i<num_notes; i++){
            note.push(new drawNote(dudex+10, dudey+30));
         }
      }
      if(mouseX >= 180 && mouseX <= 280 && mouseY >= 160 && mouseY <= 210){
         scene4_op2 = true;
         num_flower = 10;
         for(var i=0; i<num_flower; i++){
            flowers.push(new flower(dudex, dudey-50));
         }
      }
      if(mouseX >= 290 && mouseX <= 390 && mouseY >= 160 && mouseY <= 210){
         scene4_op3 = true;
         num_notes = 10;
         for(var i=0; i<num_notes; i++){
            note.push(new drawNote(dudex+10, dudey+30));
         }

         colorMode(RGB, 255,255,255,100);
         num_spark = 2;
         for(var i=0; i<num_spark; i++){
            createS.push(new spark());
         }
      }
   }
}

function set_scene4(){
   createS = [];
   firework = [];
   variable = 0;
   fw_col = [];
   sys_life =[];

   g_col = [];
   g_height = [];
   g_x = [];

   cloudpiece =[];
   c_loc = [];
   d_cloud = [];

   note = [];
   flowers = [];
   time = 0;
   a_x = 200;
   a_y = -20;

   dudex = -20;
   dudey = 270;

   l_mv = true;
   l_rot = r_rot = 0;
   arm_rot = 0;
   arm_up = false;

   scene = 4;
   scene4_op1 = false;
   scene4_op1res = false;
   scene4_op2 = false;
   scene4_op2res = false;
   scene4_op3 = false;

   //grass
   for(var i=0; i<width; i+= random(1,3)){
      g_col.push(color(0,random(100,255),0));
      g_x.push(i);
      g_height.push(random(330,360));
   } 

   num_clouds = 5;
      for(var i=0; i<num_clouds*5;i++){
      var col = random(200,255);
      cloudpiece.push(color(col,col,col));
   }
   for(var i=0; i<num_clouds*5;i+=5){
      c_loc.push(createVector(random(-10,345),random(-10,180)));
      d_cloud.push(createVector(random(.1,.5), random(-.1,.1)));
   }
}

function flower(f_x, f_y){
   this.loc = createVector(f_x, f_y);
   this.accelY = .05;
   this.vel = createVector(random(-1,1), random(-2,1));
   this.col = color(random(200,255), random(100), random(100));

   this.updateF = function(){
      this.vel.y += this.accelY;
      this.loc.add(this.vel);
   }

   this.renderF = function(){
      noStroke();
      fill(this.col);
      for(var theta = 0; theta <= 2*PI; theta += PI/2){
         this.cx = this.loc.x + 5*cos(theta);
         this.cy = this.loc.y + 5*sin(theta);

         ellipse(this.cx, this.cy, 10);
      }
      fill(255,255,0);
      ellipse(this.loc.x, this.loc.y, 5);
   }
}

function ladder(){
   push();
      strokeWeight(4);
      stroke(200,100,0);
      line(310,100, 310,350);
      line(340,100, 340,350);
      for(var i=100; i<=350; i+=10){
         line(310,i, 340,i);
      }
   pop();
}

function dudeWalk(){
   if(l_mv){
      l_rot+=PI/80;
      r_rot-=PI/80;
   }
   if(!l_mv){
      r_rot+=PI/80;
      l_rot -= PI/80;
   }
   if(l_rot>= PI/8 || r_rot >= PI/8)
      l_mv = !l_mv;
}
function grass(){
   push();
      strokeWeight(4);
      for(var i=0; i<g_x.length; i++){
         stroke(g_col[i]);
         line(g_x[i],height, g_x[i],g_height[i]);
      }
   pop();
}

function drawCloud(x,y,i){
   push();
      translate(x,y);
      noStroke();
      fill(cloudpiece[i]);
      ellipse(0,0, 40,30);
      fill(cloudpiece[i+1]);
      ellipse(40,-5, 40,30);
      fill(cloudpiece[i+2]);
      ellipse(20, 0, 30);
      fill(cloudpiece[i+3]);
      ellipse(30,-25, 30);
      fill(cloudpiece[i+4]);
      ellipse(5,-20, 30);
   pop();
}
function tower(x,y){
   push();
      translate(x,y);
      scale(2);
      fill(180);
      rect(0,-100, 50,150);
      quad(0,-80, -20,-120, 70,-120, 50,-80);
      fill(0,200,200);
      quad(10,-85, -10,-115, 60,-115, 40,-85);
   pop();
}

function armadillo(){
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
}

function spark(){
   this.loc = createVector(random(width), 410);
   this.endloc = createVector(random(30,370),random(30,150));
   this.vel = createVector(this.endloc.x-this.loc.x, this.endloc.y-this.loc.y);
   this.vel.normalize();
   this.vel.mult(5);
   this.s_colr = random(100,255);
   this.s_colg = random(100,255);
   this.s_colb = random(100,255);

   this.renderS = function(){
      push();
         noStroke();
         fill(this.s_colr, this.s_colg, this.s_colb);
         ellipse(this.loc.x, this.loc.y, 5);
      pop();
   }

   this.updateS = function(){
      this.loc.add(this.vel);
   }
}

function fw_part(loc, r_g,b){
   this.accelY = .02;
   this.vel = createVector(random(-1,1),random(-1,1));
   this.loc = loc.copy();
   this.r = random(4,6);
   this.life = random(90,120);
   this.colr = r_g.x+random(-30,30)
   this.colg = r_g.y+random(-30,30)
   this.colb = b.x+random(-30,30)

   this.updateP = function(){
      this.vel.y += this.accelY;
      this.loc.add(this.vel);
      this.life --;
   };

   this.renderP = function(){
      push();
         translate(this.loc.x, this.loc.y)
         stroke(this.colr,this.colg, this.colb, this.life*2)
         fill(this.colr,this.colg, this.colb, this.life);
         rotate(-atan2(this.vel.x,this.vel.y)+PI/2);
         ellipse(0,0, this.r*1.5, this.r);
      pop();
   };
}

function PSys(loc, rg, b0, num){
   this.particle = [];
   this.redgreen = rg.copy();
   this.blue = b0.copy();
   for(var i=0; i<num; i++){
      this.particle.push(new fw_part(loc,this.redgreen, this.blue));
   }

   this.run = function(){
      for(var i=this.particle.length-1; i>=0; i--){
         this.particle[i].updateP();
         this.particle[i].renderP();
         if(this.particle[i].life <= 0 ||
            this.particle[i].loc.x < 0 ||
            this.particle[i].loc.x > width ||
            this.particle[i].loc.y < 0 ||
            this.particle[i].loc.y > height){
            this.particle.splice(i,1);
         }
      }
   }
}
