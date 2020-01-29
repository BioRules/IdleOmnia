/* This is the generators file. Anything that generates a material is stored here */

function checkGenerators(){
	if(neutrons.count>=20)
		document.getElementById("buyNeutronGen").setAttribute("class","buyButton");
	if(hydrogen.count>=15)
		document.getElementById("buyHydrogenGen").setAttribute("class","buyButton");
	if(helium.count>=10)
		document.getElementById("buyHeliumGen").setAttribute("class","buyButton");
	if(carbon.count>=10)
		document.getElementById("buyCarbonGen").setAttribute("class","buyButton");
	if(nitrogen.count>=10)
		document.getElementById("buyNitrogenGen").setAttribute("class","buyButton");
	if(oxygen.count>=10)
		document.getElementById("buyOxygenGen").setAttribute("class","buyButton");
	if(phosphorus.count>=10)
		document.getElementById("buyPhosphorusGen").setAttribute("class","buyButton");;
	
	if(methane.count>=20)
		document.getElementById("buyMethaneGen").setAttribute("class","buyButton");
	if(ammonia.count>=20)
		document.getElementById("buyAmmoniaGen").setAttribute("class","buyButton");
	if(water.count>=20)
		document.getElementById("buyWaterGen").setAttribute("class","buyButton");
	if(carbondioxide.count>=20)
		document.getElementById("buyCarbonDioxideGen").setAttribute("class","buyButton");
	if(phosphate.count>=20)
		document.getElementById("buyPhosphateGen").setAttribute("class","buyButton");
	if(sugar.count>=20)
		document.getElementById("buySugarGen").setAttribute("class","buyButton");
	
	if(protein.count>=20)
		document.getElementById("buyProteinGen").setAttribute("class","buyButton");
	if(dna.count>=20)
		document.getElementById("buyDnaGen").setAttribute("class","buyButton");
	if(virus.count>=15)
		document.getElementById("buyVirusGen").setAttribute("class","buyButton");
	if(bacteria.count>=15)
		document.getElementById("buyBacteriaGen").setAttribute("class","buyButton");
	if(silt.count>=10)
		document.getElementById("buySiltGen").setAttribute("class","buyButton");
	if(cell.count>=10)
		document.getElementById("buyCellGen").setAttribute("class","buyButton");
	if(seed.count>=10)
		document.getElementById("buySeedGen").setAttribute("class","buyButton");
	if(droplet.count>=20)
		document.getElementById("buyDropletGen").setAttribute("class","buyButton");
};

function improveRate(mat){
	mat.currentRate = mat.currentRate + mat.baseRate;
	
	if(mat.dependents[0]!="none"){
		var i;
		for(i=0;i<mat.dependents.length;i++){
			var dep = mat.dependents[i];
			dep.currentRate = dep.currentRate - mat.baseRate*mat.depRate[i];
		}
	}
};

function checkMultibuy(tab){
	one = "buyOne"+tab;
	ten = "buyTen"+tab;
	hund = "buyHundred"+tab;
	
	if(document.getElementById(one).checked){
		return 1;
	}
	if(document.getElementById(ten).checked){
		return 10;
	}
	if(document.getElementById(hund).checked){
		return 100;
	}
	
	return 1;
};

function checkMultisell(tab){
	one = "sellOne"+tab;
	ten = "sellTen"+tab;
	hund = "sellHundred"+tab;
	
	if(document.getElementById(one).checked){
		return 1;
	}
	if(document.getElementById(ten).checked){
		return 10;
	}
	if(document.getElementById(hund).checked){
		return 100;
	}
	
	return 1;
};

