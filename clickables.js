/* This is the clicks file. Anything that calls a clickable references these functions */

function checkClickables(){
	//Elementary
	if(electrons.count>=1000 && protons.count>=1000){
		document.getElementById("neutronCollect").setAttribute("onclick","neutronClick(1)");
		document.getElementById("neutronCollect").setAttribute("class","collectButton");
	}
	
	//Elements
	if(electrons.count>=10000 && protons.count>=10000){
		document.getElementById("hydrogenCollect").setAttribute("onclick","hydrogenClick(1)");
		document.getElementById("hydrogenCollect").setAttribute("class","collectButton");
	}
	if(electrons.count>=100000 && protons.count>=100000 && neutrons.count>=50000){
		document.getElementById("heliumCollect").setAttribute("onclick","heliumClick(1)");
		document.getElementById("heliumCollect").setAttribute("class","collectButton");
	}
	if(electrons.count>=1e6 && protons.count>=1e6 && neutrons.count>=5e5){
		document.getElementById("carbonCollect").setAttribute("onclick","carbonClick(1)");
		document.getElementById("carbonCollect").setAttribute("class","collectButton");
	}
	if(electrons.count>=1e7 && protons.count>=1e7 && neutrons.count>=5e6){
		document.getElementById("nitrogenCollect").setAttribute("onclick","nitrogenClick(1)");
		document.getElementById("nitrogenCollect").setAttribute("class","collectButton");
	}
	if(electrons.count>=1e8 && protons.count>=1e8 && neutrons.count>=5e7){
		document.getElementById("oxygenCollect").setAttribute("onclick","oxygenClick(1)");
		document.getElementById("oxygenCollect").setAttribute("class","collectButton");
	}
	if(electrons.count>=1e9 && protons.count>=1e9 && neutrons.count>=5e8){
		document.getElementById("phosphorusCollect").setAttribute("onclick","phosphorusClick(1)");
		document.getElementById("phosphorusCollect").setAttribute("class","collectButton");
	}
	
	//Compounds
	if(hydrogen.count>=4000 && carbon.count>=1000){
		document.getElementById("methaneCollect").setAttribute("onclick","methaneClick(1)");
		document.getElementById("methaneCollect").setAttribute("class","collectButton");
	}
	if(hydrogen.count>=30000 && nitrogen.count>=10000){
		document.getElementById("ammoniaCollect").setAttribute("onclick","ammoniaClick(1)");
		document.getElementById("ammoniaCollect").setAttribute("class","collectButton");
	}
	if(hydrogen.count>=200000 && oxygen.count>=100000){
		document.getElementById("waterCollect").setAttribute("onclick","waterClick(1)");
		document.getElementById("waterCollect").setAttribute("class","collectButton");
	}
	if(carbon.count>=1e6 && oxygen.count>=2e6){
		document.getElementById("carbondioxideCollect").setAttribute("onclick","carbondioxideClick(1)");
		document.getElementById("carbondioxideCollect").setAttribute("class","collectButton");
	}
	if(hydrogen.count>=3e7 && oxygen.count>=4e7 && phosphorus.count>=1e7){
		document.getElementById("phosphateCollect").setAttribute("onclick","phosphateClick(1)");
		document.getElementById("phosphateCollect").setAttribute("class","collectButton");
	}
	if(hydrogen.count>=12e8 && carbon.count>=6e8 && oxygen.count>=6e8){
		document.getElementById("sugarCollect").setAttribute("onclick","sugarClick(1)");
		document.getElementById("sugarCollect").setAttribute("class","collectButton");
	}
	
	//Microscopic
	if(carbondioxide.count>=1000 && methane.count>=1000 && ammonia.count>=1000){
		document.getElementById("proteinCollect").setAttribute("onclick","proteinClick(1)");
		document.getElementById("proteinCollect").setAttribute("class","collectButton");
	}
	if(water.count>=1e4 && carbondioxide.count>=1e4 && sugar.count>=4000){
		document.getElementById("dnaCollect").setAttribute("onclick","dnaClick(1)");
		document.getElementById("dnaCollect").setAttribute("class","collectButton");
	}
	if(water.count>=5e4 && carbondioxide.count>=2e4 && sugar.count>=1e4){
		document.getElementById("virusCollect").setAttribute("onclick","virusClick(1)");
		document.getElementById("virusCollect").setAttribute("class","collectButton");
	}
	if(water.count>=1e5 && carbondioxide.count>=5e4 && sugar.count>=2e4){
		document.getElementById("bacteriaCollect").setAttribute("onclick","bacteriaClick(1)");
		document.getElementById("bacteriaCollect").setAttribute("class","collectButton");
	}
	if(methane.count>=1.5e6 && water.count>=3e6 && carbondioxide.count>=1.2e6 && phosphate.count>=5e5){
		document.getElementById("siltCollect").setAttribute("onclick","siltClick(1)");
		document.getElementById("siltCollect").setAttribute("class","collectButton");
	}
	if(water.count>=5e7 && carbondioxide.count>=2e6 && sugar.count>=5e5){
		document.getElementById("cellCollect").setAttribute("onclick","cellClick(1)");
		document.getElementById("cellCollect").setAttribute("class","collectButton");
	}
	if(water.count>=2e8 && carbondioxide.count>=1e7 && sugar.count>=1e6){
		document.getElementById("seedCollect").setAttribute("onclick","seedClick(1)");
		document.getElementById("seedCollect").setAttribute("class","collectButton");
	}
	if(water.count>=1e9){
		document.getElementById("dropletCollect").setAttribute("onclick","dropletClick(1)");
		document.getElementById("dropletCollect").setAttribute("class","collectButton");
	}
};

