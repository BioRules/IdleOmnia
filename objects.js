//Define material class
function material(name, count, generators, genCost, genMulti, baseRate, currentRate, dependents, depRate) {
	this.name = name;
	this.count = count;
	this.generators = generators;
	this.genCost = genCost;
	this.genMulti = genMulti;
	this.baseRate = baseRate;
	this.currentRate = currentRate;
	this.dependents = dependents;
	this.depRate = depRate;
};

function upgradeRate(mat, multi){
	mat.currentRate = mat.currentRate + (mat.generators*(mat.baseRate*multi-mat.baseRate));
	reduceDepRates(mat, multi);
	mat.baseRate = mat.baseRate * multi;
}

function reduceDepRates(mat, multi){
	var i;
	
	if(mat.dependents[i]!="none"){
		//Cycle all dependents
		for(i=0;i<mat.dependents.length;i++){
			var dep = mat.dependents[i];
			var depRate = mat.depRate[i]*(mat.baseRate*multi-mat.baseRate)*mat.generators;
			
			//Reduce dependant rate
			dep.currentRate = dep.currentRate - depRate;
		}
	}
}

//Elementary materials
var electrons = new material("Electrons",0,0,10,1.05,1,0,["none"],[0]);
var protons = new material("Protons",0,0,10,1.05,1,0,["none"],[0]);
var photons = new material("Photons",0,0,10,1.05,1,0,["none"],[0]);
var neutrons = new material("Neutrons",0,0,20,1.05,1,0,[electrons,protons],[1,1]);

//Element materials
var hydrogen = new material("Hydrogen",0,0,15,1.05,1,0,[electrons,protons],[1,1]);
var helium = new material("Helium",0,0,10,1.1,1,0,[electrons,protons,neutrons],[2,2,2]);
var carbon = new material("Carbon",0,0,10,1.05,1,0,[electrons,protons,neutrons],[6,6,6]);
var nitrogen = new material("Nitrogen",0,0,10,1.05,1,0,[electrons,protons,neutrons],[7,7,7]);
var oxygen = new material("Oxygen",0,0,10,1.05,1,0,[electrons,protons,neutrons],[8,8,8]);
var phosphorus = new material("Phosphorus",0,0,10,1.05,1,0,[electrons,protons,neutrons],[15,15,16]);

//Compound materials
var methane = new material("Methane",0,0,20,1.05,1,0,[hydrogen, carbon],[4,1]);
var ammonia = new material("Ammonia",0,0,20,1.05,1,0,[hydrogen, nitrogen],[3,1]);
var water = new material("Water",0,0,20,1.05,1,0,[hydrogen, oxygen],[2,1]);
var carbondioxide = new material("Carbon Dioxide",0,0,20,1.05,1,0,[carbon, oxygen],[1,2]);
var phosphate = new material("Phosphate",0,0,20,1.05,1,0,[hydrogen, oxygen, phosphorus],[3,4,1]);
var sugar = new material("Sugar",0,0,20,1.05,1,0,[hydrogen, carbon, oxygen],[12,6,6]);

//Micro materials
var protein = new material("Protein",0,0,20,1.05,1,0,[methane, ammonia, carbondioxide],[1,1,1]);
var dna = new material("DNA",0,0,20,1.05,1,0,[sugar, carbondioxide, water],[40,100,100]);
var virus = new material("Virus",0,0,15,1.05,1,0,[sugar, carbondioxide, water],[100,200,500]);
var bacteria = new material("Bacteria",0,0,15,1.05,1,0,[sugar, carbondioxide, water],[200,500,1000]);
var silt = new material("Silt",0,0,10,1.1,1,0,[carbondioxide, methane, water, phosphate],[1200,1500,3000,500]);
var cell = new material("Cell",0,0,10,1.1,1,0,[sugar, carbondioxide, water],[500,1000,5000]);
var seed = new material("Seed",0,0,10,1.1,1,0,[sugar, carbondioxide, water],[1000,5000,20000]);
var droplet = new material("Droplet",0,0,20,1.05,1,0,[water],[1e9]);

//Plankton materials
var amoeba = new material("Amoeba",0,0,20,1.05,1,0,[water, protein, cell],[100,100,1]);
var diatom = new material("Diatom",0,0,20,1.05,1,0,[protein, bacteria, amoeba],[100000,100000,1000]);
var eukaryote = new material("Eukaryote",0,0,20,1.05,1,0,[protein, dna, diatom],[500000,1000,50]);
var phytoplankton = new material("Phytoplankton",0,0,20,1.05,1,0,[protein, dna, eukaryote],[1e6,100000,20]);
var polyp = new material("Polyp",0,0,20,1.05,1,0,[protein, dna, phytoplankton],[5e6,500000,10]);

