let b=4;
let a=-19;
{
    
    console.log("Inside the block: "+a);
    //if variable name is same still High prority to inner variable

}
console.log("Outside the Block: "+b);
console.log("Outside the block: "+a);
for(var i=1;i<=15;i++){
    console.log("2*"+i+"= "+(2*i));
}