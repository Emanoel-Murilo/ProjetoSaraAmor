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
    const inicio = new Date(2021, 11, 29); 
    const hoje = new Date();
    
    let anos = hoje.getFullYear() - inicio.getFullYear();
    let meses = hoje.getMonth() - inicio.getMonth();
    let dias = hoje.getDate() - inicio.getDate();
    let horas = hoje.getHours() - inicio.getHours();
    let minutos = hoje.getMinutes() - inicio.getMinutes();
    let segundos = hoje.getSeconds() - inicio.getSeconds();
    
    if (segundos < 0) {
      segundos += 60;
      minutos--;
    }
    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      // Get the number of days in the previous month
      const prevMonth = new Date(hoje.getFullYear(), hoje.getMonth(), 0);
      dias += prevMonth.getDate();
      meses--;
    }
    if (meses < 0) {
      meses += 12;
      anos--;
    }
    // Build th
    // e display string with pluralization
    function plural(value, singular, plural) {
      return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
    }
    const anosText = plural(anos, "ano", "anos");
    const mesesText = plural(meses, "mês", "meses");
    const diasText = plural(dias, "dia", "dias");
    const horasText = plural(horas, "hora", "horas");
    const minutosText = plural(minutos, "minuto", "minutos");
    const segundosText = plural(segundos, "segundo", "segundos");
    const resultado = `${anosText}, ${mesesText}, ${diasText}, ${horasText}, ${minutosText} e ${segundosText}`;
    document.getElementById("diasJuntos").textContent = resultado;
  }
  // Update every second
  calcularDiasJuntos();
  setInterval(calcularDiasJuntos, 1000);

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


// animação do boneco 
