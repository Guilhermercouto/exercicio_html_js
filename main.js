    const formulario = document.getElementById('meuFormulario');
    const mensagem = document.getElementById('mensagem');

    formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);
    
    if (campoB > campoA) {
        mensagem.innerHTML = 'Formulário válido!';
        mensagem.classList.remove('invalido');
        mensagem.classList.add('valido');
    } else {
        mensagem.innerHTML = 'Formulário inválido!';
        mensagem.classList.remove('valido');
        mensagem.classList.add('invalido');
    }
    });
