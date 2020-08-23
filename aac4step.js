var scriptName = "AAC4Step"; 
var scriptVersion = 1.0;
var scriptAuthor = "Oreoezi"; 
var ticks = 0;
var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils");
function AAC4Step() {
    this.getName = function() {
        return "AAC4Step";
    };

    this.getDescription = function() {
        return "AAC4Step";
    };
	
    this.getCategory = function() {
        return "Fun";
    };
    this.onDisable = function() {
	mc.timer.timerSpeed = 1;
	mc.thePlayer.speedInAir = 0.02;
    }
    this.onUpdate = function() {
	if (mc.thePlayer.onGround)
	{
		mc.timer.timerSpeed = 1.02;
		mc.thePlayer.speedInAir = 0.02;
	}
	else {
		mc.thePlayer.speedInAir = 0.02021;
		mc.timer.timerSpeed = mc.thePlayer.motionY < 0 ? 1.35 : 1.2;
	}
	if (mc.thePlayer.isCollidedHorizontally && MovementUtils.isMoving() && mc.thePlayer.onGround) {
		mc.thePlayer.jump();
	}
    };
}

var aac4step = new AAC4Step();
var aac4stepClient;
function onEnable() {
    moduleManager.registerModule(aac4step);
};

function onDisable() {
    moduleManager.unregisterModule(aac4stepClient);
};
