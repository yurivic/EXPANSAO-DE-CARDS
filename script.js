const painel = document.querySelectorAll('.painel');

painel.forEach(expansao => {
    expansao.addEventListener('click', () => {
        expansao.style.transition = 'width 0.6s ease-in'
            
        const expandido = Array.from(painel).find(p => p.style.width === '780px');
        // Array from cria um array onde permite que o método find possa ser usado para cada painel em seguida 
        // Find percorre cada elemento do array até achar um painel que atende a condição de largura e tamanho

        if (expandido && expandido !== expansao) {
            
            expandido.style.width = '73.03px'
            expandido.style.height = '450px'
        }
        //Validação para selecionar apenas um por vez

        if (expansao.style.width === '780px') {
            
            expansao.style.width = '73.03px'
            expansao.style.height = '450px'
        } else {
            
            expansao.style.width = '780px';
            expansao.style.height = '450px';
        }
    });
});