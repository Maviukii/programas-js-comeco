const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")


frm.addEventListener( "submit" , (e) =>{
    
 e.preventDefault()

const titulo = Number(frm.inValor.value);
const tempoDeuso = Number(frm.inMin.value);



const calc = Math.ceil(tempoDeuso/15);
const calc2 = (titulo * calc).toFixed(2);

resp1.innerText = `Valor a pagar R$: ${calc2}`


});