//Generic clicker for generators
function generatorClick(mat){
	var count=0;
	var i;
	if(mat.count+mat.currentRate>0){
		for(i=0;i<mat.dependents.length;i++){
			if(mat.dependents[i]=="none")
				count++;
			else if(mat.dependents[i].count > mat.depRate[i]*mat.generators)
				count++;
		}
	}
	if(count==mat.dependents.length)
		mat.count = mat.count + mat.currentRate;
	
	var elem = mat.name.toLowerCase();
	elem = elem.replace(/\s/g,'');
	
	//var elem = mat.name.charAt(0).toLowerCase()+mat.name.slice(1);
	document.getElementById(elem).innerHTML = numberFormatter(mat.count,2);
};

/*----------------------
**Collectable Clickables
----------------------*/
//Elementary Clickers
function electronClick(number){
	//Buy electron
	electrons.count = electrons.count + number;
	document.getElementById("electrons").innerHTML = numberFormatter(electrons.count,2);
};

function protonClick(number){
	//Buy proton
	protons.count = protons.count + number;
	document.getElementById("protons").innerHTML = numberFormatter(protons.count,2);
};

function photonClick(number){
	//Buy photon
	photons.count = photons.count + number;
	document.getElementById("photons").innerHTML = numberFormatter(photons.count,2);
};

function neutronClick(number){
	//Buy neutron for the cost of 1 electron and 1 proton
	if(electrons.count >= number && protons.count >= number){
		neutrons.count = neutrons.count + number;
		electrons.count = electrons.count - number;
		protons.count = protons.count - number;
	}
	document.getElementById("neutrons").innerHTML = numberFormatter(neutrons.count,2);
	document.getElementById("electrons").innerHTML = numberFormatter(electrons.count,2);
	document.getElementById("protons").innerHTML = numberFormatter(protons.count,2);
};

//Element Clickers
function hydrogenClick(number){
	//Buy one hydrogen for the cost of 1 electron and 1 proton
	if(electrons.count >= 1 && protons.count >= 1){
		hydrogen.count = hydrogen.count + number;
		electrons.count = electrons.count - number;
		protons.count = protons.count - number;
	}
	document.getElementById("hydrogen").innerHTML = numberFormatter(hydrogen.count,2);
	document.getElementById("protons").innerHTML = numberFormatter(protons.count,2);
	document.getElementById("electrons").innerHTML = numberFormatter(electrons.count,2);
};

function heliumClick(number){
	//Buy one helium for the cost of 2 electrons and 2 protons and 2 neutrons
	if(electrons.count >= 2 && protons.count >= 2 && neutrons.count >= 2){
		helium.count = helium.count + number;
		electrons.count = electrons.count - number*2;
		protons.count = protons.count - number*2;
		neutrons.count = neutrons.count - number*2;
	}
	document.getElementById("helium").innerHTML = numberFormatter(helium.count,2);
	document.getElementById("protons").innerHTML = numberFormatter(protons.count,2);
	document.getElementById("electrons").innerHTML = numberFormatter(electrons.count,2);
	document.getElementById("neutrons").innerHTML = numberFormatter(neutrons.count,2);
};

