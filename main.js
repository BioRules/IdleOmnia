/*This is the main file. Variables and calls are stored here*/

/*--------------
**Game Functions
--------------*/
function checkTabs(){
	if(phosphorus.count>=1){
		document.getElementById("CompoundTab").setAttribute("class","tablinks");
		document.getElementById("CompoundTab").style.display = "inline-block";
	}
	if(sugar.count>=1){
		document.getElementById("MicroscopicTab").setAttribute("class","tablinks");
		document.getElementById("MicroscopicTab").style.display = "inline-block";
	}
};


//Save game function
function saveGame(){
	var saveIncGame = {
		//Elementary
		electrons: electrons,
		protons: protons,
		photons: photons,
		neutrons: neutrons,
		
		//Element
		hydrogen: hydrogen,
		helium: helium,
		carbon: carbon,
		nitrogen: nitrogen,
		oxygen: oxygen,
		phosphorus: phosphorus,
		
		//Compound
		methane: methane,
		ammonia: ammonia,
		water: water,
		carbondioxide: carbondioxide,
		phosphate: phosphate,
		sugar: sugar,
		
		//Microscopic
		protein: protein,
		dna: dna,
		virus: virus,
		bacteria: bacteria,
		silt: silt,
		cell: cell,
		seed: seed,
		droplet: droplet,
		
		allUpgrades: allUpgrades,
		boughtUpgrades: boughtUpgrades,
	}
	localStorage.setItem('saveIncGame',JSON.stringify(saveIncGame));
};

//Load game function
function loadGame(){
	var savegame = JSON.parse(localStorage.getItem('saveIncGame'));
	
	//Load elementary
	if (typeof savegame.electrons !== "undefined") electrons = savegame.electrons;
	if (typeof savegame.protons !== "undefined") protons = savegame.protons;
	if (typeof savegame.photons !== "undefined") photons = savegame.photons;
	
	if (typeof savegame.neutrons !== "undefined"){
		neutrons = savegame.neutrons;
		neutrons.dependents = [electrons,protons];
	}
	
	//Load element
	if (typeof savegame.hydrogen !== "undefined"){
		hydrogen = savegame.hydrogen;
		hydrogen.dependents = [electrons,protons];
	}
	if (typeof savegame.helium !== "undefined"){
		helium = savegame.helium;
		helium.dependents = [electrons,protons,neutrons];
	}
	if (typeof savegame.carbon !== "undefined"){
		carbon = savegame.carbon;
		carbon.dependents = [electrons,protons,neutrons];
	}
	if (typeof savegame.nitrogen !== "undefined"){
		nitrogen = savegame.nitrogen;
		nitrogen.dependents = [electrons,protons,neutrons];
	}
	if (typeof savegame.oxygen !== "undefined"){
		oxygen = savegame.oxygen;
		oxygen.dependents = [electrons,protons,neutrons];
	}
	if (typeof savegame.phosphorus !== "undefined"){
		phosphorus = savegame.phosphorus;
		phosphorus.dependents = [electrons,protons,neutrons];
	}
	
	//Load compound
	if (typeof savegame.methane !== "undefined"){
		methane = savegame.methane;
		methane.dependents = [hydrogen, carbon];
	}
	if (typeof savegame.ammonia !== "undefined"){
		ammonia = savegame.ammonia;
		ammonia.dependents = [hydrogen, nitrogen];
	}
	if (typeof savegame.water !== "undefined"){
		water = savegame.water;
		water.dependents = [hydrogen, oxygen];
	}
	if (typeof savegame.carbondioxide !== "undefined"){
		carbondioxide = savegame.carbondioxide;
		carbondioxide.dependents = [carbon, oxygen];
	}
	if (typeof savegame.phosphate !== "undefined"){
		phosphate = savegame.phosphate;
		phosphate.dependents = [hydrogen,oxygen,phosphorus];
	}
	if (typeof savegame.sugar !== "undefined"){
		sugar = savegame.sugar;
		sugar.dependents = [hydrogen, carbon, oxygen];
	}
	
	//Load microscopic
	if (typeof savegame.protein !== "undefined"){
		protein = savegame.protein;
		protein.dependents = [methane, ammonia, carbondioxide];
	}
	if (typeof savegame.dna !== "undefined"){
		dna = savegame.dna;
		dna.dependents = [sugar, carbondioxide, water];
	}
	if (typeof savegame.virus !== "undefined"){
		virus = savegame.virus;
		virus.dependents = [sugar, carbondioxide, water];
	}
	if (typeof savegame.bacteria !== "undefined"){
		bacteria = savegame.bacteria;
		bacteria.dependents = [sugar, carbondioxide, water];
	}
	if (typeof savegame.silt !== "undefined"){
		silt = savegame.silt;
		silt.dependents = [methane, water, carbondioxide, phosphate];
	}
	if (typeof savegame.cell !== "undefined"){
		cell = savegame.cell;
		cell.dependents = [water, carbondioxide, sugar];
	}
	if (typeof savegame.seed !== "undefined"){
		seed = savegame.seed;
		seed.dependents = [water, carbondioxide, sugar];
	}
	if (typeof savegame.droplet !== "undefined"){
		droplet = savegame.droplet;
		droplet.dependents = [water];
	}
	
	if (typeof savegame.allUpgrades !== "undefined") allUpgrades = savegame.allUpgrades;
	if (typeof savegame.boughtUpgrades !== "undefined") boughtUpgrades = savegame.boughtUpgrades;
	
	loadDocument();
};

