//1
//This is for github lab
function getValue(callBack){
    let value =100;

    return new Promise(function (next){
        setTimeout(function(){
            next(value);
        })

    },1000);
    
}

getValue().then(function(newValue){
    console.log(newValue);
});
  

//2

function Vehicle(type){
    this.type = type;
    Vehicle.VehicleCount++ ;
    
}
Vehicle.prototype.drive = function(){
    console.log("Vehicle is driving");

}


 Vehicle.VehicleCount =0;//static varable

 const vehicle = new Vehicle('car');

vehicle.drive();

console.log(Vehicle.VehicleCount);
console.log(vehicle.type);





function Car(type){
    Vehicle.call(this,type);
    this.type =type;
}


Car.prototype =Object.create(Vehicle.prototype);
Car.prototype.constructor =Car;

Car.prototype.balanceWheels= function(){
    console.log("Wheels are balanced");
}
   
Car.prototype.getType = function(){
    return this.type;
}


Car.prototype.balanceWheels();

console.log(Vehicle.VehicleCount);

const car = new Car('BMW');

//Car.prototype.print();

console.log(car.getType());
console.log(car.drive());


//3

let Vehicle = type =>{
    this.type = type;
    Vehicle.VehicleCount++ ;
}

// Vehicle.prototype.drive = ()=> {
//     console.log("Vehicle is driving");
// }

Vehicle.VehicleCount =0;

const vehicle = new Vehicle('car');


//Vehicle.prototype.drive();

console.log(Vehicle.VehicleCount);
console.log(vehicle.type);


let Car = type =>{
    Vehicle.call(this,type);
    this.type =type;
}


Car.prototype =Object.create(Vehicle.prototype);
Car.prototype.constructor =Car;

Car.prototype.balanceWheels= ()=>{
    console.log("Wheels are balanced");
}
   
Car.prototype.getType = ()=>{
    return this.type;
}


Car.prototype.balanceWheels();

console.log(Vehicle.VehicleCount);

const car = new Car('BMW');

//Car.prototype.print();

console.log(car.getType());
console.log(car.drive());


//4



//await only works inside async functions within regular JavaScript code
//await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, 
// then return the resulting value.
// You can use await when calling any function that returns a Promise, including web API functions.


 async function getValue(){
    let value =100;

    //await console.log("Running  the function");//waiting for this function execute

    return   await new Promise(function (next){
        setTimeout(function(){
            value =10000;
            next(value);
        },1000);

    }
   
    );
    
}

getValue().then(function(newValue){
    console.log(newValue+10);
});
  

//5

class Vehicle{

    static VehicleCount =0;

    constructor(type){
        this.type = type;
        Vehicle.VehicleCount++;
    }

    drive() {
        console.log("Vehicle is driving");
    }


}
const vehicle = new Vehicle('Car');

vehicle.drive();
console.log(vehicle.type);
console.log(Vehicle.VehicleCount);

class Car extends Vehicle{

    constructor(type){
        super(type);
        this.type =type;
    }

    balanceWheels(){
        console.log("Wheels are balanced");
    }

}

const car = new Car('BMW');

car.balanceWheels();
console.log(car.type);
console.log(Vehicle.VehicleCount);
car.drive();