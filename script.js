function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            verificaImagem(idade)
            img.setAttribute('src', imgIdade+'_m.jpg')
        }else{
            genero = 'Mulher'
            verificaImagem(idade)
            img.setAttribute('src', imgIdade+'_f.jpg')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

var imgIdade = ''

function verificaImagem(idade){
    if (idade >= 0 && idade < 10){
        imgIdade = 'bebe'
    }
    else if (idade < 21){
        imgIdade = 'jovem'
    }
    else if (idade < 50){
        imgIdade = 'adulto'
    }
    else if (idade >= 50){
        imgIdade = 'idoso'
    }
}