//Delete game function
function deleteGame(){
	localStorage.removeItem('saveIncGame');

	//Reset materials
	electrons.count = 0;
	protons.count = 0;
	photons.count = 0;
	neutrons.count = 0;
	hydrogen.count = 0;
	helium.count = 0;
	carbon.count = 0;
	nitrogen.count = 0;
	oxygen.count = 0;
	phosphorus.count = 0;
	methane.count = 0;
	ammonia.count = 0;
	water.count = 0;
	carbondioxide.count = 0;
	phosphate.count = 0;
	sugar.count = 0;
	protein.count = 0;
	dna.count = 0;
	virus.count = 0;
	bacteria.count = 0;
	silt.count = 0;
	cell.count = 0;
	seed.count = 0;
	droplet.count = 0;
	
	//Reset generators
	electrons.generators = 0;
	protons.generators = 0;
	photons.generators = 0;
	neutrons.generators = 0;
	hydrogen.generators = 0;
	helium.generators = 0;
	carbon.generators = 0;
	nitrogen.generators = 0;
	oxygen.generators = 0;
	phosphorus.generators = 0;
	methane.generators = 0;
	ammonia.generators = 0;
	water.generators = 0;
	carbondioxide.generators = 0;
	phosphate.generators = 0;
	sugar.generators = 0;
	protein.generators = 0;
	dna.generators = 0;
	virus.generators = 0;
	bacteria.generators = 0;
	silt.generators = 0;
	cell.generators = 0;
	seed.generators = 0;
	droplet.generators = 0;
	
	//Reset rates
	electrons.currentRate = 0;
	protons.currentRate = 0;
	photons.currentRate = 0;
	neutrons.currentRate = 0;
	hydrogen.currentRate = 0;
	helium.currentRate = 0;
	carbon.currentRate = 0;
	nitrogen.currentRate = 0;
	oxygen.currentRate = 0;
	phosphorus.currentRate = 0;
	methane.currentRate = 0;
	ammonia.currentRate = 0;
	water.currentRate = 0;
	carbondioxide.currentRate = 0;
	phosphate.currentRate = 0;
	sugar.currentRate = 0;
	protein.currentRate = 0;
	dna.currentRate = 0;
	virus.currentRate = 0;
	bacteria.currentRate = 0;
	silt.currentRate = 0;
	cell.currentRate = 0;
	seed.currentRate = 0;
	droplet.currentRate = 0;
	
	electrons.baseRate = 1;
	protons.baseRate = 1;
	photons.baseRate = 1;
	neutrons.baseRate = 1;
	hydrogen.baseRate = 1;
	helium.baseRate = 1;
	carbon.baseRate = 1;
	nitrogen.baseRate = 1;
	oxygen.baseRate = 1;
	phosphorus.baseRate = 1;
	methane.baseRate = 1;
	ammonia.baseRate = 1;
	water.baseRate = 1;
	carbondioxide.baseRate = 1;
	phosphate.baseRate = 1;
	sugar.baseRate = 1;
	protein.baseRate = 1;
	dna.baseRate = 1;
	virus.baseRate = 1;
	bacteria.baseRate = 1;
	silt.baseRate = 1;
	cell.baseRate = 1;
	seed.baseRate = 1;
	droplet.baseRate = 1;
	
	//Reset upgrades
	allUpgrades["twinElectrons"]="none";
	allUpgrades["twinProtons"]="none";
	allUpgrades["twinPhotons"]="none";
	allUpgrades["twinNeutrons"]="none";
	allUpgrades["betterElectrons"]="none";
	allUpgrades["betterProtons"]="none";
	allUpgrades["betterPhotons"]="none";
	allUpgrades["betterNeutrons"]="none";
	
	boughtUpgrades = new Array();
	
	window.location.reload(true);
	
	loadDocument();
};

