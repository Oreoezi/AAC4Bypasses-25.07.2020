var scriptName = "AAC4Jesus"; 
var scriptVersion = 1.0;
var scriptAuthor = "Oreoezi"; 
var KeyBinding = Java.type("net.minecraft.client.settings.KeyBinding");
function AAC4Jesus() {
    this.getName = function() {
        return "AAC4Jesus";
    };

    this.getDescription = function() {
        return "AAC4Jesus";
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
		if(mc.thePlayer.isInWater()) {
			mc.timer.timerSpeed = 1 + (mc.thePlayer.ticksExisted % 5 / 10);
			KeyBinding.setKeyBindState(mc.gameSettings.keyBindJump.getKeyCode(), true);
		}
		else mc.timer.timerSpeed = 1;
    };
}

var aac4jesus = new AAC4Jesus();
var aac4jesusClient;
function onEnable() {
    moduleManager.registerModule(aac4jesus);
};

function onDisable() {
    moduleManager.unregisterModule(aac4jesusClient);
};
