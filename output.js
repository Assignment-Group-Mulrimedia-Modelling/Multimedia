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
		

		var char = new Image();
		char.src = "dodo3.png";
		
		var dodos = new Array(6);
		var dy = new Array(190,240,290,340,390,440);
		var speedd = new Array(6);

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
		var bullet_xpos = 295;
		var bullet_ypos = 383;
		
		var space = false;
		
		var z =0;
		var count=0; //to count number of frames


		
		var controller = new Object();
		var UP_KEY = 38;
		var DOWN_KEY = 40;
		var SPACEBAR = 32;

		var startTime = new Date();
		var endTime;
		var num=0;
		console.log(startTime);

				

		
	//intitialise hunters
		var num =0;
		var ennemies = new Array(1000);
		var speed = new Array(1000);
		var yy = new Array(1000); //y-position of  the hunters
		var scaleIncrease = new Array(1000);
		/*var z= Math.random() * 0.3;
		z = z.toFixed(2);
		console.log(z);*/

		/*function createSprite(element, x, y, r, w, h ) {
			var result = new Object();
			result.element = element;
			result.x = x;
			result.y =y;
			result.r = r;
			result.w = w;
			result.h = h;
			return result;
		}*/

		function toggleKey(keyCode, isPressed) {
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


		
		

		function handleControls(){
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
		


		//var left = false;

		

	//canvas	

		var canvas = document.getElementById('canvas');
		canvas.width = canWidth;
		canvas.height = canHeight;

		var ctx = canvas.getContext('2d');

				

	//functions
		var i=0;
		function addEnemy(){
			if (getRandom(50) == 0) { //when number generated == 0
				
				ennemies[i] = Math.floor((Math.random() * 3500) + 2000); // x-position of ennemies
				speed[i] = Math.floor((Math.random() * 7) + 5); //speed of ennemies
				yy[i] = Math.floor((Math.random() * 300)+ 180);
				scaleIncrease[i] = Math.random() * 0.3;
				scaleIncrease[i].toFixed(2); 
				console.log(i);
				i++;
			}
		}
		function getRandom(maxSize){
			return parseInt(Math.random()*maxSize); //generate a number between 0 and maxSize
			


		}

		
		function updateFrame(){
			
			
			ctx.clearRect(x_pos,y_pos,gun_w*scale_g,gun_h*scale_g); //gun

			ctx.clearRect(bullet_xpos,bullet_ypos,bullet_w*scale_g,bullet_h*scale_g); //bullet	

			ctx.clearRect(a,b, widths*scales, heights*scales); //DODO

			for (d = 0; d<=5; d++){
				ctx.clearRect(dodos[d],dy[d], widths*scales, heights*scales); //DODO
			}	

			for (var i=0;i<1000;i++){
				ctx.clearRect(ennemies[i], yy[i], width*(scale+scaleIncrease[i]), height*(scale + scaleIncrease[i])); //hunters
			}

			handleControls();
			updatePositions();
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

			for (i=0;i<1000;i++){
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
				
			
		}

		
		function drawImage(){
			updateFrame();
			

			
			if (blinking && Math.floor(Date.now()/frequency) % 2  && count < 20 ) {
				
				ctx.drawImage(gun,0,0,gun_w,gun_h,x_pos,y_pos,gun_w*scale_g, gun_h*scale_g);
				
				if (space) {
					ctx.drawImage(bullet,0,0,bullet_w,bullet_h,bullet_xpos,bullet_ypos,bullet_w*scale_g,bullet_h*scale_g);
				}



				for (var i=0;i<1000;i++){
					ctx.drawImage(character,srcX,srcY,width,height,ennemies[i],yy[i],width*(scale+scaleIncrease[i]),height*(scale+scaleIncrease[i]));	
				}
		
				count++;		

			}
					
				
			else {


				ctx.drawImage(gun,0,0,gun_w,gun_h,x_pos,y_pos,gun_w*scale_g, gun_h*scale_g);
				
				if (space) {
					ctx.drawImage(bullet,0,0,bullet_w,bullet_h,bullet_xpos,bullet_ypos,bullet_w*scale_g,bullet_h*scale_g);
				}
					
				
					
				for (d=0; d<=5; d++){
					ctx.drawImage(char,srcA,srcB,widths,heights,dodos[d],dy[d],widths*scales,heights*scales); //DODOS

				}

				ctx.drawImage(char,srcDx,srcDy,widths,heights,a,b,widths*scales,heights*scales); //dodo
				
				for ( var i=0;i<1000;i++){
					ctx.drawImage(character,srcX,srcY,width,height,ennemies[i],yy[i],width*(scale+scaleIncrease[i]),height*(scale+scaleIncrease[i]));
					
				}

			}
			

		}
			
			
			

		
		setInterval(function(){
			drawImage();

		}, 50 );