//Load all values in the main window
function loadDocument(){
	//Load materials
	document.getElementById('electrons').innerHTML = numberFormatter(electrons.count,2);
	document.getElementById('protons').innerHTML = numberFormatter(protons.count,2);
	document.getElementById('photons').innerHTML = numberFormatter(photons.count,2);
	document.getElementById('neutrons').innerHTML = numberFormatter(neutrons.count,2);
	document.getElementById('hydrogen').innerHTML = numberFormatter(hydrogen.count,2);
	document.getElementById('helium').innerHTML = numberFormatter(helium.count,2);
	document.getElementById('carbon').innerHTML = numberFormatter(carbon.count,2);
	document.getElementById('nitrogen').innerHTML = numberFormatter(nitrogen.count,2);
	document.getElementById('oxygen').innerHTML = numberFormatter(oxygen.count,2);
	document.getElementById('phosphorus').innerHTML = numberFormatter(phosphorus.count,2);
	document.getElementById('methane').innerHTML = numberFormatter(methane.count,2);
	document.getElementById('ammonia').innerHTML = numberFormatter(ammonia.count,2);
	document.getElementById('water').innerHTML = numberFormatter(water.count,2);
	document.getElementById('carbondioxide').innerHTML = numberFormatter(carbondioxide.count,2);
	document.getElementById('phosphate').innerHTML = numberFormatter(phosphate.count,2);
	document.getElementById('sugar').innerHTML = numberFormatter(sugar.count,2);
	document.getElementById('protein').innerHTML = numberFormatter(protein.count,2);
	document.getElementById('dna').innerHTML = numberFormatter(dna.count,2);
	document.getElementById('virus').innerHTML = numberFormatter(virus.count,2);
	document.getElementById('bacteria').innerHTML = numberFormatter(bacteria.count,2);
	document.getElementById('silt').innerHTML = numberFormatter(silt.count,2);
	document.getElementById('cell').innerHTML = numberFormatter(cell.count,2);
	document.getElementById('seed').innerHTML = numberFormatter(seed.count,2);
	document.getElementById('droplet').innerHTML = numberFormatter(droplet.count,2);
	
	//Load generators
	document.getElementById('electronGenerators').innerHTML = electrons.generators;
	document.getElementById('protonGenerators').innerHTML = protons.generators;
	document.getElementById('photonGenerators').innerHTML = photons.generators;
	document.getElementById('neutronGenerators').innerHTML = neutrons.generators;
	document.getElementById('hydrogenGenerators').innerHTML = hydrogen.generators;
	document.getElementById('heliumGenerators').innerHTML = helium.generators;
	document.getElementById('carbonGenerators').innerHTML = carbon.generators;
	document.getElementById('nitrogenGenerators').innerHTML = nitrogen.generators;
	document.getElementById('oxygenGenerators').innerHTML = oxygen.generators;
	document.getElementById('phosphorusGenerators').innerHTML = phosphorus.generators;
	document.getElementById('methaneGenerators').innerHTML = methane.generators;
	document.getElementById('ammoniaGenerators').innerHTML = ammonia.generators;
	document.getElementById('waterGenerators').innerHTML = water.generators;
	document.getElementById('carbondioxideGenerators').innerHTML = carbondioxide.generators;
	document.getElementById('phosphateGenerators').innerHTML = phosphate.generators;
	document.getElementById('sugarGenerators').innerHTML = sugar.generators;
	document.getElementById('proteinGenerators').innerHTML = protein.generators;
	document.getElementById('dnaGenerators').innerHTML = dna.generators;
	document.getElementById('virusGenerators').innerHTML = virus.generators;
	document.getElementById('bacteriaGenerators').innerHTML = bacteria.generators;
	document.getElementById('siltGenerators').innerHTML = silt.generators;
	document.getElementById('cellGenerators').innerHTML = cell.generators;
	document.getElementById('seedGenerators').innerHTML = seed.generators;
	document.getElementById('dropletGenerators').innerHTML = droplet.generators;
	
	//Load generator costs
	multiBuy = checkMultibuy("Elementary");
	document.getElementById('electronGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(electrons.generators,electrons.genCost,electrons.genMulti,multiBuy),2)+")";
	document.getElementById('protonGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(protons.generators,protons.genCost,protons.genMulti,multiBuy),2)+")";
	document.getElementById('photonGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(photons.generators,photons.genCost,photons.genMulti,multiBuy),2)+")";
	document.getElementById('neutronGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(neutrons.generators,neutrons.genCost,neutrons.genMulti,multiBuy),2)+")";
	multiBuy = checkMultibuy("Element");
	document.getElementById('hydrogenGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(hydrogen.generators,hydrogen.genCost,hydrogen.genMulti,multiBuy),2)+")";
	document.getElementById('heliumGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(helium.generators,helium.genCost,helium.genMulti,multiBuy),2)+")";
	document.getElementById('carbonGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(carbon.generators,carbon.genCost,carbon.genMulti,multiBuy),2)+")";
	document.getElementById('nitrogenGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(nitrogen.generators,nitrogen.genCost,nitrogen.genMulti,multiBuy),2)+")";
	document.getElementById('oxygenGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(oxygen.generators,oxygen.genCost,oxygen.genMulti,multiBuy),2)+")";
	document.getElementById('phosphorusGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(phosphorus.generators,phosphorus.genCost,phosphorus.genMulti,multiBuy),2)+")";
	multiBuy = checkMultibuy("Compound");
	document.getElementById('methaneGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(methane.generators,methane.genCost,methane.genMulti,multiBuy),2)+")";
	document.getElementById('ammoniaGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(ammonia.generators,ammonia.genCost,ammonia.genMulti,multiBuy),2)+")";
	document.getElementById('waterGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(water.generators,water.genCost,water.genMulti,multiBuy),2)+")";
	document.getElementById('carbondioxideGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(phosphorus.generators,phosphorus.genCost,phosphorus.genMulti,multiBuy),2)+")";
	document.getElementById('phosphateGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(phosphate.generators,phosphate.genCost,phosphate.genMulti,multiBuy),2)+")";
	document.getElementById('sugarGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(sugar.generators,sugar.genCost,sugar.genMulti,multiBuy),2)+")";
	multiBuy = checkMultibuy("Microscopic");
	document.getElementById('proteinGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(protein.generators,protein.genCost,protein.genMulti,multiBuy),2)+")";
	document.getElementById('dnaGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(dna.generators,dna.genCost,dna.genMulti,multiBuy),2)+")";
	document.getElementById('virusGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(virus.generators,virus.genCost,virus.genMulti,multiBuy),2)+")";
	document.getElementById('bacteriaGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(bacteria.generators,bacteria.genCost,bacteria.genMulti,multiBuy),2)+")";
	document.getElementById('siltGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(silt.generators,silt.genCost,silt.genMulti,multiBuy),2)+")";
	document.getElementById('cellGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(cell.generators,cell.genCost,cell.genMulti,multiBuy),2)+")";
	document.getElementById('seedGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(seed.generators,seed.genCost,seed.genMulti,multiBuy),2)+")";
	document.getElementById('dropletGeneratorCostB').innerHTML = "("+numberFormatter(calcGeneratorCost(droplet.generators,droplet.genCost,droplet.genMulti,multiBuy),2)+")";
	
	//Load generator costs
	document.getElementById('electronGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(electrons.generators,electrons.genCost,electrons.genMulti,1),2)+")";
	document.getElementById('protonGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(protons.generators,protons.genCost,protons.genMulti,1),2)+")";
	document.getElementById('photonGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(photons.generators,photons.genCost,photons.genMulti,1),2)+")";
	document.getElementById('neutronGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(neutrons.generators,neutrons.genCost,neutrons.genMulti,1),2)+")";
	document.getElementById('hydrogenGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(hydrogen.generators,hydrogen.genCost,hydrogen.genMulti,1),2)+")";
	document.getElementById('heliumGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(helium.generators,helium.genCost,helium.genMulti,1),2)+")";
	document.getElementById('carbonGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(carbon.generators,carbon.genCost,carbon.genMulti,1),2)+")";
	document.getElementById('nitrogenGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(nitrogen.generators,nitrogen.genCost,nitrogen.genMulti,1),2)+")";
	document.getElementById('oxygenGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(oxygen.generators,oxygen.genCost,oxygen.genMulti,1),2)+")";
	document.getElementById('phosphorusGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(phosphorus.generators,phosphorus.genCost,phosphorus.genMulti,1),2)+")";
	document.getElementById('methaneGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(methane.generators,methane.genCost,methane.genMulti,1),2)+")";
	document.getElementById('ammoniaGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(ammonia.generators,ammonia.genCost,ammonia.genMulti,1),2)+")";
	document.getElementById('waterGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(water.generators,water.genCost,water.genMulti,1),2)+")";
	document.getElementById('carbondioxideGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(phosphorus.generators,phosphorus.genCost,phosphorus.genMulti,1),2)+")";
	document.getElementById('phosphateGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(phosphate.generators,phosphate.genCost,phosphate.genMulti,1),2)+")";
	document.getElementById('sugarGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(sugar.generators,sugar.genCost,sugar.genMulti,1),2)+")";
	document.getElementById('proteinGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(protein.generators,protein.genCost,protein.genMulti,1),2)+")";
	document.getElementById('dnaGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(dna.generators,dna.genCost,dna.genMulti,1),2)+")";
	document.getElementById('virusGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(virus.generators,virus.genCost,virus.genMulti,1),2)+")";
	document.getElementById('bacteriaGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(bacteria.generators,bacteria.genCost,bacteria.genMulti,1),2)+")";
	document.getElementById('siltGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(silt.generators,silt.genCost,silt.genMulti,1),2)+")";
	document.getElementById('cellGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(cell.generators,cell.genCost,cell.genMulti,1),2)+")";
	document.getElementById('seedGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(seed.generators,seed.genCost,seed.genMulti,1),2)+")";
	document.getElementById('dropletGeneratorCostS').innerHTML = "("+numberFormatter(calcGeneratorCost(droplet.generators,droplet.genCost,droplet.genMulti,1),2)+")";
	
	//Load rates
	document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
	document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
	document.getElementById('photonRate').innerHTML = "("+numberFormatter(photons.currentRate,2)+"/s)";
	document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
	document.getElementById('hydrogenRate').innerHTML = "("+numberFormatter(hydrogen.currentRate,2)+"/s)";
	document.getElementById('heliumRate').innerHTML = "("+numberFormatter(helium.currentRate,2)+"/s)";
	document.getElementById('carbonRate').innerHTML = "("+numberFormatter(carbon.currentRate,2)+"/s)";
	document.getElementById('nitrogenRate').innerHTML = "("+numberFormatter(nitrogen.currentRate,2)+"/s)";
	document.getElementById('oxygenRate').innerHTML = "("+numberFormatter(oxygen.currentRate,2)+"/s)";
	document.getElementById('phosphorusRate').innerHTML = "("+numberFormatter(phosphorus.currentRate,2)+"/s)";
	document.getElementById('methaneRate').innerHTML = "("+numberFormatter(methane.currentRate,2)+"/s)";
	document.getElementById('ammoniaRate').innerHTML = "("+numberFormatter(ammonia.currentRate,2)+"/s)";
	document.getElementById('waterRate').innerHTML = "("+numberFormatter(water.currentRate,2)+"/s)";
	document.getElementById('carbondioxideRate').innerHTML = "("+numberFormatter(carbondioxide.currentRate,2)+"/s)";
	document.getElementById('phosphateRate').innerHTML = "("+numberFormatter(phosphate.currentRate,2)+"/s)";
	document.getElementById('sugarRate').innerHTML = "("+numberFormatter(sugar.currentRate,2)+"/s)";
	document.getElementById('proteinRate').innerHTML = "("+numberFormatter(protein.currentRate,2)+"/s)";
	document.getElementById('dnaRate').innerHTML = "("+numberFormatter(dna.currentRate,2)+"/s)";
	document.getElementById('virusRate').innerHTML = "("+numberFormatter(virus.currentRate,2)+"/s)";
	document.getElementById('bacteriaRate').innerHTML = "("+numberFormatter(bacteria.currentRate,2)+"/s)";
	document.getElementById('siltRate').innerHTML = "("+numberFormatter(silt.currentRate,2)+"/s)";
	document.getElementById('cellRate').innerHTML = "("+numberFormatter(cell.currentRate,2)+"/s)";
	document.getElementById('seedRate').innerHTML = "("+numberFormatter(seed.currentRate,2)+"/s)";
	document.getElementById('dropletRate').innerHTML = "("+numberFormatter(droplet.currentRate,2)+"/s)";
};

//Switch between buy and sell
function switchBuySell(buysell){
	var buttons, buyMulti, sellMulti, i;
	
	if(buysell == "buy"){
		//Get all buy generator buttons
		buttons = document.getElementsByClassName("buyButton");
		for (i=0; i<buttons.length; i++){
		//Change generator display to block
		buttons[i] = buttons[i].style.display = "inline-block";
		}
		buyMulti = document.getElementsByClassName("buyMulti");
		for (i=0; i<buyMulti.length; i++){
		//Change radio button display to normal
		buyMulti[i] = buyMulti[i].style.display = "inline-block";
		}
		
		//Get all sell generator buttons
		buttons = document.getElementsByClassName("sellButton");
		for (i=0; i<buttons.length; i++){
		//Replace generator display with none
		buttons[i] = buttons[i].style.display = "none";
		}
		sellMulti = document.getElementsByClassName("sellMulti");
		for (i=0; i<sellMulti.length; i++){
		//Change radio button display to hidden
		sellMulti[i] = sellMulti[i].style.display = "none";
		}
	}
	else if (buysell == "sell"){
		//Get all sell generator buttons
		buttons = document.getElementsByClassName("sellButton");
		for (i=0; i<buttons.length; i++){
		//Change generator display to block
		buttons[i] = buttons[i].style.display = "inline-block";
		}
		sellMulti = document.getElementsByClassName("sellMulti");
		for (i=0; i<sellMulti.length; i++){
		//Change radio button display to normal
		sellMulti[i] = sellMulti[i].style.display = "inline-block";
		}
		
		//Get all buy generator buttons
		buttons = document.getElementsByClassName("buyButton");
		for (i=0; i<buttons.length; i++){
		//Replace generator display with none
		buttons[i] = buttons[i].style.display = "none";
		}
		buyMulti = document.getElementsByClassName("buyMulti");
		for (i=0; i<buyMulti.length; i++){
		//Change radio button display to normal
		buyMulti[i] = buyMulti[i].style.display = "none";
		}
	}
};

/*-----------
**Calculators
-----------*/
//Calculate cost of new generator
function calcGeneratorCost(genName, genStartCost, genMult, buyMulti){
	var generatorCost=0;
	
	while(buyMulti>0){
		generatorCost += Math.floor(genStartCost * Math.pow(genMult,genName));
		buyMulti--;
		genName++;
	}

	return generatorCost;
};

/*----------
**Formatters
----------*/
//Format numbers with SI suffix
function numberFormatter(num, digits){
	var si = [
		{ value: 1E30, symbol: " nonillion"},
		{ value: 1E27, symbol: " octillion"},
		{ value: 1E24, symbol: " septillion"},
		{ value: 1E21, symbol: " sextillion"},
		{ value: 1E18, symbol: " quintillion"},
		{ value: 1E15, symbol: " quadrillion"},
		{ value: 1E12, symbol: " trillion"},
		{ value: 1E9, symbol: " billion"},
		{ value: 1E6, symbol: " million"},
		{ value: 1E3, symbol: " thousand"}
	], i;
	for (i=0; i<si.length;i++){
		if (num >= si[i].value){
			return (num/si[i].value).toFixed(digits) + si[i].symbol;
		}
	}
	return num.toFixed(0);
};

//Change tab color if rate on that tab is below 0
function losingMats(tabName){
	document.getElementById(tabName).setAttribute("class","losing");
};

//Show details for the material being hovered
function showInfo(mat,tab){
	var spanInfo = tab + "Info";
	var spanUsed = tab + "Used";
	var spanUp = tab + "Up";
	var matAm = mat.count; //Amount of current material
	var matGen = mat.generators; //Generators of current material
	var matBaseRate = mat.baseRate; //Base generation rate of current material
	var matCurRate = mat.currentRate; //Current generation rate of current material
	
	//Display all information for this material
	document.getElementById(spanInfo).innerHTML = mat.name + ": " + numberFormatter(matAm, 2) + 
	"</br >Generators: " + matGen + "</br >Current Production: " + numberFormatter(matCurRate,2) + "/s</br >Base Generator Production: " + 
	numberFormatter(matBaseRate,2) + "/s</br ></br ><q>" + stupidQuote(mat.name) + "</q>";
	
	//Display used by information for this material
	document.getElementById(spanUsed).innerHTML = "Used by: " + usedBy(mat) + "</br >Uses: "+usesMats(mat) +"</br >Unlocked by: "+unlockedBy(mat);
	
	//Display purchased upgrades for this material
	document.getElementById(spanUp).innerHTML = getBoughtUpgrades(mat.name);
};

function showUpgradeInfo(upgrade,tab){
	var spanInfo = tab + "Info";
	
	//Display information for upgrade
	document.getElementById(spanInfo).innerHTML = upgradeDetails(upgrade);
}

//Function to find what materials use this material
function usedBy(mat){
	//Elementary
	if(mat.name=="Electrons")
		return "neutrons, hydrogen, helium, carbon, nitrogen, oxygen, phosphorus";
	if(mat.name=="Protons")
		return "neutrons, hydrogen, helium, carbon, nitrogen, oxygen, phosphorus";
	if(mat.name=="Photons")
		return "nothing (yet)";
	if(mat.name=="Neutrons")
		return "helium, carbon, nitrogen, oxygen, phosphorus";
	
	//Elements
	if(mat.name=="Hydrogen")
		return "methane, ammonia, water, phosphate, sugar";
	if(mat.name=="Helium")
		return "nothng (yet)";
	if(mat.name=="Carbon")
		return "methane, carbon dioxide, sugar";
	if(mat.name=="Nitrogen")
		return "ammonia";
	if(mat.name=="Oxygen")
		return "water, carbon dioxide, phosphate, sugar";
	if(mat.name=="Phosphorus")
		return "phosphate";
	
	//Compounds
	if(mat.name=="Methane")
		return "protein, silt";
	if(mat.name=="Ammonia")
		return "protein";
	if(mat.name=="Water")
		return "dna, virus, bacteria, silt, cell, seed, droplet";
	if(mat.name=="Carbon Dioxide")
		return "protein, dna, virus, bacteria, silt, cell, seed";
	if(mat.name=="Phosphate")
		return "silt";
	if(mat.name=="Sugar")
		return "dna, virus, bacteria, cell, seed";
	
	//Microscopic
	if(mat.name=="Protein")
		return "nothing (yet)";
	if(mat.name=="DNA")
		return "nothing (yet)";
	if(mat.name=="Virus")
		return "nothing (yet)";
	if(mat.name=="Bacteria")
		return "nothing (yet)";
	if(mat.name=="Silt")
		return "nothing (yet)";
	if(mat.name=="Cell")
		return "nothing (yet)";
	if(mat.name=="Seed")
		return "nothing (yet)";
	if(mat.name=="Droplet")
		return "nothing (yet)";
	
	return "nothing (yet)";
};

//Function to find what materials this material uses
function usesMats(mat){
	//Elementary
	if(mat.name=="Electrons")
		return "nothing";
	if(mat.name=="Protons")
		return "nothing";
	if(mat.name=="Photons")
		return "nothing";
	if(mat.name=="Neutrons")
		return "1 electron (" + numberFormatter(electrons.currentRate,2) + "/s), 1 proton (" + numberFormatter(protons.currentRate,2) + "/s)";
	
	//Elements
	if(mat.name=="Hydrogen")
		return "1 electron (" + numberFormatter(electrons.currentRate,2) + "/s), 1 proton (" + numberFormatter(protons.currentRate,2) + "/s)";
	if(mat.name=="Helium")
		return "2 electrons (" + numberFormatter(electrons.currentRate,2) + "/s), 2 protons (" + numberFormatter(protons.currentRate,2) + "/s), 2 neutrons (" + numberFormatter(neutrons.currentRate,2) + "/s)";
	if(mat.name=="Carbon")
		return "6 electrons (" + numberFormatter(electrons.currentRate,2) + "/s), 6 protons (" + numberFormatter(protons.currentRate,2) + "/s), 6 neutrons (" + numberFormatter(neutrons.currentRate,2) + "/s)";
	if(mat.name=="Nitrogen")
		return "7 electrons (" + numberFormatter(electrons.currentRate,2) + "/s), 7 protons (" + numberFormatter(protons.currentRate,2) + "/s), 7 neutrons (" + numberFormatter(neutrons.currentRate,2) + "/s)";
	if(mat.name=="Oxygen")
		return "8 electrons (" + numberFormatter(electrons.currentRate,2) + "/s), 8 protons (" + numberFormatter(protons.currentRate,2) + "/s), 8 neutrons (" + numberFormatter(neutrons.currentRate,2) + "/s)";
	if(mat.name=="Phosphorus")
		return "15 electrons (" + numberFormatter(electrons.currentRate,2) + "/s), 15 protons (" + numberFormatter(protons.currentRate,2) + "/s), 16 neutrons (" + numberFormatter(neutrons.currentRate,2) + "/s)";
	
	//Compounds
	if(mat.name=="Methane")
		return "4 hydrogen (" + numberFormatter(hydrogen.currentRate,2) + "/s), 1 carbon (" + numberFormatter(carbon.currentRate,2) + "/s)";
	if(mat.name=="Ammonia")
		return "3 hydrogen (" + numberFormatter(hydrogen.currentRate,2) + "/s), 1 nitrogen (" + numberFormatter(nitrogen.currentRate,2) + "/s)";
	if(mat.name=="Water")
		return "2 hydrogen (" + numberFormatter(hydrogen.currentRate,2) + "/s), 1 oxygen (" + numberFormatter(oxygen.currentRate,2) + "/s)";
	if(mat.name=="Carbon Dioxide")
		return "1 carbon (" + numberFormatter(carbon.currentRate,2) + "/s), 2 oxygen (" + numberFormatter(oxygen.currentRate,2) + "/s)";
	if(mat.name=="Phosphate")
		return "3 hydrogen (" + numberFormatter(hydrogen.currentRate,2) + "/s), 4 oxygen (" + numberFormatter(oxygen.currentRate,2) + "/s), 1 phosphorus (" + numberFormatter(phosphorus.currentRate,2) + "/s)";
	if(mat.name=="Sugar")
		return "12 hydrogen (" + numberFormatter(hydrogen.currentRate,2) + "/s), 6 carbon (" + numberFormatter(carbon.currentRate,2) + "/s), 6 oxygen (" + numberFormatter(oxygen.currentRate,2) + "/s)";

	//Microscopic
	if(mat.name=="Protein")
		return " 1 methane (" + numberFormatter(methane.currentRate,2) + "/s), 1 ammonia (" + numberFormatter(ammonia.currentRate,2) + "/s), 1 carbon dioxide (" + numberFormatter(carbondioxide.currentRate,2) + "/s)";
	if(mat.name=="DNA")
		return "100 water (" + numberFormatter(water.currentRate,2) + "/s), 100 carbon dioxide (" + numberFormatter(carbondioxide.currentRate,2) + "/s), 40 sugar (" + numberFormatter(sugar.currentRate,2) + "/s)";
	if(mat.name=="Virus")
		return "500 water (" + numberFormatter(water.currentRate,2) + "/s), 200 carbon dioxide (" + numberFormatter(carbondioxide.currentRate,2) + "/s), 100 sugar (" + numberFormatter(sugar.currentRate,2) + "/s)";
	if(mat.name=="Bacteria")
		return "1000 water (" + numberFormatter(water.currentRate,2) + "/s), 500 carbon dioxide (" + numberFormatter(carbondioxide.currentRate,2) + "/s), 200 sugar (" + numberFormatter(sugar.currentRate,2) + "/s)";
	if(mat.name=="Silt")
		return "1500 methane (" + numberFormatter(methane.currentRate,2) + "/s), 3000 water (" + numberFormatter(water.currentRate,2) + "/s), 1200 carbon dioxide (" + numberFormatter(carbondioxide.currentRate,2) + "/s), 500 phosphate (" + numberFormatter(phosphate.currentRate,2) + "/s)";
	if(mat.name=="Cell")
		return "5000 water (" + numberFormatter(water.currentRate,2) + "/s), 1000 carbon dioxide (" + numberFormatter(carbondioxide.currentRate,2) + "/s), 500 sugar (" + numberFormatter(sugar.currentRate,2) + "/s)";
	if(mat.name=="Seed")
		return "20 thousand water (" + numberFormatter(water.currentRate,2) + "/s), 5000 carbon dioxide (" + numberFormatter(carbondioxide.currentRate,2) + "/s), 1000 sugar (" + numberFormatter(sugar.currentRate,2) + "/s)";
	if(mat.name=="Droplet")
		return "1 billion water (" + numberFormatter(water.currentRate,2) + "/s)";
	return "nothing (yet)";
}

function unlockedBy(mat){
	//Elementary
	if(mat.name=="Electrons")
		return "nothing";
	if(mat.name=="Protons")
		return "nothing";
	if(mat.name=="Photons")
		return "nothing";
	if(mat.name=="Neutrons")
		return "1 thousand electrons, 1 thousand protons";
		
	//Elements	
	if(mat.name=="Hydrogen")
		return "10 thousand electrons, 10 thousand protons";
	if(mat.name=="Helium")
		return "100 thousand electrons, 100 thousand protons, 50 thousand neutrons";
	if(mat.name=="Carbon")
		return "1 million electrons, 1 million protons, 500 thousand neutrons";
	if(mat.name=="Nitrogen")
		return "10 million electrons, 10 million protons, 5 million neutrons";
	if(mat.name=="Oxygen")
		return "100 million electrons, 100 million protons, 50 million neutrons";
	if(mat.name=="Phosphorus")
		return "1 billion electrons, 1 billion protons, 500 million neutrons";
	
	//Compounds
	if(mat.name=="Methane")
		return "4 thousand hydrogen, 1 thousand carbon";
	if(mat.name=="Ammonia")
		return "30 thousand hydrogen, 10 thousand nitrogen";
	if(mat.name=="Water")
		return "200 thousand hydrogen, 100 thousand oxygen";
	if(mat.name=="Carbon Dioxide")
		return "1 million carbon, 2 million oxygen";
	if(mat.name=="Phosphate")
		return "30 million hydrogen, 40 million oxygen, 10 million phosphorus";
	if(mat.name=="Sugar")
		return "1.2 billion hydrogen, 600 million carbon, 600 million oxygen";
	
	//Microscopic
	if(mat.name=="Protein")
		return "1 thousand methane, 1 thousand ammonia, 1 thousand carbon dioxide";
	if(mat.name=="DNA")
		return "10 thousand water, 10 thousand carbon dioxide, 4 thousand sugar";
	if(mat.name=="Virus")
		return "50 thousand water, 20 thousand carbon dioxide, 10 thousand sugar";
	if(mat.name=="Bacteria")
		return "100 thousand water, 50 thousand carbon dioxide, 20 thousand sugar";
	if(mat.name=="Silt")
		return "1.5 million methane, 3 million water, 1.2 million carbon dioxide, 500 thousand phosphate";
	if(mat.name=="Cell")
		return "50 million water, 2 million carbon dioxide, 500 thousand sugar";
	if(mat.name=="Seed")
		return "200 million water, 10 million carbon dioxide, 1 million sugar";
	if(mat.name=="Droplet")
		return "1 billion water";
	return "nothing (yet)";
}

/*------
**Timers
------*/
//Declare generator timers, set to trigger every 1 second
window.setInterval(function(){
	generatorClick(electrons);
	generatorClick(protons);
	generatorClick(photons);
	generatorClick(neutrons);
	generatorClick(hydrogen);
	generatorClick(helium);
	generatorClick(carbon);
	generatorClick(nitrogen);
	generatorClick(oxygen);
	generatorClick(phosphorus);
	generatorClick(methane);
	generatorClick(ammonia);
	generatorClick(water);
	generatorClick(carbondioxide);
	generatorClick(phosphate);
	generatorClick(sugar);
	generatorClick(protein);
	generatorClick(dna);
	generatorClick(virus);
	generatorClick(bacteria);
	generatorClick(silt);
	generatorClick(cell);
	generatorClick(seed);
	generatorClick(droplet);
}, 1000);

//Declare checking function, set to trigger every second
window.setInterval(function(){
	checkTabs();
	checkClickables();
	checkGenerators();
	checkUpgrades();
}, 1000);

//Declare autosave timer
window.setInterval(function(){saveGame();}, 60000);

/*---
**CSS
---*/
function openTab(evt, tabName){
	var i, tabcontent, tablinks;
	
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i=0; i<tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
	
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i=0; i<tablinks.length; i++){
		document.getElementById(tablinks[i].id).setAttribute("class","tablinks");
	}
	
	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.setAttribute("class","tablinks active");
};

/*----
Extras
----*/

function stupidQuote(mat){
	//Elementary
	if(mat=="Electrons")
		return "This should be one of your <i>electives</i>";
	if(mat=="Protons")
		return "I'm very <i>pro</i> protons";
	if(mat=="Photons")
		return "Better take a <i>photo</i>, it'll last longer";
	if(mat=="Neutrons")
		return "The charge has been <i>neutralized</i>";
	
	//Element
	if(mat=="Hydrogen")
		return "Hi Drogen! How are you!";
	if(mat=="Helium")
		return "Imagine this text in a squeeky voice";
	if(mat=="Carbon")
		return "The building blocks of building blocks";
	if(mat=="Nitrogen")
		return "You need this to breathe";
	if(mat=="Oxygen")
		return "Killing you slowly by setting your lungs on fire";
	if(mat=="Phosphorus")
		return "You don't wanna know where the P comes from";
	
	//Compound
	if(mat=="Methane")
		return "It wasn't me";
	if(mat=="Ammonia")
		return "Mr. Clean";
	if(mat=="Water")
		return "Also known as liquid ice";
	if(mat=="Carbon Dioxide")
		return "A trees favourite food";
	if(mat=="Phosphate")
		return "It must be <i>phate</i> that brought you here";
	if(mat=="Sugar")
		return "Aww, honey honey";
	
	//Microscopic
	if(mat=="Protein")
		return "A spoonful of protein helps the gains go up";
	if(mat=="DNA")
		return "Double helix all the way across the sky";
	if(mat=="Virus")
		return "There is another organism on this planet that follows the same pattern. Do you know what it is? Humans";
	if(mat=="Bacteria")
		return "You have more of these on and in you than, well, you";
	if(mat=="Silt")
		return "The very finest dirt";
	if(mat=="Cell")
		return "This isn't even my final form";
	if(mat=="Seed")
		return "*hands you a rock* Pretend it's a seed"
	if(mat=="Droplet")
		return "Rain drops keep falling on my head";
	
	return "I have no fancy quote for you";
}

function cheat(){
	electrons.count = electrons.count + 5e24;
	protons.count = protons.count + 5e24;
	photons.count = photons.count + 5e24;
	neutrons.count = neutrons.count + 5e24;
	
	hydrogen.count = hydrogen.count + 5e24;
	helium.count = helium.count + 5e24;
	carbon.count = carbon.count + 5e24;
	nitrogen.count = nitrogen.count + 5e24;
	oxygen.count = oxygen.count + 5e24;
	phosphorus.count = phosphorus.count + 5e24;
	
	methane.count = methane.count + 5e24;
	ammonia.count = ammonia.count + 5e24;
	water.count = water.count + 5e24;
	carbondioxide.count = carbondioxide.count + 5e24;
	phosphate.count = phosphate.count + 5e24;
	sugar.count = sugar.count + 5e24;
}