function carbonClick(number){
	//Buy one carbon for the cost of 6 electrons and 6 protons and 6 neutrons
	if(electrons.count >= 6 && protons.count >= 6 && neutrons.count >= 6){
		carbon.count = carbon.count + number;
		electrons.count = electrons.count - number*6;
		protons.count = protons.count - number*6;
		neutrons.count = neutrons.count - number*6;
	}
	document.getElementById("carbon").innerHTML = numberFormatter(carbon.count,2);
	document.getElementById("protons").innerHTML = numberFormatter(protons.count,2);
	document.getElementById("electrons").innerHTML = numberFormatter(electrons.count,2);
	document.getElementById("neutrons").innerHTML = numberFormatter(neutrons.count,2);
};

function nitrogenClick(number){
	//Buy one nitrogen for the cost of 7 electrons and 7 protons and 7 neutrons
	if(electrons.count >= 7 && protons.count >= 7 && neutrons.count >= 7){
		nitrogen.count = nitrogen.count + number;
		electrons.count = electrons.count - number*7;
		protons.count = protons.count - number*7;
		neutrons.count = neutrons.count - number*7;
	}
	document.getElementById("nitrogen").innerHTML = numberFormatter(nitrogen.count,2);
	document.getElementById("protons").innerHTML = numberFormatter(protons.count,2);
	document.getElementById("electrons").innerHTML = numberFormatter(electrons.count,2);
	document.getElementById("neutrons").innerHTML = numberFormatter(neutrons.count,2);
};

function oxygenClick(number){
	//Buy one oxygen for the cost of 8 electrons and 8 protons and 8 neutrons
	if(electrons.count >= 8 && protons.count >= 8 && neutrons.count >= 8){
		oxygen.count = oxygen.count + number;
		electrons.count = electrons.count - number*8;
		protons.count = protons.count - number*8;
		neutrons.count = neutrons.count - number*8;
	}
	document.getElementById("oxygen").innerHTML = numberFormatter(oxygen.count,2);
	document.getElementById("protons").innerHTML = numberFormatter(protons.count,2);
	document.getElementById("electrons").innerHTML = numberFormatter(electrons.count,2);
	document.getElementById("neutrons").innerHTML = numberFormatter(neutrons.count,2);
};

function phosphorusClick(number){
	//Buy one phosphorus for the cost of 15 electrons and 15 protons and 16 neutrons
	if(electrons.count >= 15 && protons.count >= 15 && neutrons.count >= 16){
		phosphorus.count = phosphorus.count + number;
		electrons.count = electrons.count - number*8;
		protons.count = protons.count - number*8;
		neutrons.count = neutrons.count - number*8;
	}
	document.getElementById("phosphorus").innerHTML = numberFormatter(phosphorus.count,2);
	document.getElementById("protons").innerHTML = numberFormatter(protons.count,2);
	document.getElementById("electrons").innerHTML = numberFormatter(electrons.count,2);
	document.getElementById("neutrons").innerHTML = numberFormatter(neutrons.count,2);
};

//Compound Clickers
function methaneClick(number){
	//Buy one methane for the cost of 4 hydrogen and 1 carbon
	if(hydrogen.count >=4 && carbon.count >=1){
		methane.count = methane.count + number;
		hydrogen.count = hydrogen.count - number*4;
		carbon.count = carbon.count - number;
	}
	document.getElementById("methane").innerHTML = numberFormatter(methane.count,2);
	document.getElementById("hydrogen").innerHTML = numberFormatter(hydrogen.count,2);
	document.getElementById("carbon").innerHTML = numberFormatter(carbon.count,2);
};

function ammoniaClick(number){
	//Buy one ammonia for the cost of 3 hydrogen and 1 nitrogen
	if(hydrogen.count >=3 && nitrogen.count >=1){
		ammonia.count = ammonia.count + number;
		hydrogen.count = hydrogen.count - number*3;
		nitrogen.count = nitrogen.count - number;
	}
	document.getElementById("ammonia").innerHTML = numberFormatter(ammonia.count,2);
	document.getElementById("hydrogen").innerHTML = numberFormatter(hydrogen.count,2);
	document.getElementById("nitrogen").innerHTML = numberFormatter(nitrogen.count,2);
};

