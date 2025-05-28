let Names = [];

for(let index = 0; index < 7; index++){
     let name = prompt(`coloque o ${index+1} nome`)
     Names[index] = name;

    
}


  for( let index = 6; index >=0; index--){
      console.log(Names[index]); 
  }

