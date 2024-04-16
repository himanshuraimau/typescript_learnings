import { log } from "console";

function addTwo(num:number):number{
    return num+2;
}
function toUpper(str:string){   
    return str.toUpperCase();

}
function login(username:string, password:string,isLogin:boolean = true){
    return true;
}
addTwo(2);
toUpper("hello");
login("himanshu","password");

console.log(addTwo(2));




function consoleError(errm:string):void{
    console.log(errm);
}

function handleError(errm:string):never{
    throw new Error(errm);
}


