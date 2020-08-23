var scriptName = "AAC4NoFall"; 
var scriptVersion = 1.0;
var scriptAuthor = "Oreoezi"; 
var cache = 0;
var pTicks = 0;
function AAC4NoFall() {
    this.getName = function() {
        return "AAC4NoFall";
    };

    this.getDescription = function() {
        return "AAC4NoFall";
    };
	
    this.getCategory = function() {
        return "Fun";
    };
    this.onDisable = function() {
	mc.timer.timerSpeed = 1;
	mc.thePlayer.speedInAir = 0.02;
    }
    this.onPacket = function(event) {
	if (mc.thePlayer.ticksExisted - pTicks <= 40) {
		event.cancelEvent();
	}
	if (cache - mc.thePlayer.posY > 70 && !mc.thePlayer.onGround) {
		//70 cuz I used a 85 block fall, you could procedurally check how close you are to the ground
		pTicks = mc.thePlayer.ticksExisted;
	}

    };
    this.onUpdate = function() {
		if (mc.thePlayer.onGround) {
			cache = mc.thePlayer.posY;
		}
		
    };
}

var aac4nofall = new AAC4NoFall();
var aac4nofallClient;
function onEnable() {
    moduleManager.registerModule(aac4nofall);
};

function onDisable() {
    moduleManager.unregisterModule(aac4nofallClient);
};