function waterClick(number){
	//Buy one water for the cost of 2 hydrogen and 1 oxygen
	if(hydrogen.count >=2 && oxygen.count >=1){
		water.count = water.count + number;
		hydrogen.count = hydrogen.count - number*2;
		oxygen.count =  oxygen.count - number;
	}
	document.getElementById("water").innerHTML = numberFormatter(water.count,2);
	document.getElementById("hydrogen").innerHTML = numberFormatter(hydrogen.count,2);
	document.getElementById("oxygen").innerHTML = numberFormatter(oxygen.count,2);
};

function carbondioxideClick(number){
	//Buy one carbon dioxide for the cost of 1 carbon and 1 oxygen
	if(carbon.count >=1 && oxygen.count >=2){
		carbondioxide.count = carbondioxide.count + number;
		carbon.count = carbon.count - number*2;
		oxygen.count =  oxygen.count - number;
	}
	document.getElementById("carbondioxide").innerHTML = numberFormatter(carbondioxide.count,2);
	document.getElementById("carbon").innerHTML = numberFormatter(carbon.count,2);
	document.getElementById("oxygen").innerHTML = numberFormatter(oxygen.count,2);
};

function phosphateClick(number){
	//Buy one phosphate for the cost of 3 hydrogen and 4 oxygen and 1 phosphorus
	if(hydrogen.count >=3 && oxygen.count >=4 && phosphorus.count >=1){
		phosphate.count = phosphate.count + number;
		hydrogen.count = hydrogen.count - number*3;
		oxygen.count =  oxygen.count - number*4;
		phosphorus.count =  phosphorus.count - number;
	}
	document.getElementById("phosphate").innerHTML = numberFormatter(phosphate.count,2);
	document.getElementById("hydrogen").innerHTML = numberFormatter(hydrogen.count,2);
	document.getElementById("oxygen").innerHTML = numberFormatter(oxygen.count,2);
	document.getElementById("phosphorus").innerHTML = numberFormatter(phosphorus.count,2);
};

function sugarClick(number){
	//Buy one sugar for the cost of 12 hydrogen and 6 carbon and 6 oxygen
	if(hydrogen.count >=12 && carbon.count >=6 && oxygen.count >=6){
		sugar.count = sugar.count + number;
		hydrogen.count = hydrogen.count - number*12;
		carbon.count =  carbon.count - number*6;
		oxygen.count =  oxygen.count - number*6;
	}
	document.getElementById("phosphate").innerHTML = numberFormatter(phosphate.count,2);
	document.getElementById("hydrogen").innerHTML = numberFormatter(hydrogen.count,2);
	document.getElementById("carbon").innerHTML = numberFormatter(carbon.count,2);
	document.getElementById("oxygen").innerHTML = numberFormatter(oxygen.count,2);
};

//Micro Clickers
function proteinClick(number){
	//Buy one protein for the cost of 1 carbon dioxide and 1 methane and 1 ammonia
	if(carbondioxide.count >=1 && methane.count >=1 && ammonia.count >=1){
		protein.count = protein.count + number;
		carbondioxide.count = carbondioxide.count - number;
		methane.count =  methane.count - number;
		ammonia.count =  ammonia.count - number;
	}
	document.getElementById("protein").innerHTML = numberFormatter(protein.count,2);
	document.getElementById("carbondioxide").innerHTML = numberFormatter(carbondioxide.count,2);
	document.getElementById("methane").innerHTML = numberFormatter(methane.count,2);
	document.getElementById("ammonia").innerHTML = numberFormatter(ammonia.count,2);
};

function dnaClick(number){
	//Buy one DNA for the cost of 40 sugar and 100 carbon dioxide and 100 water
	if(water.count >= 100 && carbondioxide.count >= 100 && sugar.count >=40){
		dna.count = dna.count + number;
		water.count = water.count - number*100;
		carbondioxide.count = carbondioxide.count - number*100;
		sugar.count = sugar.count - number*40;
	}
	document.getElementById("dna").innerHTML = numberFormatter(dna.count,2);
	document.getElementById("water").innerHTML = numberFormatter(water.count,2);
	document.getElementById("carbondioxide").innerHTML = numberFormatter(carbondioxide.count,2);
	document.getElementById("sugar").innerHTML = numberFormatter(sugar.count,2);
};

