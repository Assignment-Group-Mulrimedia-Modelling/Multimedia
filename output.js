		var canWidth =1300;
		var canHeight = 600;

	//position where DODO will be drawn
		var a = -600;
		var b = 270;
		var scales = 1.5;
		
		var trackLefts = 1;
		var trackRights = 3;
		
		var srcDx;
		var srcDy;

		var srcA;
		var srcB;

		var sheetWidths =144;
		var sheetHeights = 256;

		var col = 3;
		var row = 4;

		var widths = sheetWidths / col;
		var heights = sheetHeights / row;

		var currentFrames = 0;
		var lefts = false;
		var frequency =200;
		
		//dodo blinking variable
		var blinking = false;
		var blinkValue =0;
		

		var char = new Image();
		char.src = "dodo3.png";
		
		var dodos = new Array(6);
		var dy = new Array(190,240,290,340,390,440);
		var speedd = new Array(6);
		var load = 0;
		var loadStop = false;

		for(var d = 0; d<=5; d++){
			dodos[d]= Math.floor((Math.random() * 10) + 1);
			speedd[d]= Math.floor((Math.random() * 6) + 8);
			
		}

	//position where HUNTERS will be drawn
		var character = new Image();
		character.src = "hunter-left.png";	

		//var x = 1300; 
		//var y = 180;
		var scale = 0.7;
		
		var trackRight = 0;
		

		var srcX;
		var srcY;

		var sheetWidth = 1024;
		var sheetHeight = 123;

		var cols = 9;
		var rows = 1;

		var width = sheetWidth / cols;
		var height = sheetHeight / rows;

		var currentFrame = 0;
		
	//initialise gun
		var gun = new Image();
		gun.src = "gunattack.png";
		var gun_w = 488;
		var gun_h = 415;
		var x_pos = 150;
		var y_pos = 300;
		var scale_g = 0.25;
		var speedGun =20;

	//initialise bullet
		var bullet = new Image();
		bullet.src = "Bullet.png";
		var bullet_w = 46;
		var bullet_h = 46;
		var bullet_xpos = 100000;
		var bullet_ypos = 383;
		
		var space = false;
		
		var z =0;
		var count=0; //to count number of frames

		var randNum=35; //rate at which hunters are spawned
		var score =0; //score of player
		var saveKeyScore = "highscore" //save key for local storage of highscore
		
		var scoreHigh;
		var kill =false; //registering a successul kill
		var currentLives = 3 //current lives of dodo
		
		//Variables for Game Over text
		var text;
		var textSize = 100;//text font height in pixels
		var TEXTSIZE =24; //text font height for highscore
		var textFadeTime = 2.5; //text fade time in seconds
		var textAlpha //dissapearing text
		var dead = false;//when game is over, sttop shooting and moving
		



		
		var controller = new Object();
		var UP_KEY = 38;
		var DOWN_KEY = 40;
		var SPACEBAR = 32;

	
		
		
	//dodo fall variables
		var dodoX =55;
		var dodoY =280;	

		var srcDodoX;
		var srcDodoY = 0;

		var widthDodo = 48;
		var heightDodo = 64;
		var scaleDodo =1.5;
		var exit = false;

		var dodoChar = new Image();
		dodoChar.src = "dodo-fall.png";

		var cDodo = 0;



				

		
	//intitialise hunters
		var num =0;
		var ennemies = new Array(300); //x-position of ennemies
		var speed = new Array(300);
		var yy = new Array(300); //y-position of  the hunters
		//var scaleIncrease = new Array(1000); //size increase

		
		var scoreStr = localStorage.getItem(saveKeyScore); //string value of score
		
		if (scoreStr == null) {
			scoreHigh =0;	
		}
		else{
			scoreHigh = parseInt(scoreStr); 
		}
		
		function toggleKey(keyCode, isPressed) {

			if(dead){
				return; //stop any keypresses from working of gameover
			}
			if (keyCode == DOWN_KEY) {	
				controller.down = isPressed;	
			}

			if (keyCode == UP_KEY) {
				controller.up = isPressed;
			}

			if (keyCode == SPACEBAR) {
				space = true;
				controller.space = isPressed;
			}
		
		}

		document.onkeydown = function(evt) {
			toggleKey(evt.keyCode,true);
		};

		document.onkeyup = function(evt) {
			toggleKey(evt.keyCode,false);
		};

			//var bullet = createSprite('bullet',30,40,6, 12,12);


		var pauses = false;
		function paused(){
			pauses = !pauses;			
		}	

		function handleControls(){
			if(dead){
				return; //stop any movements if gameover
			}
			if (controller.down) {
				y_pos +=  speedGun;
			}

			if (controller.up) {
				y_pos -= speedGun;
			}

			if (controller.space && bullet_xpos > 1300) {
				bullet_xpos = x_pos + 145;
				bullet_ypos = y_pos + 83;
				
	
			}

			
		}

		function updatePositions(){
			
		
			bullet_xpos+=80;
			




		}

		
		
		


	

		

	//canvas	

		var canvas = document.getElementById('canvas');
		canvas.width = canWidth;
		canvas.height = canHeight;

		var ctx = canvas.getContext('2d');

				

	//functions
		var i=0;
		function addEnemy(){
			/*if(dead){
				return;
			}*/
			if (getRandom(randNum) == 0) { //when number generated == 0
				
				ennemies[i] = Math.floor((Math.random() * 3000) + 2000); // x-position of ennemies
				if (randNum == 35) {
					speed[i] = Math.floor((Math.random() * 7) + 5); //speed of ennemies
					//console.log(speed[i]);
				}
				else if (randNum ==30) {
					speed[i] = Math.floor((Math.random() * 8) + 7); 
				}
				else if (randNum ==25) {
					speed[i] = Math.floor((Math.random() * 6) + 12); 
				}
				else if (randNum ==20) {
					speed[i] = Math.floor((Math.random() * 7) + 15); 
				}
				else if (randNum ==15) {
					speed[i] = Math.floor((Math.random() * 9) + 18); 
				}
				
				yy[i] = Math.floor((Math.random() * 300)+ 180);
				/*scaleIncrease[i] = Math.random() * 0.3;
				scaleIncrease[i].toFixed(2);*/ 
				//console.log(i);
				i++;
			}
		}

		function checkCollisions(){
			for (var i=ennemies.length;i>=0;i--){
				if (bullet_xpos + bullet_w > ennemies[i] && bullet_xpos < ennemies[i] + width * scale && bullet_ypos + bullet_h > yy[i] && bullet_ypos < yy[i] + height * scale)
				{
					ennemies.splice(i,1);
					bullet_xpos = 1000000;
					score++;
					kill =true;
				
				}
				if(score > scoreHigh) {
					scoreHigh =score;
					localStorage.setItem(saveKeyScore,scoreHigh); 
				}



				while (score % 10 ==0 && randNum >=20 && kill ==true) {
					randNum -=5;
					console.log(randNum);
					kill =false;
					
				}

			}

		
		}
		function getRandom(maxSize){
			return parseInt(Math.random()*maxSize); //generate a number between 0 and maxSize
			


		}
	
		var gameLoad =0;
		function gameOver(){

			ennemies.splice(1,299);
			dead =true;
			clearInterval(50);

			console.log(gameLoad);
			if (gameLoad > 50){
				drawDodo();	
			}
			

			/*var newEnnemies = Math.floor((Math.random() * 3000) + 2000);
			var speed = Math.floor((Math.random() * 7) + 5);
			var yy = Math.floor((Math.random() * 300)+ 180);
			var cFrame =0;
			var newSource;

			//srcY = trackRight * height;
			

			function update(){
				ctx.clearRect(newEnnemies,yy,width * scale, height * scale);

				cFrame = cFrame % cols;	
				newSource = cFrame * width;
				cFrame++;
				newEnnemies -=speed;

			}
			function drawHunter(){
				update();
				ctx.drawImage(character,newSource,0,width,height,newEnnemies,yy,width * scale, height * scale);

				
			}
			

			setInterval(function(){
			drawHunter();

			}, 50 );*/

					
			
			localStorage.setItem('score',score);
			localStorage.setItem('highscore',scoreHigh);
			text = "Game Over";	
			textAlpha =1.0;
		
			
			if( gameLoad>100){
				location.replace("gameover.html");	
			}

			gameLoad++;
			
			

			
			
			

		}

		



		
		function updateFrame(){
			
			if(pauses){
				return;
			}

						
						
			ctx.clearRect(x_pos,y_pos,gun_w*scale_g,gun_h*scale_g); //gun

			ctx.clearRect(bullet_xpos,bullet_ypos,bullet_w*scale_g,bullet_h*scale_g); //bullet	

			ctx.clearRect(a,b, widths*scales, heights*scales); //DODO

			for (d = 0; d<=5; d++){
				ctx.clearRect(dodos[d],dy[d], widths*scales, heights*scales); //DODO
			}	

			for (var i=0;i<300;i++){
				ctx.clearRect(ennemies[i], yy[i], width * scale, height * scale); //hunters
			}

			updatePositions();

			handleControls();
			checkCollisions();
			addEnemy();
			
			


		

			if (y_pos <= 100) {
				y_pos = 600;
			}
			else if (y_pos > 600) {
				y_pos = 101;
			}
						
			
			currentFrames = currentFrames % col; //1 % 3 = 1 ... 3 % 3 = 0
			currentFrame = currentFrame % cols;			

			srcA = currentFrames * widths;
			srcDx = currentFrames * widths;	

			if (lefts){
				
				a-=3;
				srcDy = trackRights * heights;
			}

			
			else{
			
				a+=3;
				srcDy = trackLefts * heights;
			}

			if (dead) {
				a =-400;
			}

			if(a>50){
				lefts = true;				
			}

			if(a<0){
				lefts = false;
			}

			srcB = trackLefts * heights;	

			currentFrames++;
			
			for(d=0;d<=5;d++){
				dodos[d]+=speedd[d];
			}

			srcX = currentFrame * width;

			for (i=0;i<300;i++){
				ennemies[i] -=speed[i];
			}
				
			srcY = trackRight * height;

			
			for (var i=0;i<ennemies.length;i++){
				if (ennemies[i] < 250 && ennemies[i] >200) {
					count =0;
					blinking=true;
				
					
				}
			}

			currentFrame++;

			
			
		


			//draw gameOver	
			 if (textAlpha >= 0) {
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "rgba(255, 0, 0, " + textAlpha + ")";
                ctx.font = "small-caps " + textSize + "px dejavu sans mono";
                ctx.fillText(text, canWidth / 2, canHeight/2);
                textAlpha -= (0.1);
            }

				
			
		}
		
		function update(){
			
			if (exit == false) {
				ctx.clearRect(dodoX, dodoY, widthDodo * scaleDodo, heightDodo * scaleDodo);

				cFrame = currentFrame % 6;
				srcDodoX = cFrame * widthDodo;
				dodoX-=5;

				if (cFrame == 5){
					exit = true;
				}

				cFrame++;
			}
		


			
				
		}

		
		function drawImage(){


			updateFrame();

			if (currentLives == 0) {
				gameOver();
			}
			
			
			
			if (blinking && Math.floor(Date.now()/frequency) % 2  && count < 20 ) {
				
				ctx.drawImage(gun,0,0,gun_w,gun_h,x_pos,y_pos,gun_w*scale_g, gun_h*scale_g);
				
				if (space) {
					ctx.drawImage(bullet,0,0,bullet_w,bullet_h,bullet_xpos,bullet_ypos,bullet_w*scale_g,bullet_h*scale_g);
				}



				for (var i=0;i<300;i++){
					ctx.drawImage(character,srcX,srcY,width,height,ennemies[i],yy[i],width * scale, height * scale);	
				}
		
				count++;
				console.log(count);
				if (currentLives ==1) {
					if (count ==1) {
						currentLives=0;
					}
				}
				if(count == 15) {
					currentLives--;
					if (currentLives <=0){
						currentLives =0;
					}
					
					
					
				}		

			}
					
				
			else {


				if (load>100){
					ctx.drawImage(gun,0,0,gun_w,gun_h,x_pos,y_pos,gun_w*scale_g, gun_h*scale_g);
					loadStop = true;
				}
					
					
				if(!loadStop){
					load++;
				}

				
				
				
				if (space) {
					ctx.drawImage(bullet,0,0,bullet_w,bullet_h,bullet_xpos,bullet_ypos,bullet_w*scale_g,bullet_h*scale_g);
				}
					
				
					
				for (d=0; d<=5; d++){
					ctx.drawImage(char,srcA,srcB,widths,heights,dodos[d],dy[d],widths*scales,heights*scales); //DODOS

				}

				
				ctx.drawImage(char,srcDx,srcDy,widths,heights,a,b,widths*scales,heights*scales); //dodo
					

				

				
				
				for (var i=0;i<300;i++){
					ctx.drawImage(character,srcX,srcY,width,height,ennemies[i],yy[i],width * scale, height * scale); //hunters
					
				}

			}

		
			var scoreElement = document.getElementById('score');
			scoreElement.innerHTML = 'SCORE: ' + score;

			var livesElement = document.getElementById('lives');
			livesElement.innerHTML = 'CURRENT LIVES: ' + currentLives;

			var highElement = document.getElementById('highscore');
			highElement.innerHTML = "BEST: " + scoreHigh;
			

		}
		function drawDodo(){
			if (dead ==true){
				update();
				ctx.drawImage(dodoChar, srcDodoX, srcDodoY, widthDodo, heightDodo, dodoX, dodoY, widthDodo* scaleDodo, heightDodo * scaleDodo);	
			}


		}

	

		setInterval(function(){
			drawDodo();
		

		}, 300);
			
			
			

		
		setInterval(function(){
			drawImage();

		}, 50 );

