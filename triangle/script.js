// Left triangle pattern 
// let lft=document.querySelector("#left").innerHTML="Left Triangle Pattern";
// let numb=5,val="";
// for(i=1;i<=numb;i++){
//     for(j=0;j<i;j++){
//         val+="*";
//     }
//     val+="<br>";
//     // val+="\n";
// }
// // console.log(val);
// document.write(val);


let rt=document.querySelector("#right").innerHTML="Right Triangle Pattern";
let num=5,str="";
for(i=1;i<=num;i++){
    // Printing Spaces
    for(j=0;j<num-i;j++){
        str+=" ";
    }
    for(k=0;k<i;k++){
        str+="*";
    }
    str+="<br>";
    // str+="\n"
}
// console.log(str);
document.write(str);

// Downward Triangle Pattern
let n=5,vals="";
for(i=0;i<n;i++){
    //Printing Star
    for(j=0;j<n-i;j++){
        vals+="*"
    }
    // vals+="\n"
    vals+="<br>";
}
// document.write(vals);

// 