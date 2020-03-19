		
		var canWidth =1000;
		var canHeight = 500;
		//position where frame will be drawn
		var x = 0;
		var y =200;
		const scale =3;
		
		var trackLeft = 1;
		var trackRight = 3;
		

		var scrX;
		var srcY;

		var sheetWidth =144;
		var sheetHeight = 256;

		var cols = 3;
		var rows =4;

		var width = sheetWidth / cols;
		var height = sheetHeight / rows;

		var currentFrame = 0;
		var left = false;

		var character = new Image;
		character.src = "dodo1.png";

		var canvas = document.getElementById('canvas');
		canvas.width = canWidth;
		canvas.height = canHeight;

		var ctx = canvas.getContext('2d');
		
		function moveRight(){
			left = false;
		}
		
		function moveLeft(){
			left = true;
		}
		function updateFrame(){
			ctx.clearRect(x,y, width*scale, height*scale);
			
			currentFrame = currentFrame % cols; //1 % 3 = 1 ... 3 % 3 = 0

			srcX = currentFrame * width;
			
		
			
			if (left){
			
				
				x-=5;
				srcY = trackRight * height;
			}
			else{
			
				x+=5;
				srcY = trackLeft * height;
			}
			currentFrame++;
			
			
			
			
			
			
			
		}

		function drawImage(){
			updateFrame();
			ctx.drawImage(character,srcX,srcY,width,height,x,y,width*scale,height*scale);

		} 		

		setInterval(function(){
			drawImage();

		}, 50 );
