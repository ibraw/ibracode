
//var  = process.argv[2];  // declaration 2 arguments en entrée
  
    var hello = 'bien le bonjour !';
    var arrayString [i] = hello.split(''); 
    var espace = 0 ;
    var phr = []  ;
    for (let i=0; i <= arrayString.length; i++){

      // if ( i==0){

      if (espace % 2 == 0 ) {    

               phr[i] = arrayString[i].toUpperCase();
               espace +=1;
        } else {
           
              phr[i] = arrayString[i].toLowerCase();
              espace += 1;
    }
//}
    
} 
    console.log(phr);
