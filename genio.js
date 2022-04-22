var genioPgt = ''
function genioPergunta01(alternativa){
    var alternativa = prompt('Digite a letra correspondente à sua resposta:')
    if(alternativa == 'b' || alternativa == 'B'){
        alert('Certa Resposta!!! ')
        genioPgt = 'genioP02.html'                    
    } else{
        alert('Esta você errou!!!')
        genioPgt = 'gameOver.html'                              
    } 
    window.location.href = genioPgt
}

function genioPergunta02(alternativa){
    var alternativa = prompt('Digite a letra correspondente à sua resposta:')
    if(alternativa == 'b' || alternativa == 'B'){
        alert('Certa Resposta!!! ')
        genioPgt = 'genioP03.html'                    
    } else{
        alert('Esta você errou!!!')
        genioPgt = 'gameOver.html'                              
    } 
    window.location.href = genioPgt
}


function genioPergunta03(alternativa){
    var alternativa = prompt('Digite a letra correspondente à sua resposta:')
    if(alternativa == 'c' || alternativa == 'C'){
        alert('Certa Resposta!!! ')
        genioPgt = 'genioP04.html'                    
    } else{
        alert('Esta você errou!!!')
        genioPgt = 'gameOver.html'                              
    } 
    window.location.href = genioPgt
}

function genioPergunta04(alternativa){
    var alternativa = prompt('Digite a letra correspondente à sua resposta:')
    if(alternativa == 'c' || alternativa == 'C'){
        alert('Certa Resposta!!! ')
        genioPgt = 'sucesso.html'                    
    } else{
        alert('Esta você errou!!!')
        genioPgt = 'gameOver.html'                              
    } 
    window.location.href = genioPgt
}