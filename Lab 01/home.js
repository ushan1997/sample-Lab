//01
//This is git demo for lab
let sayHellowWorld=function Fun1(){
    //function expression//get  function as a object functional programming using function pointer
    console.log("Hellow World");
}

function callHellowWorld(X){
    X();
}

callHellowWorld(sayHellowWorld);

//02
var object = {
    firstName:"Ushan",
    lastName :"Anuka",
    age:20,
    getName : function(){
        return this.age;
    }
};

console.log(object.getName())

//03
var vehicleName = 'Toyota';

function printVehicleName(){
    console.log("1st"+this.vehicleName);
}

var Vehicle ={
    vehicleName:'Supra',
    getVehicleName:function(){
        return printVehicleName(this.vehicleName);
    }
};


printVehicleName();
console.log("2nd"+Vehicle.getVehicleName());


//04

function getTax(tax){
    return function (amount){
        return tax * amount;
    }
}

var amount = prompt("Enter Ammount =");

var calculator = getTax(0.25);
console.log(calculator(amount));


//05
fetch('https://jsonplaceholder.typicode.com/posts')
//Promise
//web api is a ferch
//The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline,
//we fetch json file across the network and print in the console
.then(function(responce){
    return responce.json();
})
//
.then(function(data){
    console.log(data);
});
//
