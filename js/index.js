var coinThing = new Image();
coinThing.src = "assets/coinImage.png";
function sprite (options) {
				
    var that = {};
					
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;
}
var canvas = document.getElementById("coinAnimation");
canvas.width = 100;
canvas.height = 100;
var coin = sprite({
    context: canvas.getContext("2d"),
    width: 100,
    height: 100,
    image: coinImage
});
function sprite (options) {

...
				
    that.render = function () {

        // Draw the animation
        that.context.drawImage(
           that.image,
           0,
           0,
           that.width,
           that.height,
           0,
           0,
           that.width,
           that.height);
    };
    
...

}
coin.render();
function sprite (options) {
                    
    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0;

...

    that.update = function () {

        tickCount += 1;
			
        if (tickCount > ticksPerFrame) {
        
        	tickCount = 0;
        	
            // Go to the next frame
            frameIndex += 1; 
        }
    }; 
    
...

}
function sprite (options) {

...

    that.render = function () {

        // Draw the animation
        that.context.drawImage(
           that.image,
           frameIndex * that.width / numberOfFrames,
           0,
           that.width / numberOfFrames,
           that.height,
           0,
           0,
           that.width / numberOfFrames,
           that.height);
    };   
    
...

}
function sprite (options) {
                    
    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = 0,
        numberOfFrames = options.numberOfFrames || 1;

...

    that.update = function () {

        tickCount += 1;
			
        if (tickCount > ticksPerFrame) {
        
            tickCount = 0;
        	
            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {	
                // Go to the next frame
                frameIndex += 1;
            }	
        }
    };
    
...

}
function sprite (options) {

...

    that.loop = options.loop;

    that.update = function () {

        tickCount += 1;
			
        if (tickCount > ticksPerFrame) {
        
            tickCount = 0;
        
            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {	
                // Go to the next frame
                frameIndex += 1;
            } else if (that.loop) {
                frameIndex = 0;
            }
        }
    };
    
...
function gameLoop () {

  window.requestAnimationFrame(gameLoop);
  
  coin.update();
  coin.render();
}





