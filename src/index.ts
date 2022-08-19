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


// it is needed to transform the array into an object were the key is the id of the object
interface PhoneElement{
    customerId:string,
    areaCode:string,
    num:string
}

interface objectOfPhoneElements{
    [key:string]:PhoneElement
}

const phoneList:PhoneElement[] = [
    { customerId: "0001", areaCode: "321", num: "123-4566" },
    { customerId: "0002", areaCode: "174", num: "142-3626" },
    { customerId: "0003", areaCode: "192", num: "012-7190" },
    { customerId: "0005", areaCode: "402", num: "652-5782" },
    { customerId: "0004", areaCode: "301", num: "184-8501" },
  ]


function toAnObjectPhoneElement<T>(myArray:T[],idGen:(arg:T)=> string):{[key:string]:T}{
    const objectSolution:{[k:string]:T} = {}
    myArray.forEach(element=>{
        const id = idGen(element)
        objectSolution[id] = {...element}
    })
    return objectSolution
}


const phoneObjects = toAnObjectPhoneElement(phoneList,(e)=>e.customerId)
console.log(phoneObjects)
const names = toAnObjectPhoneElement([{name:"mario"},{name:"jose"}],(e)=>e.name)


/////////////////////////////////////////
/////////// TESTING UTILITIES ///////////
//////// no need to modify these ////////
/////////////////////////////////////////
// @errors: 7006 7006 7006 7006 7006
console.clear()

function assertEquals<T>(
  found: T,
  expected: T,
  message: string
) {
  if (found !== expected)
    throw new Error(
      `❌ Assertion failed: ${message}\nexpected: ${expected}\nfound: ${found}`
    )
  console.log(`✅ OK ${message}`)
}

function assertOk(value: any, message: string) {
  if (!value)
    throw new Error(`❌ Assertion failed: ${message}`)
  console.log(`✅ OK ${message}`)
}
/// ---cut---

///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
const fruits = {
  apple: { color: "red", mass: 100 },
  grape: { color: "red", mass: 5 },
  banana: { color: "yellow", mass: 183 },
  lemon: { color: "yellow", mass: 80 },
  pear: { color: "green", mass: 178 },
  orange: { color: "orange", mass: 262 },
  raspberry: { color: "red", mass: 4 },
  cherry: { color: "red", mass: 5 },
}

interface Dict<T> {
  [k: string]: T
}

// Array.prototype.map, but for Dict
function mapDict<T,U>(input:Dict<T>,mapCb:(argument:T,newKey:string)=>U):Dict<U> {
  const solution:Dict<U> = {}
  for(let key in input){
    solution[key] = mapCb(input[key],key)
  }
  return solution
}

// Array.prototype.filter, but for Dict
function filterDict<T>(input:Dict<T>,filterCb:(searchElement:T)=>boolean): Dict<T> {
  const solution:Dict<T> ={}
  for(let key in input){
    if(filterCb(input[key])){
      solution[key] = input[key]
    }
  }
  return solution
}
// Array.prototype.reduce, but for Dict
function reduceDict<T,V>(input:Dict<T>,reduceCb:(acc:V,e:T)=>V,initialValue:V): V {
  let total:V  = initialValue
  for(let key in input){
    total = reduceCb(total,input[key])
  }
  return total 
}

/////////////////////////////////////////
///////////// TEST SUITE ///////////////
//////// no need to modify these ////////
/////////////////////////////////////////

// MAP
const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
  ...fruit,
  kg: 0.001 * fruit.mass,
  name,
}))
const lemonName: string = fruitsWithKgMass.lemon.name
// @ts-ignore-error
const failLemonName: number = fruitsWithKgMass.lemon.name
assertOk(
  fruitsWithKgMass,
  "[MAP] mapDict returns something truthy"
)
assertEquals(
  fruitsWithKgMass.cherry.name,
  "cherry",
  '[MAP] .cherry has a "name" property with value "cherry"'
)
assertEquals(
  fruitsWithKgMass.cherry.kg,
  0.005,
  '[MAP] .cherry has a "kg" property with value 0.005'
)
assertEquals(
  fruitsWithKgMass.cherry.mass,
  5,
  '[MAP] .cherry has a "mass" property with value 5'
)
assertEquals(
  Object.keys(fruitsWithKgMass).length,
  8,
  "[MAP] fruitsWithKgMass should have 8 keys"
)

// FILTER
// only red fruits
const redFruits = filterDict(
  fruits,
  (fruit) => fruit.color === "red"
)
assertOk(
  redFruits,
  "[FILTER] filterDict returns something truthy"
)
assertEquals(
  Object.keys(redFruits).length,
  4,
  "[FILTER] 4 fruits that satisfy the filter"
)
assertEquals(
  Object.keys(redFruits).sort().join(", "),
  "apple, cherry, grape, raspberry",
  '[FILTER] Keys are "apple, cherry, grape, raspberry"'
)

// REDUCE
// If we had one of each fruit, how much would the total mass be?
const oneOfEachFruitMass = reduceDict(
  fruits,
  (currentMass, fruit) => currentMass + fruit.mass,
  0
)
assertOk(
  redFruits,
  "[REDUCE] reduceDict returns something truthy"
)
assertEquals(
  typeof oneOfEachFruitMass,
  "number",
  "[REDUCE] reduceDict returns a number"
)
assertEquals(
  oneOfEachFruitMass,
  817,
  "[REDUCE] 817g mass if we had one of each fruit"
)