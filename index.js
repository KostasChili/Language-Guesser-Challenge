import {createRequire} from "module";
const require = createRequire(import.meta.url);
import {franc} from 'franc';
var langs = require('langs');
var col=require('colors');


const input = process.argv[2];
const langCode=franc(input); //input from argv and lang code
if (langCode==='und')
{
    console.log(`the phrase ${input.red} could not be identified`)
}
else 
{
const language= langs.where("3",langCode); 
console.log(language.name.green);
}