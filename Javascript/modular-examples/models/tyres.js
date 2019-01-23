var tyres = {
    wheels : "",
    tyres : "",
    pressure : "",
    width : 0
}

function createTyres(){
    var newTyres = Object.create(tyres);
    newTyres.wheels="BBS Empire";
    newTyres.tyres="Michellin Road Street";
    newTyres.pressure = "57pounds";
    newTyres.width=200;
    console.log("Tyres Created...");
    return newTyres;
}



module.exports.tyres = createTyres()