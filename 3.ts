// create a function thattakes a string as an arument and returns a promise
// ti return a `hello` plus the string ans a string

// function returnStringPromise(name:string):Promise<string> {
//     return new Promise((thing)=>{
//         console.log("hello"+thing)
//     })
// }
// returnStringPromise("jack")
function returnaPromise(name:string):Promise<string> {
        return Promise.resolve(`hello ${name}`)
}
console.log(returnaPromise(`jim`))

returnaPromise(`shaggy`).then((response)=>{
    console.log(`something something  ${response}`)
    console.log(response)
})