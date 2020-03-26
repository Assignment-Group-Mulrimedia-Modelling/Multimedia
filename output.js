		var canWidth =1300;
		var canHeight = 600;

	//position where DODO will be drawn
		var a = 0;
		var b = 270;
		var scales = 2;
		
		var trackLefts = 1;
		var trackRights = 3;
		

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
		
		//dodo blinking variables	
		var blinking = false;
		var startBlinking;
		var endBlinking;
		var blinkTime; 

		var char = new Image();
		char.src = "dodo1.png";
		
		var gun = new Image();
		gun.src = "gunattack.png";

		var bullet = new Image();
		bullet.src = "Bullet.png";

	//position where HUNTERS will be drawn
		var x = 1300; 
		var y = 180;
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
		
		//initialise gun
		var gun_w = 488;
		var gun_h = 415;
		var x_pos = 150;
		var y_pos = 300;
		var scale_g = 0.3;
		var speedGun =20;

		//initialise bullet
		var bullet_w = 46;
		var bullet_h = 46;
		var bullet_xpos = 295;
		var bullet_ypos = 383;
		var scale_bullet =0.3;
		var space = false;
		
		var z =0;
		var count=0; //to count number of frames


		
		var controller = new Object();
		var UP_KEY = 38;
		var DOWN_KEY = 40;
		var SPACEBAR = 32;

				

		
		//intitialise hunters
		var ennemies = new Array(5);
		var speed = new Array(5);
		var yy = new Array(180,230,330,430,480); //y-position of  the hunters
		var scaleIncrease = new Array(0,0.1,0.15,0.2,0.3);

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
			/*if(evt.keyCode == 32){
				//canShoot = true;
				toggleKey(evt.keyCode,true);
			}
			else {
				toggleKey(evt.keyCode,false);
	
			}*/

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

		

				
		
		for (var i =0;i <5;i++){
			 ennemies[i] = Math.floor((Math.random() * 1400) + 1300); // x-position of ennemies
			 speed[i] = Math.floor((Math.random() * 10) + 4); //speed of ennemies
			
		}

		/*var x1 = Math.floor((Math.random() * 1400) + 1300);
		var x2 = Math.floor((Math.random() * 1400) + 1300);
		var x3 = Math.floor((Math.random() * 1400) + 1300);
		var x4 = Math.floor((Math.random() * 1400) + 1300);
		console.log(x1);
		console.log(x2);
		console.log(x3);
		console.log(x4);

		console.log(" ");

		var xx1 = Math.floor((Math.random() * 7) + 4);
		var xx2 = Math.floor((Math.random() * 7) + 4);
		var xx3 = Math.floor((Math.random() * 7) + 4);
		var xx4 = Math.floor((Math.random() * 7) + 4);
		console.log(xx1);
		console.log(xx2);
		console.log(xx3);
		console.log(xx4);	*/

		var currentFrame = 0;
		var left = false;

		var character = new Image();
		character.src = "hunter-left.png";	

	//canvas	

		var canvas = document.getElementById('canvas');
		canvas.width = canWidth;
		canvas.height = canHeight;

		var ctx = canvas.getContext('2d');

				

	//functions

		
		function updateFrame(){
			
			//console.log(x_pos);
			ctx.clearRect(x_pos,y_pos,gun_w*scale_g,gun_h*scale_g); //gun
			ctx.clearRect(bullet_xpos,bullet_ypos,bullet_w*scale_bullet,bullet_h*scale_bullet);	
			//ctx.clearRect(bullet_pos,y_pos,bullet_h*scale_bullet,bullet_w*scale_bullet);//bullet
			ctx.clearRect(a,b, widths*scales, heights*scales); //DODO
			for (i=0;i<5;i++){
				ctx.clearRect(ennemies[i], yy[i], width*(scale+scaleIncrease[i]), height*(scale + scaleIncrease[i])); //hunters
			}
			handleControls();
			updatePositions();
			//updatePositions();

		

			if (y_pos < 0) {
				y_pos = canHeight;
			}
			else if (y_pos > canHeight) {
				y_pos =0;
			}
			/*ctx.clearRect(x,y, width*scale, height*scale);
			ctx.clearRect(x1,y+50, width*(scale+0.1),height*(scale+0.1));
			ctx.clearRect(x2,y+100, width*(scale+0.15),height*(scale+0.15));
			ctx.clearRect(x3,y+200, width*(scale+0.2),height*(scale+0.2));
			ctx.clearRect(x4,y+300, width*(scale+0.3),height*(scale+0.3));	*/			
			
			currentFrames = currentFrames % col; //1 % 3 = 1 ... 3 % 3 = 0
			currentFrame = currentFrame % cols;			

			srcA = currentFrames * widths;
			
			if (lefts){
				
				a-=3;
				srcB = trackRights * heights;
			}
			else{
			
				a+=3;
				srcB = trackLefts * heights;
			}

			if(a>50){
				lefts = true;
			}

			if(a<0){
				lefts = false;
			}
			currentFrames++;

			srcX = currentFrame * width;
			for (i=0;i<5;i++){
				ennemies[i] -=speed[i];
			}
			/*x-=5;
			x1-=xx1;
			x2-=xx2;
			x3-=xx3;
			x4-=xx4;	*/		
			srcY = trackRight * height;

			
			

			if (ennemies[0] < 250 && ennemies[0] > 200 || ennemies[1] < 250 && ennemies[1] > 200 || ennemies[2] < 250 && ennemies[2] > 200 || ennemies[3] < 250 && ennemies[3] > 200 || ennemies[4] < 250 && ennemies[4] > 200) {
				count =0;
				blinking = true;
			}

		

			
			



		

			

			/*if(z < 10){
				for (i=0; i<5;i++) {
					if (ennemies[i] < 200) {
						ennemies[i] = canWidth;
						//console.log(z);
						//z++;


					}
				}

			}*/
				
				

				

			
				
				
				

			
			
			

			currentFrame++;
				
			
		}

		




		
				
		function drawImage(){
			updateFrame();
			

			
				if (blinking && Math.floor(Date.now()/frequency) % 2  && count < 20 ) {
					//setPosition(bullet);
				
					//ctx.drawImage(char,srcA,srcB,widths,heights,a,b,widths*scales,heights*scales);
										
					ctx.drawImage(gun,0,0,gun_w,gun_h,x_pos,y_pos,gun_w*scale_g, gun_h*scale_g);
					
					if (space) {
						ctx.drawImage(bullet,0,0,bullet_w,bullet_h,bullet_xpos,bullet_ypos,bullet_w*scale_bullet,bullet_h*scale_bullet);
					}



					for (i=0;i<5;i++){
						ctx.drawImage(character,srcX,srcY,width,height,ennemies[i],yy[i],width*(scale+scaleIncrease[i]),height*(scale+scaleIncrease[i]));
						//console.log(yy[i]);
					}
					
					count++;
					console.log(count);	

				}
					
				
				

			
			
			else {


				ctx.drawImage(gun,0,0,gun_w,gun_h,x_pos,y_pos,gun_w*scale_g, gun_h*scale_g);
				
				if (space) {
					ctx.drawImage(bullet,0,0,bullet_w,bullet_h,bullet_xpos,bullet_ypos,bullet_w*scale_bullet,bullet_h*scale_bullet);
				}
					
				
				
					
				ctx.drawImage(char,srcA,srcB,widths,heights,a,b,widths*scales,heights*scales); //DODO
				for (i=0;i<5;i++){
					ctx.drawImage(character,srcX,srcY,width,height,ennemies[i],yy[i],width*(scale+scaleIncrease[i]),height*(scale+scaleIncrease[i]));
					//console.log(yy[i]);
				}

			}
			

		}
			
			
			

		
		setInterval(function(){
			drawImage();

		}, 60 );
