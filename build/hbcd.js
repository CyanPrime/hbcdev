function Hitbox(){
	this.number = 0;
	this.boxPos = [];
	this.boxSize = [];
	this.boxType = 0;
}	

function Frame(){
	this.number = 0;
	this.imgName = "";
	this.charPos = [];
	this.hitBoxes = [];
}

function drawFrame(ctx, charImgLoaded, characterImg, frame, x, y, zoom, drawHitboxes){
	
	if(charImgLoaded){
		ctx.setTransform(zoom, 0, 0, zoom, 0, 0);
		ctx.drawImage(characterImg, (x + frame.charPos[0]), (y + frame.charPos[1]));
	}

	if(drawHitboxes){
		ctx.setTransform(zoom, 0, 0, zoom, 0, 0);		
		ctx.globalAlpha = 0.5;
		for(var i = 0; i < frame.hitBoxes.length; i++){
			if(frame.hitBoxes[i].t == 0) ctx.fillStyle = "#00ff00";
			else if(frame.hitBoxes[i].boxType == 1) ctx.fillStyle = "#ff0000";
			else if(frame.hitBoxes[i].boxType == 2) ctx.fillStyle = "#0000ff";
			else if(frame.hitBoxes[i].boxType == 3) ctx.fillStyle = "#00ffff";
			else if(frame.hitBoxes[i].boxType == 4) ctx.fillStyle = "#ff00ff";
			else if(frame.hitBoxes[i].boxType == 5) ctx.fillStyle = "#ffff00";
			ctx.fillRect(x + frame.hitBoxes[i].boxPos[0],y + frame.hitBoxes[i].boxPos[1], frame.hitBoxes[i].boxSize[0], frame.hitBoxes[i].boxSize[1]);
		}
		ctx.globalAlpha = 1;

		ctx.setTransform(1, 0, 0, 1, 0, 0);
		for(var i = 0; i < frame.hitBoxes.length; i++){
			ctx.fillStyle = "#ffffff";
			ctx.fillText(frame.hitBoxes[i].number, (x + frame.hitBoxes[i].boxPos[0]) * zoom, ((y + frame.hitBoxes[i].boxPos[1]) * zoom) + 7);
		}
	}
}

function getFrameFromXML(xml){
	var tempFrame = new Frame();
	console.log("xml printing");
	console.log(xml);

	var xmlDoc = $.parseXML( xml );
	var xml = $( xmlDoc );
	
	tempFrame.imgName = xml.find( "img" ).text();

	var numVal = parseInt(xml.find( "cx" ).text());
	tempFrame.charPos[0] = numVal;

	var numVal = parseInt(xml.find( "cy" ).text());
	tempFrame.charPos[1] = numVal;

	var numHitBoxes = 0;
	var numVal = parseInt(xml.find( "numhitboxes" ).text());
	numHitBoxes = numVal;

	var tempHitboxes = [];
	for(var i = 0; i < numHitBoxes; i++){
		var hitBoxDoc = xml.find( "hitbox" )[i];
		var hitBoxXML =  $( hitBoxDoc );
		var tempHitbox = new Hitbox();		

		tempHitbox.number = i;

		var numVal = parseInt(hitBoxXML.find( "hx" ).text());
		tempHitbox.boxPos[0] = numVal;

		var numVal = parseInt(hitBoxXML.find( "hy" ).text());
		tempHitbox.boxPos[1] = numVal;

		var numVal = parseInt(hitBoxXML.find( "hw" ).text());
		tempHitbox.boxSize[0] = numVal;

		var numVal = parseInt(hitBoxXML.find( "hh" ).text());
		tempHitbox.boxSize[1]  = numVal;

		var numVal = parseInt(hitBoxXML.find( "ht" ).text());
		tempHitbox.boxType  = numVal;

		tempHitboxes.push(tempHitbox);
	}

	tempFrame.hitBoxes = tempHitboxes;

	return tempFrame;
}
