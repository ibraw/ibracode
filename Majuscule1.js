
    var phrase = "Bien le bonjour !";
    var arrayString=phrase.split(''); 
    //console.log(arrayString);
    var espace = 0 ;

    for (let i=0; i < arrayString.length; i++){
 
      if (arrayString[i] != (" ")){
      
      if (espace % 2 == 0) {    

               arrayString[i]=arrayString[i].toLowerCase();
               espace +=1;

        } else {
           
              arrayString[i]=arrayString[i].toUpperCase();
              espace +=1;
    }
  }   
    
}    console.log(arrayString.join(''));
    
