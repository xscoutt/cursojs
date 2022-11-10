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
            img.setAttribute("style","border-radius: 50%" )
        img.setAttribute("width", "250")
        img.setAttribute("height", "250")
            if (idade >= 0 && idade < 3) {
                //Bebe
                img.setAttribute('src', 'bebeh.png') 
    
            } else if (idade <= 11) {
                //Criança
                img.setAttribute('src', 'kidh.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoh.png')
            } else  {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            img.setAttribute("style","border-radius: 50%" )
        img.setAttribute("width", "250")
        img.setAttribute("height", "250")
            if (idade >= 0 && idade < 3) {
                //Bebe
            } else if (idade < 4) {
                //Criança
            } else if (idade < 21) {
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