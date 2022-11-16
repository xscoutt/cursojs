function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 3) {
                //Bebe
                img.setAttribute('src', 'bebeh.png') 
    
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'kidh.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoh.png')
             } else if (idade < 100) {
                    //Idoso
                    img.setAttribute('src', 'idoso.png')
                  
            } else  {
                //Fantasma
               
                img.setAttribute('src', 'fantasma.png') 
            }
           
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //Bebe
            } else if (idade < 4) {
                //Criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemf.png')
            //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 

        res.appendChild(img) 
    }
    
}
