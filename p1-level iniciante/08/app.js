const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")


frm.addEventListener( "submit" , (e) => {

    e.preventDefault()

 const nome = frm.inNome.value;
 const Nota1 = Number(frm.primeiraNota.value);
 const Nota2 = Number(frm.segundaNota.value) ;

 const soma = Nota1+Nota2/5


 resp1.innerText = `media das notas ${soma.toFixed(2)}`

 if(soma >= 7)
    {
        resp2.innerText = `parabens voçe foi aprovado (a) ${nome} `
        resp2.style.color = "blue"
    }

else{
    resp2.innerText = `Ops ... ${nome} voce foi reprovado(a)`
    resp2.style.color = "red"

}




})

