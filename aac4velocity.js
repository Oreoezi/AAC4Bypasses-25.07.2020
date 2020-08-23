var scriptName = "AAC4Velocity"; 
var scriptVersion = 1.0;
var scriptAuthor = "Oreoezi"; 
function AAC4Velocity() {
    this.getName = function() {
        return "AAC4Velocity";
    };

    this.getDescription = function() {
        return "AACVelocity";
    };
	
    this.getCategory = function() {
        return "Fun";
    };
    this.onDisable = function() {
	mc.timer.timerSpeed = 1;
	mc.thePlayer.speedInAir = 0.02;
    }
    this.onPacket = function(event) {
    };
    this.onUpdate = function() {
	if(mc.thePlayer.hurtTime > 0) { 
		mc.thePlayer.onGround = true;
		mc.thePlayer.motionX *= 0;
		mc.thePlayer.motionZ *= 0;
        }
    };
}

var aac4velocity = new AAC4Velocity();
var aac4velocityClient;
function onEnable() {
    moduleManager.registerModule(aac4velocity);
};

function onDisable() {
    moduleManager.unregisterModule(aac4velocityClient);
};
