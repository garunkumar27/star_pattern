//Using Star pattern print Hallow Square
let val="",num=5;
// i loop is for Row
for(i=0;i<num;i++){
    // j-loop is for column
	for(j=0;j<num;j++){
		if(i==0||i==num-1){
			val+="*";
		}
			else{
				if(j==0||j==num-1){
                     // j==0,j==num-1 is to print the first and last column
					val+="*";
                    // console.log(val);
				}
				else{
					val+=" ";
                    // console.log(val);
				}
					
			}
			
	}
	val+="\n";
}
// document.write(val);
console.log(val);

//Using Star Pattern Printing Normal Square
// but in this we need to use space to achive the proper shaped square. Whatever the value we give the star 
// must present at 2nd place i.e(" *   ")=>value=5(_*_-_);  
let value="",inte=5;
for(i=0;i<inte;i++){
	for(j=0;j<inte;j++){
		if(i==0||i==inte-1){
		value+=" *"
	}
	else{
		if(j==0||j==inte-1){
			value+=" *   ";
			// console.log(value);
		}
	else{
		value+=" "
		// console.log(value);
	}
	}
	
	}
	value+="\n";
}
document.write(value);
console.log(value); 

