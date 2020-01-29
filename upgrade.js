/* This is the upgrades file. Anything that upgrades a generator is stored here */

var allUpgrades = new Object();
allUpgrades["twinElectrons"]="none";
allUpgrades["twinProtons"]="none";
allUpgrades["twinPhotons"]="none";
allUpgrades["twinNeutrons"]="none";
allUpgrades["twinHydrogen"]="none";
allUpgrades["twinHelium"]="none";
allUpgrades["twinCarbon"]="none";
allUpgrades["twinNitrogen"]="none";
allUpgrades["twinOxygen"]="none";
allUpgrades["twinPhosphorus"]="none";

allUpgrades["betterElectrons"]="none";
allUpgrades["betterProtons"]="none";
allUpgrades["betterPhotons"]="none";
allUpgrades["betterNeutrons"]="none";

allUpgrades["superElectrons"]="none";
allUpgrades["superProtons"]="none";
allUpgrades["superPhotons"]="none";
allUpgrades["superNeutrons"]="none";

var boughtUpgrades = new Array();

function checkUpgrades(){
	//Check twin upgrades (unlocked at 10k of material)
	if(electrons.count>5000 && allUpgrades["twinElectrons"]!="bought")
		document.getElementById("twinElectrons").style.display = "inline-block";
	if(electrons.count>10000)
		document.getElementById("twinElectrons").setAttribute("class","upgrade");
	if(protons.count>5000 && allUpgrades["twinProtons"]!="bought")
		document.getElementById("twinProtons").style.display = "inline-block";
	if(protons.count>10000)
		document.getElementById("twinProtons").setAttribute("class","upgrade");
	if(photons.count>5000 && allUpgrades["twinPhotons"]!="bought")
		document.getElementById("twinPhotons").style.display = "inline-block";
	if(photons.count>10000)
		document.getElementById("twinPhotons").setAttribute("class","upgrade");
	if(neutrons.count>5000 && allUpgrades["twinNeutrons"]!="bought")
		document.getElementById("twinNeutrons").style.display = "inline-block";
	if(neutrons.count>10000)
		document.getElementById("twinNeutrons").setAttribute("class","upgrade");
	if(hydrogen.count>5000 && allUpgrades["twinHydrogen"]!="bought")
		document.getElementById("twinHydrogen").style.display = "inline-block";
	if(hydrogen.count>10000)
		document.getElementById("twinHydrogen").setAttribute("class","upgrade");
	if(helium.count>5000 && allUpgrades["twinHelium"]!="bought")
		document.getElementById("twinHelium").style.display = "inline-block";
	if(helium.count>10000)
		document.getElementById("twinHelium").setAttribute("class","upgrade");
	if(carbon.count>5000 && allUpgrades["twinCarbon"]!="bought")
		document.getElementById("twinCarbon").style.display = "inline-block";
	if(carbon.count>10000)
		document.getElementById("twinCarbon").setAttribute("class","upgrade");
	if(nitrogen.count>5000 && allUpgrades["twinNitrogen"]!="bought")
		document.getElementById("twinNitrogen").style.display = "inline-block";
	if(nitrogen.count>10000)
		document.getElementById("twinNitrogen").setAttribute("class","upgrade");
	/*if(oxygen.count>5000 && allUpgrades["twinOxygen"]!="bought")
		document.getElementById("twinOxygen").style.display = "inline-block";
	if(oxygen.count>10000)
		document.getElementById("twinOxygen").removeAttribute("disabled");
	if(phosphorus.count>5000 && allUpgrades["twinPhosphorus"]!="bought")
		document.getElementById("twinPhosphorus").style.display = "inline-block";
	if(phosphorus.count>10000)
		document.getElementById("twinPhosphorus").removeAttribute("disabled");*/
		
	//Check better upgrades (onlocked at 100k of material)
	if(electrons.count>50000 && allUpgrades["betterElectrons"]!="bought")
		document.getElementById("betterElectrons").style.display = "inline-block";
	if(electrons.count>1e5)
		document.getElementById("betterElectrons").setAttribute("class","upgrade");
	if(protons.count>50000 && allUpgrades["betterProtons"]!="bought")
		document.getElementById("betterProtons").style.display = "inline-block";
	if(protons.count>1e5)
		document.getElementById("betterProtons").setAttribute("class","upgrade");
	if(photons.count>50000 && allUpgrades["betterPhotons"]!="bought")
		document.getElementById("betterPhotons").style.display = "inline-block";
	if(photons.count>1e5)
		document.getElementById("betterPhotons").setAttribute("class","upgrade");
	if(neutrons.count>50000 && allUpgrades["betterNeutrons"]!="bought")
		document.getElementById("betterNeutrons").style.display = "inline-block";
	if(neutrons.count>1e5)
		document.getElementById("betterNeutrons").setAttribute("class","upgrade");
	/*if(hydrogen.count>50000 && allUpgrades["betterHydrogen"]!="bought")
		document.getElementById("betterHydrogen").style.display = "inline-block";
	if(hydrogen.count>1e5)
		document.getElementById("betterHydrogen").removeAttribute("disabled");
	if(helium.count>50000 && allUpgrades["betterHelium"]!="bought")
		document.getElementById("betterHelium").style.display = "inline-block";
	if(helium.count>1e5)
		document.getElementById("betterHelium").removeAttribute("disabled");*/
		
	//Check super upgrades (unlocked at 10k of lowest material of tier above
	if(hydrogen.count>10000 && allUpgrades["superElectrons"]!="bought")
		document.getElementById("superElectrons").style.display = "inline-block";
	if(electrons.count>1e6)
		document.getElementById("superElectrons").setAttribute("class","upgrade");
	if(hydrogen.count>10000 && allUpgrades["superProtons"]!="bought")
		document.getElementById("superProtons").style.display = "inline-block";
	if(protons.count>1e6)
		document.getElementById("superProtons").setAttribute("class","upgrade");
	if(hydrogen.count>10000 && allUpgrades["superPhotons"]!="bought")
		document.getElementById("superPhotons").style.display = "inline-block";
	if(photons.count>1e6)
		document.getElementById("superPhotons").setAttribute("class","upgrade");
	if(hydrogen.count>10000 && allUpgrades["superNeutrons"]!="bought")
		document.getElementById("superNeutrons").style.display = "inline-block";
	if(neutrons.count>1e6)
		document.getElementById("superNeutrons").setAttribute("class","upgrade");
};

