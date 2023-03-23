let disp = document.querySelector("#disp") as HTMLInputElement;
let btn = document.querySelectorAll(".btn") ;
let memory = 0;
// Fetching Values Of Every Button Using Event Listners 
btn.forEach(btn =>{
  btn.addEventListener('click', e => {   
   let btnval = (e.target as any).value;
    disp.value += btnval;
  
});
})

// Function Of Calculation Operations
function calculate():void{
    let x = disp.value;
    disp.value = eval(x);
}
// Function Of Clear Screen 
function clr():void{
    disp.value = "";
    (document.getElementById("trig")! as HTMLElement as any)! .selected = true;
    (document.getElementById("fun")! as HTMLElement as any)! .selected = true;
   
}
// Function Of Backspace
function back() :void{
    disp.value = disp.value.substr(0, disp.value.length - 1);
}
// Function Of PI
function pi():void{
    const pi = 3.14159265359;
    if(disp.value == ""){
        disp.value = (pi).toString();
    }else{
      disp.value = (Number(disp.value) * (pi)).toFixed(3);
    }    
}
// Function Of Euler's Number
function e():void{
    const e = 2.71828182846;
    if(disp.value == ""){
        disp.value = (e).toFixed(3);
    }else{
      disp.value  =  (Number(disp.value) * e).toFixed(3);
    }
}
// Function Of 2 Power N
function twoIntoN():void{
    disp.value = (Math.pow(2, Number(disp.value))).toString();
}
// Function Of X Square 
function xpow():void{
    let xpow = disp.value;
    disp.value = (Number(xpow )* Number(xpow)).toString();
}
// Function Of One By Num
function oneByNum():void{
    let num = disp.value;
    disp.value = (1 / Number(num)).toFixed(3);
}
// Function Of Absolute
function abslt():void{
    disp.value = (Math.abs( Number(disp.value))).toFixed(3);
}
// Function Of Exponent 
function expo():void{
  disp.value = (Math.exp( Number(disp.value))).toFixed(3);
}
// Function Of Square Root 
function sqroot():void{
  disp.value = (Math.sqrt( Number(disp.value))).toFixed(3);
}
// Function Of Factorial 
function fact():void{
    let fact = 1;
    for(let num=1; num<=Number(disp.value); num++){
        fact *= num;
    }
    disp.value = (fact).toFixed(3);
}
// Function Of 10 Power X
function powX(){
    disp.value = (Math.pow(10, Number(disp.value))).toFixed(3);
}
// Function Of Log
function log(){
    disp.value = (Math.log10 (Number(disp.value))).toFixed(3);
}
// Function Of Natural Log 
function natLog(){
    disp.value = (Math.log(Number(disp.value))).toFixed(3);
}
// Function Of Plus/Minus Button
function plusMinus():void{
    let x = disp.value;
    let y = Number(x) * -1;
    disp.value = (y).toFixed(3);
}
// Functionality Of Trignometry Button
function trignometry():void{
    let x = (document.getElementById("trigno") as HTMLElement as any) .value;
    if(x == "sin"){
        let y = Math.sin(Number(disp.value) * Math.PI / 180);
        disp.value = y.toFixed(2);
    }
    else if(x == "cos"){
        let y = Math.cos(Number(disp.value) * Math.PI / 180);
        disp.value = y.toFixed(2);
    }
    else if(x == "tan"){
        let y = Math.tan(Number(disp.value) * Math.PI / 180);
        disp.value = y.toFixed(2);
    }
    
}
// Functionality Of Function Button
function func():void{
    let x = (document.getElementById("func") as HTMLElement as any).value;
    if(x == "abs"){
        disp.value = Math.abs(Number(disp.value)).toFixed(2);
    }
    else if(x == "floor"){
        disp.value = (Math.floor(Number(disp.value))).toFixed(3);
    }
    else if(x == "ceil"){
        disp.value = (Math.ceil(Number(disp.value))).toFixed(3);
    }
    else if(x == "trignometry"){
        disp.value = x;
    }
}
// Function To Calculate Degree to Radian
function deg(){
    disp.value = (180/Number(disp.value) * Math.PI ).toFixed(2);
}
// Function Of Fixed Exponent
function fixedExpo(){
    disp.value = Number(disp.value).toExponential();
}
// Memory Functions
// Clear Memory 
function mcFunc(){
    localStorage.clear();
    memory = 0;
}
// Read Memory
function mrFunc(){
    disp.value = (memory).toFixed(3);
    console.log(memory);
}
// Memory Plus 
function mpFunc(){
    memory = Number(localStorage.getItem("ms")) + Number(disp.value);
    // console.log(memory);
    localStorage.setItem("ms",(memory).toFixed(3));
    // localStorage.setItem("ms",memory) += disp.value;
}
// Memory Minus 
function mmFunc(){
    memory = Number(localStorage.getItem("ms")) - Number(disp.value);
    // console.log(memory);
    localStorage.setItem("ms",(memory).toFixed(3));
    // localStorage.setItem("ms",memory);
}
// Save Memory
function msFunc(){
    memory = eval(disp.value);
    console.log(memory);
    localStorage.setItem("ms",(memory).toFixed(3));
}


