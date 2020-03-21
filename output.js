		var canWidth =1300;
		var canHeight = 600;

	//position where DODO will be drawn
		var a = 0;
		var b = 270;
		var scales = 1.5;
		
		var trackLefts = 1;
		var trackRights = 3;
		

		var scrA;
		var srcB;

		var sheetWidths =144;
		var sheetHeights = 256;

		var col = 3;
		var row = 4;

		var widths = sheetWidths / col;
		var heights = sheetHeights / row;

		var currentFrames = 0;
		var lefts = false;

		var char = new Image;
		char.src = "dodo1.png";
		
		var gun = new Image
		gun.src = "gun.png"

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

		var x_pos = 50;
		var y_pos = 300;
		var gun_w = 2422;
		var gun_h = 479;
		var scale_g = 0.1;

		var ennemies = new Array(5);
		var speed = new Array(5);
		var yy = new Array(180,230,330,430,480);
		var scaleIncrease = new Array(0,0.1,0.15,0.2,0.3);

				
		
		for (var i =0;i <5;i++){
			 ennemies[i] = Math.floor((Math.random() * 1400) + 1300);
			 speed[i] = Math.floor((Math.random() * 7) + 4);
			
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

		var character = new Image;
		character.src = "hunter-left.png";	

	//canvas	

		var canvas = document.getElementById('canvas');
		canvas.width = canWidth;
		canvas.height = canHeight;

		var ctx = canvas.getContext('2d');

				

	//functions

		function updateFrame(){
			ctx.clearRect(x_pos,y_pos,gun_w*scale_g,gun_h*scale_g);
			ctx.clearRect(a,b, widths*scales, heights*scales); //DODO
			for (i=0;i<5;i++){
				ctx.clearRect(ennemies[i], yy[i], width*(scale+scaleIncrease[i]), height*(scale + scaleIncrease[i]));
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

			/*if (x  < 50 || x1 < 50 || x2  < 50 || x3 < 50 || x4 < 50) {
				alert("Game Over");
			}

		

			if(x < -10){
				x = canWidth;
			}

			if(x1 < -10){
				x1 = canWidth;
			}

			if(x2 < -10){
				x2 = canWidth;
			}

			if(x3 < -10){
				x3 = canWidth;
			}	

			if(x4 < -10){
				x4 = canWidth;
			}*/

			currentFrame++;
				
			
		}


		
				
		function drawImage(){
			updateFrame();
			ctx.drawImage(gun,0,0,gun_w,gun_h,x_pos,y_pos,gun_w*scale_g, gun_h*scale_g);	
			ctx.drawImage(char,srcA,srcB,widths,heights,a,b,widths*scales,heights*scales); //DODO
			for (i=0;i<5;i++){
				ctx.drawImage(character,srcX,srcY,width,height,ennemies[i],yy[i],width*(scale+scaleIncrease[i]),height*(scale+scaleIncrease[i]));
				//console.log(yy[i]);
			}
			/*ctx.drawImage(character,srcX,srcY,width,height,x,y,width*scale,height*scale);
			ctx.drawImage(character,srcX,srcY,width,height,x1,y+50,width*(scale+0.1),height*(scale+0.1));
			ctx.drawImage(character,srcX,srcY,width,height,x2,y+100,width*(scale+0.15),height*(scale+0.15));
			ctx.drawImage(character,srcX,srcY,width,height,x3,y+200,width*(scale+0.2),height*(scale+0.2));
			ctx.drawImage(character,srcX,srcY,width,height,x4,y+300,width*(scale+0.3),height*(scale+0.3));	*/
		} 		

		setInterval(function(){
			drawImage();

		}, 60 );