//Improve the material sent to this function
function upgrade(mat, cost, amount, upName){
	if(mat.count >= cost){
		mat.count = mat.count - cost;
		
		upgradeRate(mat, amount);
		
		document.getElementById(upName).className += " bought";
		document.getElementById(upName).style.display = "none";
		allUpgrades[upName]="bought";
		boughtUpgrades.push(upName);
		loadDocument();
	}
};

//Lower the gen rate of the material sent to this function
function downgrade(imprRate, cost, lwrRate, amount){
	if(materials[imprRate] >= cost){
		rates[lwrRate][1] = rates[lwrRate][1] - (generators[imprRate]*(amount-rates[imprRate][0]));
		loadDocument();
	}
};

//Find upgrades that have been bought
function getBoughtUpgrades(mat){
	var i, bought="";
	
	mat = mat.charAt(0).toUpperCase() + mat.slice(1);
	
	for (i=0; i<boughtUpgrades.length; i++){
		if(boughtUpgrades[i].indexOf(mat)!=-1){
			var x = boughtUpgrades[i].indexOf(mat);
			var type = boughtUpgrades[i].substring(0,x);
			type = type.charAt(0).toUpperCase() + type.slice(1);
			bought = bought + type + " " + boughtUpgrades[i].substring(x,boughtUpgrades[i].length) + "</br >";
		}
	}

	return bought;
};

function upgradeDetails(name){
	//Twin upgrades
	if(name=="twinElectrons")
		return "Multiplies the base production of electrons by 2</br >Unlocked: 5000 electrons</br >Cost: 10,000 electrons";
	if(name=="twinProtons")
		return "Multiplies the base production of protons by 2</br >Unlocked: 5000 protons</br >Cost: 10,000 protons";
	if(name=="twinPhotons")
		return "Multiplies the base production of photons by 2</br >Unlocked: 5000 photons</br >Cost: 10,000 photons";
	if(name=="twinNeutrons")
		return "Multiplies the base production of neutrons by 2, lowering electron and proton generation</br >Unlocked: 5000 neutrons</br >Cost: 10,000 neutrons";
	if(name=="twinHydrogen")
		return "Multiplies the base production of hydrogen by 2, lowering electron and proton generation</br >Unlocked: 5000 hydrogen</br >Cost: 10,000 hydrogen";
	if(name=="twinHelium")
		return "Multiplies the base production of helium by 2, lowering electron and proton and neutron generation</br >Unlocked: 5000 helium</br >Cost: 10,000 helium";
	
	//Better upgrades
	if(name=="betterElectrons")
		return "Multiplies the base production of electrons by 5</br >Unlocked: 50000 electrons</br >Cost: 100,000 electrons";
	if(name=="betterProtons")
		return "Multiplies the base production of protons by 5</br >Unlocked: 50000 protons</br >Cost: 100,000 protons";
	if(name=="betterPhotons")
		return "Multiplies the base production of photons by 5</br >Unlocked: 50000 photons</br >Cost: 100,000 photons";
	if(name=="betterNeutrons")
		return "Multiplies the base production of neutrons by 5, lowering electron and proton generation</br >Unlocked: 50000 neutrons</br >Cost: 100,000 neutrons";
	if(name=="betterHydrogen")
		return "Multiplies the base production of hydrogen by 5, lowering electron and proton generation</br >Unlocked: 50000 hydrogen</br >Cost: 100,000 hydrogen";
	if(name=="betterHelium")
		return "Multiplies the base production of helium by 5, lowering electron and proton and neutron generation</br >Unlocked: 50000 helium</br >Cost: 100,000 helium";
		
	//Better upgrades
	if(name=="superElectrons")
		return "Multiplies the base production of electrons by 10</br >Unlocked: 10,000 hydrogen</br >Cost: 1 million electrons";
	if(name=="superProtons")
		return "Multiplies the base production of protons by 10</br >Unlocked: 10,000 hydrogen</br >Cost: 1 million protons";
	if(name=="superPhotons")
		return "Multiplies the base production of photons by 10</br >Unlocked: 10,000 hydrogen</br >Cost: 1 million photons";
	if(name=="superNeutrons")
		return "Multiplies the base production of neutrons by 10, lowering electron and proton generation</br >Unlocked: 10,000 hydrogen</br >Cost: 1 million neutrons";
	if(name=="superHydrogen")
		return "Multiplies the base production of hydrogen by 10, lowering electron and proton generation</br >Unlocked: x</br >Cost: 1 million hydrogen";
	if(name=="superHelium")
		return "Multiplies the base production of helium by 10, lowering electron and proton and neutron generation</br >Unlocked: x</br >Cost: 1 million helium";
}