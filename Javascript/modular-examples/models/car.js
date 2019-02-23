var engine = require('./engine');
var tyres = require('./tyres');


var car = {
    engine : "",
    tyres : "",
    year : 0,
    name : "",
    fastest_lap:0
}

function setupCar(){
    const new_car =  Object.create(car);
    new_car.year = 2002;
    new_car.engine= engine;
    new_car.tyres = tyres
    new_car.name="Nissan Skyline";
    new_car.fastest_lap = 157;
    console.log("Car Created...");
    
    return new_car;
}


module.exports.car = setupCar();
