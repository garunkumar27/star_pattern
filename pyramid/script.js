let numb=5,str="";
for(i=1;i<numb;i++){
    // Printing Spaces
    for(j=0;j<numb-i;j++){
        str+=" ";
        
    }
    // console.log(str);
    // Printing Stars
    // 2*i-1=>2*1-1=1 --> from this we get only one start at first and then the i value get changed the star get improved
    for(k=0;k<2*i-1;k++){
        str+="*";
       
    }
    // console.log(str);
    // str+="<br>";
    str+="\n";
}
console.log(str);
// document.write(str);