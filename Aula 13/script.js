function carregar (){
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var minuto = data.getMinutes()
msg.innerHTML = `<strong>Agora são<strong> ${hora} horas<strong>.`
if (hora >= 0 && hora < 12) {
     //BOM DIA
   imagem.src = 'manha.png'
   DocumentTimeline.body.style.background = '#e2cd9f'
  //
} else if (hora >= 12 && hora< 18) {
    //BOA TARDE!
    imagem.src = 'tarde.png'
    document.body.style.background = '#b9846f'

} else {
    //BOA NOITE!
    imagem.src = 'noite.png'
    document.body.style.background = '#515154'
   
} 
}
carregar()
