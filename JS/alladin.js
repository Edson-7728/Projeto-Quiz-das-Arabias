        var alladinPgt = ''
        function alladinPergunta01(alternativa){
            while(true){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'd' || alternativa == 'D'){
                alert('Certa Resposta!!! ')
                alladinPgt = '../Html/alladinP02.html' 
                break                   
            } else{
                alert('Esta você errou!!!')
                alladinPgt = '../Html/gameOver.html' 
                break                             
            }
        }
            window.location.href = alladinPgt
        }

        
        
        function alladinPergunta02(alternativa){
            while(true){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'c' || alternativa == 'C'){
                alert('Certa Resposta!!! ')
                alladinPgt = '../Html/alladinP03.html'
                break                    
            } else{
                alert('Esta você errou!!!')
                alladinPgt = '../Html/gameOver.html'
                break                              
            }
        }
            window.location.href = alladinPgt
        }
        
        function alladinPergunta03(alternativa){
            while(true){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'a' || alternativa == 'A'){
                alert('Certa Resposta!!! ')
                alladinPgt = '../Html/alladinP04.html'
                break                   
            } else{
                alert('Esta você errou!!!')
                alladinPgt = '../Html/gameOver.html'
                break                             
            } 
        } 
            window.location.href = alladinPgt
        }
        
        function alladinPergunta04(alternativa){
            while(true){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'b' || alternativa == 'B'){
                alert('Certa Resposta!!! ')
                alladinPgt = '../Html/sucesso.html'
                break                   
            } else{
                alert('Esta você errou!!!')
                alladinPgt = '../Html/gameOver.html'
                break                              
            } 
        }
            window.location.href = alladinPgt
        }

    
