        var alladinPgt = ''
        function alladinPergunta01(alternativa){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'd' || alternativa == 'D'){
                alert('Certa Resposta!!! ')
                alladinPgt = 'alladinP02.html'                    
            } else{
                alert('Esta você errou!!!')
                alladinPgt = 'gameOver.html'                              
            } 
            window.location.href = alladinPgt
        }

        
        
        function alladinPergunta02(alternativa){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'c' || alternativa == 'C'){
                alert('Certa Resposta!!! ')
                alladinPgt = 'alladinP03.html'                    
            } else{
                alert('Esta você errou!!!')
                alladinPgt = 'gameOver.html'                              
            } 
            window.location.href = alladinPgt
        }
        
        function alladinPergunta03(alternativa){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'a' || alternativa == 'A'){
                alert('Certa Resposta!!! ')
                alladinPgt = 'alladinP04.html'                    
            } else{
                alert('Esta você errou!!!')
                alladinPgt = 'gameOver.html'                              
            } 
            window.location.href = alladinPgt   
        }
        
        function alladinPergunta04(alternativa){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'b' || alternativa == 'B'){
                alert('Certa Resposta!!! ')
                alladinPgt = 'sucesso.html'                    
            } else{
                alert('Esta você errou!!!')
                alladinPgt = 'gameOver.html'                              
            } 
            window.location.href = alladinPgt
        }

    
