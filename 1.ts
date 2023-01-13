// //create a function that accepts an array of strings and prints out each one
function stringAcceptor(array: string[]){
    array.forEach((element)=>{
        console.log(element);
    })
}
const testring:string[] = [`check one`, "anohter", "turd"];
stringAcceptor(testring)

// function oStrings(strings)
function stringchecker(array: string[]){
  array.forEach((element)=>{
    console.log(element);
  })
}
const aStrings: string[] =["this string", "that string", "the other string"];
stringchecker(aStrings);
// let stringArray["this string"; "that string"; "the other string"]
// stringchecker(stringArray)
// var test =[
//     value: str
// ]

// interface aStrings {
//     array[]: string;
// }
// var astring = ["this strgin", "that stfing", "theotherstronf"];
interface Character {
    getDamage(): number;
    getName(): string;
}
class PlayerCharacter implements Character{
   name: string;
    constructor(name:string){
        this.name =name;
    }
        getDamage(): number {
            
            return 1;
        }
        getName(): string {
            return this.name;
        }
}
class Warlock extends PlayerCharacter{}
class Druid extends PlayerCharacter{}
class Mob implements Character{
    getName(): string {
        return "tony montana";
    }
    getDamage(): number {
        return 3;
    }
}

function fight (PlayerCharacter:Character, mob:Character){
    console.log("I deal", PlayerCharacter.getDamage())
    console.log(`mob deals ${mob.getDamage()}`)
}
const myCharacter = new Warlock("wonklock")
const mob = new Mob()
fight (myCharacter, mob);

function returnsPromise():Promise<string>{
    return new Promise((resolve)=>{resolve("ayo")})
}
function returnMorePromise(): Promise<string[]>{
    return new Promise((resolve)=>{resolve(aStrings)})
}
returnMorePromise().then((it)=>{
    console.log(it)
})

type User={
    name:string;
    isAdmin:boolean
}
const wonky:User={
    name:`Wonky`,
    isAdmin:false
}
const horsey:User={
    name:`hors`,
    isAdmin:true
}
type Message ={
    user: User,
    keks:number,
    words: string
    emojis: string[]
}
const discordMessage:Message = {
    user:wonky,
    keks: 4,
    words:'winner winner chikn dinner',
    emojis:aStrings
}
function printMessage(message){
    console.log(`your message was:${message.words}`)
}
printMessage(discordMessage)

function newMessage(user:string, words: string):Message {
    const message:Message = {
        user : horsey,
        keks: 0,
        words: words,
        emojis: []
    }
    return message;
}

console.log(newMessage(`joey`, `wtf`));