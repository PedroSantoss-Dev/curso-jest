
const Media =  (p,m,c,e) => {
 let port = p;
 let mat = m;
 let cien = c;
 let ef = e;
 let media= (port + mat + cien + ef )/4  ;

 if( media > 7){
    return `Você foi aprovado com media `
 }
 if((media > 5) && (media < 7) ){
    return `por pouco voçê não passa `

 }
 if(media <= 5){
 return `reprovado }`
 }
 if(!media){
   return null
 }
}

console.log(Media())

module.exports =Media;