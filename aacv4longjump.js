var scriptName = "AAC4LongJump"; 
var scriptVersion = 1.0;
var scriptAuthor = "Oreoezi"; 
function AAC4LongJump() {
    this.getName = function() {
        return "AAC4LongJump";
    };
    this.getDescription = function() {
        return "Timer AAC LongJump";
    };
    this.getCategory = function() {
        return "Fun";
    };
    this.onPacket = function(event) {	
			
	if (!mc.thePlayer.onGround) {
		switch (mc.thePlayer.ticksExisted % 5) {
		case 0: {
			mc.timer.timerSpeed = 0.9;
			mc.thePlayer.speedInAir = 0.022;
			break;
		}
		case 1: {
			mc.timer.timerSpeed = 0.75;
			mc.thePlayer.speedInAir = 0.027;
			break;
		}
		case 2: {
			mc.timer.timerSpeed = 0.4;
			mc.thePlayer.speedInAir = 0.044;
			break;
		}
		case 3: {
			mc.timer.timerSpeed = 0.3;
			mc.thePlayer.speedInAir = 0.060;
			break;
		}
		}
	}
	else {
		mc.timer.timerSpeed = 1.02;
		mc.thePlayer.speedInAir = 0.02021;
	}

    }
    this.onUpdate = function() {
    	
    };
    this.onEnable = function () {
    };
    this.onDisable = function() {
	mc.thePlayer.speedInAir = 0.02;
	mc.timer.timerSpeed = 1;
    };
}

var AAC4LongJump = new AAC4LongJump();
var AAC4LongJumpClient;
function onEnable() {
    moduleManager.registerModule(AAC4LongJump);
};

function onDisable() {
    moduleManager.unregisterModule(AAC4LongJumpClient);
};
