		
		var canWidth =1300;
		var canHeight = 600;
		//position where frame will be drawn
		var x = 650;
		var y =270;
		const scale =2;
		
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
		


		function updateFrame(){
			ctx.clearRect(x,y, width*scale, height*scale);
			
			currentFrame = currentFrame % cols; //1 % 3 = 1 ... 3 % 3 = 0

			srcX = currentFrame * width;
			
		
			
			if (left){
			
				
				x-=4;
				srcY = trackRight * height;
			}
			else{
			
				x+=4;
				srcY = trackLeft * height;
			}

			if(x>700){
				left = true;
			}

			if(x<550){
				left = false;
			}
			currentFrame++;
				
			
		}

		function drawImage(){
			updateFrame();
			ctx.drawImage(character,srcX,srcY,width,height,x,y,width*scale,height*scale);

		} 		

		setInterval(function(){
			drawImage();

		}, 70 );
