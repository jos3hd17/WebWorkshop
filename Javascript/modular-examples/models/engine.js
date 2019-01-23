var engine = {
    cylinders: 6,
    horsepower:20,
    name: "RB26",
    createEngine(hp,cyl){
        console.log("Is almost "+ hp +" Hp, and "+cyl+" Cylinders");
        console.log("Engine Created...");
    }
}

function setupEngine(){
    var createEngine =  Object.create(engine);
    createEngine.cylinders=6;
    createEngine.horsepower = 200;
    createEngine.name = "RB26";
    createEngine.createEngine(200,6);
    return createEngine;
}

module.exports.engine = setupEngine();