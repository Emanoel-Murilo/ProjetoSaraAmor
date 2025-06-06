function mostrarMensagem() {
    document.getElementById("mensagemFinal").style.display = "block";
    window.scrollTo({
        top: document.getElementById("mensagemFinal").offsetTop,
        behavior: "smooth"
    });
    
    // Start playing the Spotify song
    if (window.spotifyController) {
        window.spotifyController.play();
    }
}

// tempo juntos

function calcularDiasJuntos() {
    const inicio = new Date(2021, 11, 29); // Exemplo: 14 de fevereiro de 2023
    const hoje = new Date();

    const diff = hoje - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("diasJuntos").textContent = dias;
}

calcularDiasJuntos();

// musica

window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('musica');
    const options = {
        uri: 'https://open.spotify.com/track/7tmvvRmUqzCRjRx9ub8K7i?si=5cf42b41a8d54dd6',
        width: "50%",
        height: "158px",
    };
    const callback = (EmbedController) => {
        window.spotifyController = EmbedController; 
    };
    IFrameAPI.createController(element, options, callback);
};
