var genioPgt = ''
function genioPergunta01(alternativa){
    while(true){
        var alternativa = prompt('Digite a letra correspondente à sua resposta:')
        if(alternativa == 'b' || alternativa == 'B'){
            alert('Certa Resposta!!! ')
            genioPgt = '../Projeto final módulo 1/Html/genioP02.html'
            break                    
        } else{
            alert('Esta você errou!!!')
            genioPgt = '../Projeto final módulo 1/Html/gameOver.html'
            break                              
        } 
    }
    window.location.href = genioPgt
}

function genioPergunta02(alternativa){
    while(true){
        var alternativa = prompt('Digite a letra correspondente à sua resposta:')
        if(alternativa == 'b' || alternativa == 'B'){
            alert('Certa Resposta!!! ')
            genioPgt = '../Projeto final módulo 1/Html/genioP03.html'
            break                    
        } else{
            alert('Esta você errou!!!')
            genioPgt = '../Projeto final módulo 1/Html/gameOver.html'
            break                              
        } 
    }
    window.location.href = genioPgt
}


function genioPergunta03(alternativa){
    while(true){
        var alternativa = prompt('Digite a letra correspondente à sua resposta:')
        if(alternativa == 'c' || alternativa == 'C'){
            alert('Certa Resposta!!! ')
            genioPgt = '../Projeto final módulo 1/Html/genioP04.html'
            break                    
        } else{
            alert('Esta você errou!!!')
            genioPgt = '../Projeto final módulo 1/Html/gameOver.html'
            break                              
        } 
    }
    window.location.href = genioPgt
}

function genioPergunta04(alternativa){
    while(true){
        var alternativa = prompt('Digite a letra correspondente à sua resposta:')
        if(alternativa == 'c' || alternativa == 'C'){
            alert('Certa Resposta!!! ')
            genioPgt = '../Projeto final módulo 1/Html/sucesso.html' 
            break                   
        } else{
            alert('Esta você errou!!!')
            genioPgt = '../Projeto final módulo 1/Html/gameOver.html'
            break                              
        } 
    }
    window.location.href = genioPgt
}