//Plant materials
var algae = new material("Algae",0,0,10,1.1,1,0,[photons, carbondioxide, seed],[100000,1000,1]);
var grass = new material("Grass",0,0,10,1.1,1,0,[photons, carbondioxide, seed],[1e6,10000,10]);
var fern = new material("Fern",0,0,10,1.1,1,0,[photons, carbondioxide, seed],[2e6,20000,50]);
var bush = new material("Bush",0,0,10,1.1,1,0,[photons, carbondioxide, seed],[4e6,40000,100]);
var tree = new material("Tree",0,0,10,1.1,1,0,[photons, carbondioxide, seed],[10e6,100000,500]);

//Bug materials
var gnat = new material("Gnat",0,0,10,1.1,1,0,[polyp,grass],[1000,100]);
var ant = new material("Ant",0,0,10,1.1,1,0,[silt,grass,gnat],[10000,1000,10]);
var earthworm = new material("Earthworm",0,0,10,1.1,1,0,[silt,polyp],[100000,20000]);
var bee = new material("Bee",0,0,10,1.1,1,0,[grass,bush],[5000,1]);
var mantis = new material("Mantis",0,0,10,1.1,1,0,[tree,ant],[1,20]);

//Animal materials
var fish = new material("Fish",0,0,10,1.1,1,0,[phytoplankton,polyp],[50000,120000]);
var bird = new material("Bird",0,0,10,1.1,1,0,[tree,earthworm,fish],[10,200,20]);
var reptile = new material("Reptile",0,0,10,1.1,1,0,[grass,fish,bird],[20000,200,25]);
var mammal = new material("Mammal",0,0,10,1.1,1,0,[tree,fish,bird,reptile],[100,1000,100,10]);

//Terrain materials
var snow = new material("Snow",0,0,10,1.1,1,0,[droplet],[10000]);
var puddle = new material("Puddle",0,0,10,1.1,1,0,[droplet],[20e6]);
var sand = new material("Sand",0,0,10,1.1,1,0,[silt],[1e6]);
var dirt = new material("Dirt",0,0,10,1.1,1,0,[silt],[2.5e6]);
var stone = new material("Stone",0,0,10,1.1,1,0,[silt],[5e6]);

//Biome materials
var river = new material("River",0,0,10,1.1,1,0,[phytoplankton,fish,puddle],[5e6,10000,30000]);
var lake = new material("Lake",0,0,10,1.1,1,0,[fish,reptile,river],[50000,5000,5]);
var ocean = new material("Ocean",0,0,10,1.1,1,0,[fish,lake],[200000,10]);
var plain = new material("Plain",0,0,10,1.1,1,0,[grass,mammal,dirt],[100000,1000,100000]);
var mountain = new material("Mountain",0,0,10,1.1,1,0,[tree,bird,stone],[1000,5000,500000]);
var desert = new material("Desert",0,0,10,1.1,1,0,[bush,reptile,sand],[1000,1000,1e6]);
var forest = new material("Forest",0,0,10,1.1,1,0,[bush,tree,mammal],[5e6,1e6,5000]);
var jungle = new material("Jungle",0,0,10,1.1,1,0,[fern,bush,tree,ant,mammal],[1e6,10e6,2e6,1e9,10000]);
var tundra = new material("Tundra",0,0,10,1.1,1,0,[snow],[10e6]);

//Planetary materials
var comet = new material("Comet",0,0,10,1.1,1,0,[snow,dirt,stone],[80e6,10e6,10e6]);
var asteroid = new material("Asteroid",0,0,10,1.1,1,0,[stone,comet],[10e6,10]);
var terrestrial = new material("Terrestrial",0,0,10,1.1,1,0,[river,lake,ocean,plain,mountain,desert,forest,jungle,tundra],[100,10,5,20,10,5,20,20,5]);
var gasgiant = new material("Gas Giant",0,0,10,1.1,1,0,[hydrogen,methane,carbondioxide],[1e28,1e25,1e24]);

//Solar materials
var star = new material("Star",0,0,10,1.1,1,0,[photons,hydrogen,helium],[1e60,1e59,1e56]);
var solarsystem = new material("Solar System",0,0,10,1.1,1,0,[comet,asteroid,terrestrial,gasgiant,star],[10000,1000,4,4,1]);