// Left triangle pattern 
let lft=document.querySelector("#left").innerHTML="Left Triangle Pattern";
let lftCnt=document.querySelector("#left_star");
let numb=5,val="";
for(i=1;i<=numb;i++){
    for(j=0;j<i;j++){
        val+="*";
    }
    val+="<br>";
    // val+="\n";
}
lftCnt.innerHTML=val;
// console.log(val);


let rt=document.querySelector("#right").innerHTML="Right Triangle Pattern";
let rtCnt=document.querySelector("#right_star");
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
rtCnt.innerHTML=str
// console.log(str);
// document.write(str);

// Downward Triangle Pattern
let dnCnt=document.querySelector("#down_star"), 
dn=document.querySelector("#down").innerHTML="Downward Triangle Pattern";

let n=5,vals="";
for(i=0;i<n;i++){
    //Printing Star
    for(j=0;j<n-i;j++){
        vals+="*"
    }
    // vals+="\n"
    vals+="<br>";
}
dnCnt.innerHTML=vals;
// console.log(vals);

//Hallow Triangle Pattern
let nu=6;hallow="";
for(i=1;i<=nu;i++){
	//Printing Star
	for(j=0;j<i;j++){
		if(i==nu){
			hallow+="*";
		}
		else{
			if(j==0||j==i-1){
				hallow+="*";
			}	
			    // Printing Spaces
			else{
				hallow+=" ";
				}
	}
	}
	hallow+="\n";
	//hallow+="<br>"
	
}
document.write(hallow);
console.log(hallow);