function updateAllCosts(tab,multi){
	var cost = 0;
	if(tab=="elementary"){
		cost = calcGeneratorCost(electrons.generators,electrons.genCost,electrons.genMulti,multi)
		updateCost('electronGeneratorCostB',cost);
		updateCost('electronGeneratorCostS',cost);
		cost = calcGeneratorCost(protons.generators,protons.genCost,protons.genMulti,multi)
		updateCost('protonGeneratorCostB',cost);
		updateCost('protonGeneratorCostS',cost);
		cost = calcGeneratorCost(photons.generators,photons.genCost,photons.genMulti,multi)
		updateCost('photonGeneratorCostB',cost);
		updateCost('photonGeneratorCostS',cost);
		cost = calcGeneratorCost(neutrons.generators,neutrons.genCost,neutrons.genMulti,multi)
		updateCost('neutronGeneratorCostB',cost);
		updateCost('neutronGeneratorCostS',cost);
	}
	else if(tab=="element"){
		cost = calcGeneratorCost(hydrogen.generators,hydrogen.genCost,hydrogen.genMulti,multi)
		updateCost('hydrogenGeneratorCostB',cost);
		updateCost('hydrogenGeneratorCostS',cost);
		cost = calcGeneratorCost(helium.generators,helium.genCost,helium.genMulti,multi)
		updateCost('heliumGeneratorCostB',cost);
		updateCost('heliumGeneratorCostS',cost);
		cost = calcGeneratorCost(carbon.generators,carbon.genCost,carbon.genMulti,multi)
		updateCost('carbonGeneratorCostB',cost);
		updateCost('carbonGeneratorCostS',cost);
		cost = calcGeneratorCost(nitrogen.generators,nitrogen.genCost,nitrogen.genMulti,multi)
		updateCost('nitrogenGeneratorCostB',cost);
		updateCost('nitrogenGeneratorCostS',cost);
		cost = calcGeneratorCost(oxygen.generators,oxygen.genCost,oxygen.genMulti,multi)
		updateCost('oxygenGeneratorCostB',cost);
		updateCost('oxygenGeneratorCostS',cost);
		cost = calcGeneratorCost(phosphorus.generators,phosphorus.genCost,phosphorus.genMulti,multi)
		updateCost('phosphorusGeneratorCostB',cost);
		updateCost('phosphorusGeneratorCostS',cost);
	}
	else if(tab=="compound"){
		cost = calcGeneratorCost(methane.generators,methane.genCost,methane.genMulti,multi)
		updateCost('methaneGeneratorCostB',cost);
		updateCost('methaneGeneratorCostS',cost);
		cost = calcGeneratorCost(ammonia.generators,ammonia.genCost,ammonia.genMulti,multi)
		updateCost('ammoniaGeneratorCostB',cost);
		updateCost('ammoniaGeneratorCostS',cost);
		cost = calcGeneratorCost(water.generators,water.genCost,water.genMulti,multi)
		updateCost('waterGeneratorCostB',cost);
		updateCost('waterGeneratorCostS',cost);
		cost = calcGeneratorCost(carbondioxide.generators,carbondioxide.genCost,carbondioxide.genMulti,multi)
		updateCost('carbondioxideGeneratorCostB',cost);
		updateCost('carbondioxideGeneratorCostS',cost);
		cost = calcGeneratorCost(phosphate.generators,phosphate.genCost,phosphate.genMulti,multi)
		updateCost('phosphateGeneratorCostB',cost);
		updateCost('phosphateGeneratorCostS',cost);
		cost = calcGeneratorCost(sugar.generators,sugar.genCost,sugar.genMulti,multi)
		updateCost('sugarGeneratorCostB',cost);
		updateCost('sugarGeneratorCostS',cost);
	}
}

function updateCost(name,cost){
	document.getElementById(name).innerHTML = "("+numberFormatter(cost,2)+")";
}

