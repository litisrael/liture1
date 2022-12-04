import { writeFile, readFile } from 'node:fs'
import { exit } from 'node:process'

const me={
    firstName: "isr",
    lastName: "lit"
}
writeFile("./me.json", JSON.stringify(me),(err)=>{
    if(err){
        console.log(err)
        exit(1)
    }
    readFile("./me.json", (err, me)=>{
        if(err)
        console.error(err)
        exit(2)
    })
    console.log("%s",me)

})
let i= 0
const bla = "subir"

console.log('helow wworld')
const saludar = ((nom)  =>  `"buenas tardes" ${nom}`);
console.log(saludar('babosos'))

console.log(saludar(bla))

console.log(saludar('litvacks y mizrahis'))

