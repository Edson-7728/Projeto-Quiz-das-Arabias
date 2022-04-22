        var jasminePgt = ''
        function jasminePergunta01(alternativa){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'a' || alternativa == 'A'){
                alert('Certa Resposta!!! ')
                jasminePgt = 'jasmineP02.html'                    
            } else{
                alert('Esta você errou!!!')
                jasminePgt = 'gameOver.html'                              
            } 
            window.location.href = jasminePgt
        }

        function jasminePergunta02(alternativa){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'b' || alternativa == 'B'){
                alert('Certa Resposta!!! ')
                jasminePgt = 'jasmineP03.html'                    
            } else{
                alert('Esta você errou!!!')
                jasminePgt = 'gameOver.html'                              
            } 
            window.location.href = jasminePgt
        }

        function jasminePergunta03(alternativa){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'c' || alternativa == 'C'){
                alert('Certa Resposta!!! ')
                jasminePgt = 'jasmineP04.html'                    
            } else{
                alert('Esta você errou!!!')
                jasminePgt = 'gameOver.html'                              
            } 
            window.location.href = jasminePgt
        }

        function jasminePergunta04(alternativa){
            var alternativa = prompt('Digite a letra correspondente à sua resposta:')
            if(alternativa == 'b' || alternativa == 'D'){
                alert('Certa Resposta!!! ')
                jasminePgt = 'sucesso.html'                    
            } else{
                alert('Esta você errou!!!')
                jasminePgt = 'gameOver.html'                              
            } 
            window.location.href = jasminePgt
        }