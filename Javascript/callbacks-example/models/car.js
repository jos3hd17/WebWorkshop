var car_info = {
    model:"",
    year:0,
    factory:"",
    createCar(factory, year){
        return factory + " In "+ year;
    }
}

const engine = {
    piston:"",
    cylinders:"",
    horsepowers:0
}

function setInfoEngine(){
    var new_engine =  Object.create(engine)
    new_engine.piston = 6;
    new_engine.cylinders = 6;
    new_engine.horsepowers = 200;
    return new_engine
}

function fillEngine(...engine){
    return {
        ...engine,
        name:"RB26"
    }
}


(function(car){
    console.log(car);

})(createCar(setCarInfo, newEngine, newTyres))

function setCarInfo(){
    var newCarInfo = Object.create(car_info);
    newCarInfo.model="Skyline";
    newCarInfo.year=2002;
    newCarInfo.factory = "Nissan";
    newCarInfo.createCar(newCarInfo.factory, newCarInfo.year) 
    console.log(newCarInfo);
    console.log("Info Car is loaded...");
    return newCarInfo;
}


function createCar(setCarInfo, engine, tyres){
    var car_info = setCarInfo();
    var engine_info = engine(setInfoEngine, fillEngine);
    var tyres_info = tyres(18,"BBS Empire");
    return {
        car_info,
        engine_info,
        tyres_info
    } 
}

function newEngine(setEngine, fillEngine){
    var engine = setEngine(fillEngine());
    console.log(engine);
    console.log("Engine Created...");
    return engine;
}

function newTyres(size, wheels){
    var tyres = {
        size: size,
        wheels: wheels
    }
    console.log(tyres);
    console.log("Tyres built...");
    return tyres;
}