function virusClick(number){
	//Buy one virus for the cost of 500 water and 200 carbon dioxide and 100 sugar
	if(water.count >= 500 && carbondioxide.count >= 200 && sugar.count >= 100){
		virus.count = virus.count + number;
		water.count = water.count - number*500;
		carbondioxide.count = carbondioxide.count - number*200;
		sugar.count = sugar.count - number*100;
	}
	document.getElementById("virus").innerHTML = numberFormatter(virus.count,2);
	document.getElementById("water").innerHTML = numberFormatter(water.count,2);
	document.getElementById("carbondioxide").innerHTML = numberFormatter(carbondioxide.count,2);
	document.getElementById("sugar").innerHTML = numberFormatter(sugar.count,2);
};

function bacteriaClick(number){
	//Buy one bacteria for the cost of 1000 water and 500 carbon dioxide and 200 sugar
	if(water.count >= 1000 && carbondioxide.count >= 500 && sugar.count >= 200){
		bacteria.count = bacteria.count + number;
		water.count = water.count - number*1000;
		carbondioxide.count = carbondioxide.count - number*500;
		sugar.count = sugar.count - number*200;
	}
	document.getElementById("bacteria").innerHTML = numberFormatter(bacteria.count,2);
	document.getElementById("water").innerHTML = numberFormatter(water.count,2);
	document.getElementById("carbondioxide").innerHTML = numberFormatter(carbondioxide.count,2);
	document.getElementById("sugar").innerHTML = numberFormatter(sugar.count,2);
};

function siltClick(number){
	//Buy one silt for the cost of 1500 methane and 3000 water and 1200 carbon dioxide and 500 phosphate
	if(methane.count >= 1500 && water.count >= 3000 && carbondioxide.count >= 1200 && phosphate.count >= 500){
		silt.count = silt.count + number;
		methane.count = methane.count - number*1500;
		water.count = water.count - number*3000;
		carbondioxide.count = carbondioxide.count - number*1200;
		phosphate.count = phosphate.count - number*500;
	}
	document.getElementById("silt").innerHTML = numberFormatter(silt.count,2);
	document.getElementById("methane").innerHTML = numberFormatter(methane.count,2);
	document.getElementById("water").innerHTML = numberFormatter(water.count,2);
	document.getElementById("carbondioxide").innerHTML = numberFormatter(carbondioxide.count,2);
	document.getElementById("phosphate").innerHTML = numberFormatter(phosphate.count,2);
};

function cellClick(number){
	//Buy one cell for the cost of 5000 water and 1000 carbon dioxide and 500 sugar
	if(water.count >= 5000 && carbondioxide.count >= 1000 && sugar.count >= 500){
		cell.count = cell.count + number;
		water.count = water.count - number*5000;
		carbondioxide.count = carbondioxide.count - number*1000;
		sugar.count = sugar.count - number*500;
	}
	document.getElementById("cell").innerHTML = numberFormatter(cell.count,2);
	document.getElementById("water").innerHTML = numberFormatter(water.count,2);
	document.getElementById("carbondioxide").innerHTML = numberFormatter(carbondioxide.count,2);
	document.getElementById("sugar").innerHTML = numberFormatter(sugar.count,2);
};

function seedClick(number){
	//Buy one seed for the cost of 20000 water and 5000 carbon dioxide and 1000 sugar
	if(water.count >= 20000 && carbondioxide.count >= 5000 && sugar.count >= 1000){
		seed.count = seed.count + number;
		water.count = water.count - number*20000;
		carbondioxide.count = carbondioxide.count - number*5000;
		sugar.count = sugar.count - number*1000;
	}
	document.getElementById("seed").innerHTML = numberFormatter(seed.count,2);
	document.getElementById("water").innerHTML = numberFormatter(water.count,2);
	document.getElementById("carbondioxide").innerHTML = numberFormatter(carbondioxide.count,2);
	document.getElementById("sugar").innerHTML = numberFormatter(sugar.count,2);
};

function dropletClick(number){
	//Buy one droplet for the cost of 1e9 water
	if(water.count >= 1e9){
		droplet.count = droplet.count + number;
		water.count = water.count - number*1e9;
	}
	document.getElementById("droplet").innerHTML = numberFormatter(droplet.count,2);
	document.getElementById("water").innerHTML = numberFormatter(water.count,2);
};