/*--------------
**Buy Generators
--------------*/
//Elementary Generators
function buyElectronGenerator(){
	var multiBuy = checkMultibuy("Elementary");
	//Buy one electron generator, produces one electron per second for free
	var generatorCost = calcGeneratorCost(electrons.generators,electrons.genCost,electrons.genMulti,multiBuy);
	if(electrons.count >= generatorCost){
		electrons.generators = electrons.generators + multiBuy;
		electrons.count = electrons.count - generatorCost;
		document.getElementById('electronGenerators').innerHTML = electrons.generators;
		document.getElementById('electrons').innerHTML = numberFormatter(electrons.count,2);
		
		//Increase electron rate
		var i=multiBuy;
		while(i>0){
			improveRate(electrons);
			i--;
		}
		
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(electrons.generators,electrons.genCost,electrons.genMulti,multiBuy);
	updateCost('electronGeneratorCostB',nextCost);
	updateCost('electronGeneratorCostS',nextCost);
};

function buyProtonGenerator(){
	var multiBuy = checkMultibuy("Elementary");
	//Buy one proton generator, produces one proton per second for free
	var generatorCost = calcGeneratorCost(protons.generators,protons.genCost,protons.genMulti,multiBuy);
	if(protons.count >= generatorCost){
		protons.generators = protons.generators + multiBuy;
		protons.count = protons.count - generatorCost;
		document.getElementById('protonGenerators').innerHTML = protons.generators;
		document.getElementById('protons').innerHTML = numberFormatter(protons.count,2);
		
		//Increase proton rate
		var i=multiBuy;
		while(i>0){
			improveRate(protons);
			i--;
		}
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(protons.generators,protons.genCost,protons.genMulti,multiBuy);
	updateCost('protonGeneratorCostB',nextCost);
	updateCost('protonGeneratorCostS',nextCost);
};

function buyPhotonGenerator(){
	var multiBuy = checkMultibuy("Elementary");
	//Buy one photon generator, produces one photon per second for free
	var generatorCost = calcGeneratorCost(photons.generators,photons.genCost,photons.genMulti,multiBuy);
	if(photons.count >= generatorCost){
		photons.generators = photons.generators + multiBuy;
		photons.count = photons.count - generatorCost;
		document.getElementById('photonGenerators').innerHTML = photons.generators;
		document.getElementById('photons').innerHTML = numberFormatter(photons.count,2);
		
		//Increase photon rate
		var i=multiBuy;
		while(i>0){
			improveRate(photons);
			i--;
		}
		document.getElementById('photonRate').innerHTML = "("+numberFormatter(photons.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(photons.generators,photons.genCost,photons.genMulti,multiBuy);
	updateCost('photonGeneratorCostB',nextCost);
	updateCost('photonGeneratorCostS',nextCost);
};

function buyNeutronGenerator(){
	var multiBuy = checkMultibuy("Elementary");
	//Buy one neutron generator, produces one neutron per second for the cost of 1 electron and 1 proton
	var generatorCost = calcGeneratorCost(neutrons.generators,neutrons.genCost,neutrons.genMulti,multiBuy);
	if(neutrons.count >= generatorCost){
		neutrons.generators = neutrons.generators + multiBuy;
		neutrons.count = neutrons.count - generatorCost;
		document.getElementById('neutronGenerators').innerHTML = neutrons.generators;
		document.getElementById('neutrons').innerHTML = numberFormatter(neutrons.count,2);
		
		//Increase neutron rate
		var i=multiBuy;
		while(i>0){
			improveRate(neutrons);
			i--;
		}
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(neutrons.generators,neutrons.genCost,neutrons.genMulti,multiBuy);
	updateCost('neutronGeneratorCostB',nextCost);
	updateCost('neutronGeneratorCostS',nextCost);
	if (electrons.currentRate < 0) losingMats("ElementaryTab");
	if (protons.currentRate < 0) losingMats("ElementaryTab");
};

//Element Generators
function buyHydrogenGenerator(){
	var multiBuy = checkMultibuy("Element");
	//Buy one hydrogen generator, produces one hydrogen per second for the cost of 1 electron and 1 proton
	var generatorCost = calcGeneratorCost(hydrogen.generators,hydrogen.genCost,hydrogen.genMulti,multiBuy);
	if(hydrogen.count >= generatorCost){
		hydrogen.generators = hydrogen.generators + multiBuy;
		hydrogen.count = hydrogen.count - generatorCost;
		document.getElementById('hydrogenGenerators').innerHTML = hydrogen.generators;
		document.getElementById('hydrogen').innerHTML = numberFormatter(hydrogen.count,2);
		
		//Increase hydrogen rate, decrease electron and proton rate
		var i=multiBuy;
		while(i>0){
			improveRate(hydrogen);
			i--;
		}
		document.getElementById('hydrogenRate').innerHTML = "("+numberFormatter(hydrogen.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(hydrogen.generators,hydrogen.genCost,hydrogen.genMulti,multiBuy);
	updateCost('hydrogenGeneratorCostB',nextCost);
	updateCost('hydrogenGeneratorCostS',nextCost);
	if (electrons.currentRate < 0) losingMats("ElementaryTab");
	if (protons.currentRate < 0) losingMats("ElementaryTab");
};

function buyHeliumGenerator(){
	var multiBuy = checkMultibuy("Element");
	//Buy one helium generator, produces one helium per second for the cost of 2 electrons and 2 protons and 2 neutrons
	var generatorCost = calcGeneratorCost(helium.generators,helium.genCost,helium.genMulti,multiBuy);
	if(helium.count >= generatorCost){
		helium.generators = helium.generators + multiBuy;
		helium.count = helium.count - generatorCost;
		document.getElementById('heliumGenerators').innerHTML = helium.generators;
		document.getElementById('helium').innerHTML = numberFormatter(helium.count,2);
		
		//Increase helium rate, decrease electron and proton and neutron rate
		var i=multiBuy;
		while(i>0){
			improveRate(helium);
			i--;
		}
		document.getElementById('heliumRate').innerHTML = "("+numberFormatter(helium.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(helium.generators,helium.genCost,helium.genMulti,multiBuy);
	updateCost('heliumGeneratorCostB',nextCost);
	updateCost('heliumGeneratorCostS',nextCost);
	if (electrons.currentRate < 0) losingMats("ElementaryTab");
	if (protons.currentRate < 0) losingMats("ElementaryTab");
	if (neutrons.currentRate < 0) losingMats("ElementaryTab");
};

function buyCarbonGenerator(){
	var multiBuy = checkMultibuy("Element");
	//Buy one carbon generator, produces one carbon per second for the cost of 6 electrons and 6 protons and 6 neutrons
	var generatorCost = calcGeneratorCost(carbon.generators,carbon.genCost,carbon.genMulti,multiBuy);
	if(carbon.count >= generatorCost){
		carbon.generators = carbon.generators + multiBuy;
		carbon.count = carbon.count - generatorCost;
		document.getElementById('carbonGenerators').innerHTML = carbon.generators;
		document.getElementById('carbon').innerHTML = numberFormatter(carbon.count,2);
		
		//Increase carbon rate, decrease electron and proton and neutron rate
		var i=multiBuy;
		while(i>0){
			improveRate(carbon);
			i--;
		}
		document.getElementById('carbonRate').innerHTML = "("+numberFormatter(carbon.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(carbon.generators,carbon.genCost,carbon.genMulti,multiBuy);
	updateCost('carbonGeneratorCostB',nextCost);
	updateCost('carbonGeneratorCostS',nextCost);
	if (electrons.currentRate < 0) losingMats("ElementaryTab");
	if (protons.currentRate < 0) losingMats("ElementaryTab");
	if (neutrons.currentRate < 0) losingMats("ElementaryTab");
};

function buyNitrogenGenerator(){
	var multiBuy = checkMultibuy("Element");
	//Buy one nitrogen generator, produces one nitrogen per second for the cost of 7 electrons and 7 protons and 7 neutrons
	var generatorCost = calcGeneratorCost(nitrogen.generators,nitrogen.genCost,nitrogen.genMulti,multiBuy);
	if(nitrogen.count >= generatorCost){
		nitrogen.generators = nitrogen.generators + multiBuy;
		nitrogen.count = nitrogen.count - generatorCost;
		document.getElementById('nitrogenGenerators').innerHTML = nitrogen.generators;
		document.getElementById('nitrogen').innerHTML = numberFormatter(nitrogen.count,2);
		
		//Increase nitrogen rate, decrease electron and proton and neutron rate
		var i=multiBuy;
		while(i>0){
			improveRate(nitrogen);
			i--;
		}
		document.getElementById('nitrogenRate').innerHTML = "("+numberFormatter(nitrogen.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(nitrogen.generators,nitrogen.genCost,nitrogen.genMulti,multiBuy);
	updateCost('nitrogenGeneratorCostB',nextCost);
	updateCost('nitrogenGeneratorCostS',nextCost);
	if (electrons.currentRate < 0) losingMats("ElementaryTab");
	if (protons.currentRate < 0) losingMats("ElementaryTab");
	if (neutrons.currentRate < 0) losingMats("ElementaryTab");
};

function buyOxygenGenerator(){
	var multiBuy = checkMultibuy("Element");
	//Buy one oxygen generator, produces one oxygen per second for the cost of 8 electrons and 8 protons and 8 neutrons
	var generatorCost = calcGeneratorCost(oxygen.generators,oxygen.genCost,oxygen.genMulti,multiBuy);
	if(oxygen.count >= generatorCost){
		oxygen.generators = oxygen.generators + multiBuy;
		oxygen.count = oxygen.count - generatorCost;
		document.getElementById('oxygenGenerators').innerHTML = oxygen.generators;
		document.getElementById('oxygen').innerHTML = numberFormatter(oxygen.count,2);
		
		//Increase oxygen rate, decrease electron and proton and neutron rate
		var i=multiBuy;
		while(i>0){
			improveRate(oxygen);
			i--;
		}
		document.getElementById('oxygenRate').innerHTML = "("+numberFormatter(oxygen.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(oxygen.generators,oxygen.genCost,oxygen.genMulti,multiBuy);
	updateCost('oxygenGeneratorCostB',nextCost);
	updateCost('oxygenGeneratorCostS',nextCost);
	if (electrons.currentRate < 0) losingMats("ElementaryTab");
	if (protons.currentRate < 0) losingMats("ElementaryTab");
	if (neutrons.currentRate < 0) losingMats("ElementaryTab");
};

function buyPhosphorusGenerator(){
	var multiBuy = checkMultibuy("Element");
	//Buy one phosphorus generator, produces one phosphorus per second for the cost of 15 electrons and 15 protons and 16 neutrons
	var generatorCost = calcGeneratorCost(phosphorus.generators,phosphorus.genCost,phosphorus.genMulti,multiBuy);
	if(phosphorus.count >= generatorCost){
		phosphorus.generators = phosphorus.generators + multiBuy;
		phosphorus.count = phosphorus.count - generatorCost;
		document.getElementById('phosphorusGenerators').innerHTML = phosphorus.generators;
		document.getElementById('phosphorus').innerHTML = numberFormatter(phosphorus.count,2);
		
		//Increase phosphorus rate, decrease electron and proton and neutron rate
		var i=multiBuy;
		while(i>0){
			improveRate(phosphorus);
			i--;
		}
		document.getElementById('phosphorusRate').innerHTML = "("+numberFormatter(phosphorus.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(phosphorus.generators,phosphorus.genCost,phosphorus.genMulti,multiBuy);
	updateCost('phosphorusGeneratorCostB',nextCost);
	updateCost('phosphorusGeneratorCostS',nextCost);
	if (electrons.currentRate < 0) losingMats("ElementaryTab");
	if (protons.currentRate < 0) losingMats("ElementaryTab");
	if (neutrons.currentRate < 0) losingMats("ElementaryTab");
};

//Compound Generators
function buyMethaneGenerator(){
	var multiBuy = checkMultibuy("Compound");
	//Buy one methane generator, produces one methane per second for the cost of 4 hydrogen and 1 carbon
	var generatorCost = calcGeneratorCost(methane.generators,methane.genCost,methane.genMulti,multiBuy);
	if(methane.count >= generatorCost){
		methane.generators = methane.generators + multiBuy;
		methane.count = methane.count - generatorCost;
		document.getElementById('methaneGenerators').innerHTML = methane.generators;
		document.getElementById('methane').innerHTML = numberFormatter(methane.count,2);
		
		//Increase methane rate, decrease hydrogen and carbon rate
		var i=multiBuy;
		while(i>0){
			improveRate(methane);
			i--;
		}
		document.getElementById('methaneRate').innerHTML = "("+numberFormatter(methane.currentRate,2)+"/s)";
		document.getElementById('hydrogenRate').innerHTML = "("+numberFormatter(hydrogen.currentRate,2)+"/s)";
		document.getElementById('carbonRate').innerHTML = "("+numberFormatter(carbon.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(methane.generators,methane.genCost,methane.genMulti,multiBuy);
	updateCost('methaneGeneratorCostB',nextCost);
	updateCost('methaneGeneratorCostS',nextCost);
	if (hydrogen.currentRate < 0) losingMats("ElementTab");
	if (carbon.currentRate < 0) losingMats("ElementTab");
};

function buyAmmoniaGenerator(){
	var multiBuy = checkMultibuy("Compound");
	//Buy one ammonia generator, produces one ammonia per second for the cost of 3 hydrogen and 1 nitrogen
	var generatorCost = calcGeneratorCost(ammonia.generators,ammonia.genCost,ammonia.genMulti,multiBuy);
	if(ammonia.count >= generatorCost){
		ammonia.generators = ammonia.generators + multiBuy;
		ammonia.count = ammonia.count - generatorCost;
		document.getElementById('ammoniaGenerators').innerHTML = ammonia.generators;
		document.getElementById('ammonia').innerHTML = numberFormatter(ammonia.count,2);
		
		//Increase ammonia rate, decrease hydrogen and nitrogen rate
		var i=multiBuy;
		while(i>0){
			improveRate(ammonia);
			i--;
		}
		document.getElementById('ammoniaRate').innerHTML = "("+numberFormatter(ammonia.currentRate,2)+"/s)";
		document.getElementById('hydrogenRate').innerHTML = "("+numberFormatter(hydrogen.currentRate,2)+"/s)";
		document.getElementById('carbonRate').innerHTML = "("+numberFormatter(carbon.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(ammonia.generators,ammonia.genCost,ammonia.genMulti,multiBuy);
	updateCost('ammoniaGeneratorCostB',nextCost);
	updateCost('ammoniaGeneratorCostS',nextCost);
	if (hydrogen.currentRate < 0) losingMats("ElementTab");
	if (carbon.currentRate < 0) losingMats("ElementTab");
};

function buyWaterGenerator(){
	var multiBuy = checkMultibuy("Compound");
	//Buy one water generator, produces one water per second for the cost of 2 hydrogen and 1 oxygen
	var generatorCost = calcGeneratorCost(water.generators,water.genCost,water.genMulti,multiBuy);
	if(water.count >= generatorCost){
		water.generators = water.generators + multiBuy;
		water.count = water.count - generatorCost;
		document.getElementById('waterGenerators').innerHTML = water.generators;
		document.getElementById('water').innerHTML = numberFormatter(water.count,2);
		
		//Increase water rate, decrease hydrogen and oxygen rate
		var i=multiBuy;
		while(i>0){
			improveRate(water);
			i--;
		}
		document.getElementById('waterRate').innerHTML = "("+numberFormatter(water.currentRate,2)+"/s)";
		document.getElementById('hydrogenRate').innerHTML = "("+numberFormatter(hydrogen.currentRate,2)+"/s)";
		document.getElementById('oxygenRate').innerHTML = "("+numberFormatter(oxygen.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(water.generators,water.genCost,water.genMulti,multiBuy);
	updateCost('waterGeneratorCostB',nextCost);
	updateCost('waterGeneratorCostS',nextCost);
	if (hydrogen.currentRate < 0) losingMats("ElementTab");
	if (oxygen.currentRate < 0) losingMats("ElementTab");
};

function buyCarbonDioxideGenerator(){
	var multiBuy = checkMultibuy("Compound");
	//Buy one carbon dioxide generator, produces one carbon dioxide per second for the cost of 1 carbon and 2 oxygen
	var generatorCost = calcGeneratorCost(carbondioxide.generators,carbondioxide.genCost,carbondioxide.genMulti,multiBuy);
	if(carbondioxide.count >= generatorCost){
		carbondioxide.generators = carbondioxide.generators + multiBuy;
		carbondioxide.count = carbondioxide.count - generatorCost;
		document.getElementById('carbondioxideGenerators').innerHTML = carbondioxide.generators;
		document.getElementById('carbondioxide').innerHTML = numberFormatter(carbondioxide.count,2);
		
		//Increase carbondioxide rate, decrease carbon and oxygen rate
		var i=multiBuy;
		while(i>0){
			improveRate(carbondioxide);
			i--;
		}
		document.getElementById('carbondioxideRate').innerHTML = "("+numberFormatter(carbondioxide.currentRate,2)+"/s)";
		document.getElementById('carbonRate').innerHTML = "("+numberFormatter(carbon.currentRate,2)+"/s)";
		document.getElementById('oxygenRate').innerHTML = "("+numberFormatter(oxygen.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(carbondioxide.generators,carbondioxide.genCost,carbondioxide.genMulti,multiBuy);
	updateCost('carbondioxideGeneratorCostB',nextCost);
	updateCost('carbondioxideGeneratorCostS',nextCost);
	if (carbon.currentRate < 0) losingMats("ElementTab");
	if (oxygen.currentRate < 0) losingMats("ElementTab");
};

function buyPhosphateGenerator(){
	var multiBuy = checkMultibuy("Compound");
	//Buy one phosphate generator, produces one phosphate per second for the cost of 3 hydrogen and 4 oxygen and 1 phosphorus
	var generatorCost = calcGeneratorCost(phosphate.generators,phosphate.genCost,phosphate.genMulti,multiBuy);
	if(phosphate.count >= generatorCost){
		phosphate.generators = phosphate.generators + multiBuy;
		phosphate.count = phosphate.count - generatorCost;
		document.getElementById('phosphateGenerators').innerHTML = phosphate.generators;
		document.getElementById('phosphate').innerHTML = numberFormatter(phosphate.count,2);
		
		//Increase phosphate rate, decrease hydrogen and oxygen and phosphorus rate
		var i=multiBuy;
		while(i>0){
			improveRate(phosphate);
			i--;
		}
		document.getElementById('phosphateRate').innerHTML = "("+numberFormatter(phosphate.currentRate,2)+"/s)";
		document.getElementById('hydrogenRate').innerHTML = "("+numberFormatter(hydrogen.currentRate,2)+"/s)";
		document.getElementById('oxygenRate').innerHTML = "("+numberFormatter(oxygen.currentRate,2)+"/s)";
		document.getElementById('phosphorusRate').innerHTML = "("+numberFormatter(phosphorus.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(phosphate.generators,phosphate.genCost,phosphate.genMulti,multiBuy);
	updateCost('phosphateGeneratorCostB',nextCost);
	updateCost('phosphateGeneratorCostS',nextCost);
	if (hydrogen.currentRate < 0) losingMats("ElementTab");
	if (oxygen.currentRate < 0) losingMats("ElementTab");
	if (phosphate.currentRate < 0) losingMats("ElementTab");
};

function buySugarGenerator(){
	var multiBuy = checkMultibuy("Compound");
	//Buy one sugar generator, produces one sugar per second for the cost of 12 hydrogen and 6 carbon and 6 oxygen
	var generatorCost = calcGeneratorCost(sugar.generators,sugar.genCost,sugar.genMulti,multiBuy);
	if(sugar.count >= generatorCost){
		sugar.generators = sugar.generators + multiBuy;
		sugar.count = sugar.count - generatorCost;
		document.getElementById('sugarGenerators').innerHTML = sugar.generators;
		document.getElementById('sugar').innerHTML = numberFormatter(sugar.count,2);
		
		//Increase sugar rate, decrease hydrogen and carbon and oxygen rate
		var i=multiBuy;
		while(i>0){
			improveRate(sugar);
			i--;
		}
		document.getElementById('sugarRate').innerHTML = "("+numberFormatter(sugar.currentRate,2)+"/s)";
		document.getElementById('hydrogenRate').innerHTML = "("+numberFormatter(hydrogen.currentRate,2)+"/s)";
		document.getElementById('carbonRate').innerHTML = "("+numberFormatter(carbon.currentRate,2)+"/s)";
		document.getElementById('oxygenRate').innerHTML = "("+numberFormatter(oxygen.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(sugar.generators,sugar.genCost,sugar.genMulti,multiBuy);
	updateCost('sugarGeneratorCostB',nextCost);
	updateCost('sugarGeneratorCostS',nextCost);
	if (hydrogen.currentRate < 0) losingMats("ElementTab");
	if (carbon.currentRate < 0) losingMats("ElementTab");
	if (oxygen.currentRate < 0) losingMats("ElementTab");
};

//Microscopic generators
function buyProteinGenerator(){
	var multiBuy = checkMultibuy("Microscopic");
	//Buy one protein generator, produces one protein per second for the cost of 1 methane and 1 ammonia and 1 carbon dioxide
	var generatorCost = calcGeneratorCost(protein.generators,protein.genCost,protein.genMulti,multiBuy);
	if(protein.count >= generatorCost){
		protein.generators = protein.generators + multiBuy;
		protein.count = protein.count - generatorCost;
		document.getElementById('proteinGenerators').innerHTML = protein.generators;
		document.getElementById('protein').innerHTML = numberFormatter(protein.count,2);
		
		//Increase protein rate, decrease methane and ammonia and carbon dioxide rate
		var i=multiBuy;
		while(i>0){
			improveRate(protein);
			i--;
		}
		document.getElementById('proteinRate').innerHTML = "("+numberFormatter(protein.currentRate,2)+"/s)";
		document.getElementById('methaneRate').innerHTML = "("+numberFormatter(methane.currentRate,2)+"/s)";
		document.getElementById('ammoniaRate').innerHTML = "("+numberFormatter(ammonia.currentRate,2)+"/s)";
		document.getElementById('carbondioxideRate').innerHTML = "("+numberFormatter(carbondioxide.currentRate,2)+"/s)";
	}
	var nextCost = calcGeneratorCost(protein.generators,protein.genCost,protein.genMulti,multiBuy);
	updateCost('proteinGeneratorCostB',nextCost);
	updateCost('proteinGeneratorCostS',nextCost);
	if (methane.currentRate < 0) losingMats("CompoundTab");
	if (ammonia.currentRate < 0) losingMats("CompoundTab");
	if (carbondioxide.currentRate < 0) losingMats("CompoundTab");
};

/*--------------
**Sell Generators
--------------*/
//Elementary Generators
function sellElectronGenerator(){
	var multiSell = checkMultisell("Elementary");
	//Sell one electron generator
	if(electrons.generators > multiSell){
		var i=multiSell;
		while(i>0){
			electrons.generators = electrons.generators - 1;
			electrons.currentRate = electrons.currentRate - electrons.baseRate;
			i--;
		}
		
		var nextCost = calcGeneratorCost(electrons.generators,electrons.genCost,electrons.genMulti,multiSell);
		
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('electronGenerators').innerHTML = electrons.generators;
		
		document.getElementById('electronGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('electronGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

function sellProtonGenerator(){
	var multiSell = checkMultisell("Elementary");
	//Sell one proton generator
	if(protons.generators > multiSell){
		var i=multiSell;
		while(i>0){
			protons.generators = protons.generators - 1;
			protons.currentRate = protons.currentRate - protons.baseRate;
		}
		
		var nextCost = calcGeneratorCost(protons.generators,protons.genCost,protons.genMulti,multiSell);
		
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('protonGenerators').innerHTML = protons.generators;
		
		document.getElementById('protonGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('protonGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

function sellPhotonGenerator(){
	if(photon.generators > 0){
		photon.generators = photon.generators - 1;
		photons.currentRate = photons.currentRate - photons.baseRate;
		var nextCost = calcGeneratorCost(photons.generators,photons.genCost,photons.genMulti,1);
		
		document.getElementById('photonRate').innerHTML = "("+numberFormatter(photons.currentRate,2)+"/s)";
		document.getElementById('photonGenerators').innerHTML = generators["photons"];
		
		document.getElementById('photonGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('photonGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

function sellNeutronGenerator(){
	if(neutrons.generators > 0){
		neutrons.generators = neutrons.generators - 1;
		neutrons.currentRate = neutrons.currentRate - neutrons.baseRate;
		electrons.currentRate = electrons.currentRate + neutrons.baseRate;
		protons.currentRate = protons.currentRate + neutrons.baseRate;
		var nextCost = calcGeneratorCost(neutrons.generators,neutrons.genCost,neutrons.genMulti,1);
		
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronGenerators').innerHTML = neutrons.generators;
		
		document.getElementById('neutronGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('neutronGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

//Element Generators
function sellHydrogenGenerator(){
	if(hydrogen.generators > 0){
		hydrogen.generators = hydrogen.generators - 1;
		hydrogen.currentRate = hydrogen.currentRate - hydrogen.baseRate;
		electrons.currentRate = electrons.currentRate + hydrogen.baseRate;
		protons.currentRate = protons.currentRate + hydrogen.baseRate;
		var nextCost = calcGeneratorCost(hydrogen.generators,hydrogen.genCost,hydrogen.genMulti,1);
		
		document.getElementById('hydrogenRate').innerHTML = "("+numberFormatter(hydrogen.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('hydrogenGenerators').innerHTML = hydrogen.generators;
		
		document.getElementById('hydrogenGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('hydrogenGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

function sellHeliumGenerator(){
	if(helium.generators > 0){
		helium.generators = helium.generators - 1;
		helium.currentRate = helium.currentRate - helium.baseRate;
		electrons.currentRate = electrons.currentRate + helium.baseRate*2;
		protons.currentRate = protons.currentRate + helium.baseRate*2;
		neutrons.currentRate = neutrons.currentRate + helium.baseRate*2;
		var nextCost = calcGeneratorCost(helium.generators,helium.genCost,helium.genMulti,1);
		
		document.getElementById('heliumRate').innerHTML = "("+numberFormatter(helium.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
		document.getElementById('heliumGenerators').innerHTML = helium.generators;
		
		document.getElementById('heliumGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('heliumGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

function sellCarbonGenerator(){
	if(carbon.generators > 0){
		carbon.generators = carbon.generators - 1;
		carbon.currentRate = carbon.currentRate - carbon.baseRate;
		electrons.currentRate = electrons.currentRate + carbon.baseRate*6;
		protons.currentRate = protons.currentRate + carbon.baseRate*6;
		neutrons.currentRate = neutrons.currentRate + carbon.baseRate*6;
		var nextCost = calcGeneratorCost(carbon.generators,carbon.genCost,carbon.genMulti,1);
		
		document.getElementById('carbonRate').innerHTML = "("+numberFormatter(carbon.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
		document.getElementById('carbonGenerators').innerHTML = carbon.generators;
		
		document.getElementById('carbonGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('carbonGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

function sellNitrogenGenerator(){
	if(nitrogen.generators > 0){
		nitrogen.generators = nitrogen.generators - 1;
		nitrogen.currentRate = nitrogen.currentRate - nitrogen.baseRate;
		electrons.currentRate = electrons.currentRate + nitrogen.baseRate*7;
		protons.currentRate = protons.currentRate + nitrogen.baseRate*7;
		neutrons.currentRate = neutrons.currentRate + nitrogen.baseRate*7;
		var nextCost = calcGeneratorCost(nitrogen.generators,nitrogen.genCost,nitrogen.genMulti,1);
		
		document.getElementById('nitrogenRate').innerHTML = "("+numberFormatter(nitrogen.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
		document.getElementById('nitrogenGenerators').innerHTML = nitrogen.generators;
		
		document.getElementById('nitrogenGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('nitrogenGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

function sellOxygenGenerator(){
	if(oxygen.generators > 0){
		oxygen.generators = oxygen.generators - 1;
		oxygen.currentRate = oxygen.currentRate - oxygen.baseRate;
		electrons.currentRate = electrons.currentRate + oxygen.baseRate*8;
		protons.currentRate = protons.currentRate + oxygen.baseRate*8;
		neutrons.currentRate = neutrons.currentRate + oxygen.baseRate*8;
		var nextCost = calcGeneratorCost(oxygen.generators,oxygen.genCost,oxygen.genMulti,1);
		
		document.getElementById('oxygenRate').innerHTML = "("+numberFormatter(oxygen.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
		document.getElementById('oxygenGenerators').innerHTML = oxygen.generators;
		
		document.getElementById('oxygenGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('oxygenGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

function sellPhosphorusGenerator(){
	if(phosphorus.generators > 0){
		phosphorus.generators = phosphorus.generators - 1;
		phosphorus.currentRate = phosphorus.currentRate - phosphorus.baseRate;
		electrons.currentRate = electrons.currentRate + phosphorus.baseRate*15;
		protons.currentRate = protons.currentRate + phosphorus.baseRate*15;
		neutrons.currentRate = neutrons.currentRate + phosphorus.baseRate*16;
		var nextCost = calcGeneratorCost(phosphorus.generators,phosphorus.genCost,phosphorus.genMulti,1);
		
		document.getElementById('phosphorusRate').innerHTML = "("+numberFormatter(phosphorus.currentRate,2)+"/s)";
		document.getElementById('electronRate').innerHTML = "("+numberFormatter(electrons.currentRate,2)+"/s)";
		document.getElementById('protonRate').innerHTML = "("+numberFormatter(protons.currentRate,2)+"/s)";
		document.getElementById('neutronRate').innerHTML = "("+numberFormatter(neutrons.currentRate,2)+"/s)";
		document.getElementById('phosphorusGenerators').innerHTML = phosphorus.generators;
		
		document.getElementById('phosphorusGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('phosphorusGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

//Compound Generators
function sellMethaneGenerator(){
	if(methane.generators > 0){
		methane.generators = methane.generators - 1;
		methane.currentRate = methane.currentRate - methane.baseRate;
		hydrogen.currentRate = hydrogen.currentRate + methane.baseRate*4;
		carbon.currentRate = carbon.currentRate + methane.baseRate;
		var nextCost = calcGeneratorCost(methane.generators,methane.genCost,methane.genMulti,1);
		
		document.getElementById('methaneRate').innerHTML = "("+numberFormatter(methane.currentRate,2)+"/s)";
		document.getElementById('hydrogenRate').innerHTML = "("+numberFormatter(hydrogen.currentRate,2)+"/s)";
		document.getElementById('carbonRate').innerHTML = "("+numberFormatter(carbon.currentRate,2)+"/s)";
		document.getElementById('methaneGenerators').innerHTML = methane.generators;
		
		document.getElementById('methaneGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('methaneGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};

function sellAmmoniaGenerator(){
	if(ammonia.generators > 0){
		ammonia.generators = ammonia.generators - 1;
		ammonia.currentRate = ammonia.currentRate - ammonia.baseRate;
		hydrogen.currentRate = hydrogen.currentRate + ammonia.baseRate*3;
		nitrogen.currentRate = nitrogen.currentRate + ammonia.baseRate;
		var nextCost = calcGeneratorCost(ammonia.generators,ammonia.genCost,ammonia.genMulti,1);
		
		document.getElementById('ammoniaRate').innerHTML = "("+numberFormatter(ammonia.currentRate,2)+"/s)";
		document.getElementById('hydrogenRate').innerHTML = "("+numberFormatter(hydrogen.currentRate,2)+"/s)";
		document.getElementById('nitrogenRate').innerHTML = "("+numberFormatter(nitrogen.currentRate,2)+"/s)";
		document.getElementById('ammoniaGenerators').innerHTML = ammonia.generators;
		
		document.getElementById('ammoniaGeneratorCostB').innerHTML = "("+numberFormatter(nextCost,2)+")";
		document.getElementById('ammoniaGeneratorCostS').innerHTML = "("+numberFormatter(nextCost,2)+")";
	}
};