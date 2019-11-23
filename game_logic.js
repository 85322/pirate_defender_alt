var woodBuildingLevel = 0;
var stoneBuildingLevel = 0;
var ironBuildingLevel = 0;

function upgradeWood(){
	woodBuildingLevel += 1;
	var result = woodBuildingLevel + 1;
	document.getElementById("woodPara").innerHTML = woodBuildingLevel;
}

document.getElementById("woodCutter_icon").onclick=function (){
	upgradeWood();
}


function upgradeStone(){
	stoneBuildingLevel += 1;
	var result = stoneBuildingLevel + 1;
	document.getElementById("stonePara").innerHTML = stoneBuildingLevel;
}

document.getElementById("stoneCutter_icon").onclick=function(){
	upgradeStone();
}

function upgradeIron(){
	ironBuildingLevel += 1;
	var result = ironBuildingLevel + 1;
	document.getElementById("ironPara").innerHTML = ironBuildingLevel;
}

document.getElementById("ironSmelter_icon").onclick=function(){
	upgradeIron();
}
