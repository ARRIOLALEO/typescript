/** 
 * create a promise that resolves after some time
 * @param n number of milliseconds before promise  resolves
 */
 function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}

export async function addNumbers(a:number, b:number) {
    await timeout(500);
    return a + b;
}
//== Run the program ==//
;
(async () => {
    console.log(await addNumbers(3, 4))
})();

const age = 6;
// between 500 and 1000
const RANDOM_WAIT_TIME = Math.round(Math.random() * 500 ) + 500
let startTime = new Date();
type timeEnd = number | Date
let endTime:timeEnd 

setTimeout(() => {
    endTime = 0
    endTime = new Date()
},RANDOM_WAIT_TIME);

function displayCar(car:{
    brand:string,
    year:number,
    battery?:number,
    color?:string
}):string{
    let str = `${car.brand} ${car.year}`
    if(car.battery !== undefined){
        str += car.battery
    }
    return str
}
console.log(displayCar({brand:"toyota",year:2002,color:"red"}))
const car:[string,string,number] = ["hello", "world", 100]
const cars:string[] =[]
cars.push("mario")
type info = number | Error
function data(information:info){
    if( information instanceof Error){
        console.log(information)    
    }else{
        console.log(information)
    }
}

type numberString = number | string
function sums(a:number,b:number):number
function sums(a:string,b:string) :string
function sums(a , b):number | string{
    const c = (a + b)
    return c
}


const myNewButton = document.createElement("button")

function addClickHandler(this:HTMLButtonElement,ev:MouseEvent):void{
    this.disabled = false
}   


myNewButton.addEventListener("click",addClickHandler)


class Car{
    protected openTheDoor:()=>{};
    constructor(
        public name:string, 
        public type:string,
        private vimNumber:number
        ){
        this.name = name;
        this.type = type;
        this.vimNumber = vimNumber;
    }

    private openTheDoorNow():void{
        console.log(`the car ${this.name} , is the type ${this.type}`)
    }
}
const newCar = new Car("12","45",155)

console.log(newCar)
// newCar.openTheDoorNow(); this one is not accessible here because is privateKey

class Boat{
    constructor(public name:string){
        this.name = name;
    }
   public float():any{
        console.log("im floatting")
    }
}
class Truck{
    constructor(public name:string){
        this.name = name;
    }
}

class Plain{
    constructor(public name:string){
        this.name = name;
    }
}

type transportMethod = Plain | Truck | Boat

const newTransport:transportMethod = new Plain("jose")
if(newTransport instanceof Boat){
    newTransport.float()
}else if(newTransport instanceof Plain){
    console.log("this is a new one")
} else if(newTransport instanceof Truck ){
    console.log("this is a new data")
}else{
    const notExist:never = newTransport
}

// we need to exhausts all the possibilities before to use never method.