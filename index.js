let name = "Aki"
let language = "JavaScript"
function introduction(name){
    return(`Hi, my name is ${name}.`)
}
console.log(`Hi, my name is ${name}.`)


function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)

name ="Gracie"
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
language= "Python"
function introductionWithLanguageOptional(name, language= "JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`) 
}
console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)