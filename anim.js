var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [
    { text: "Je t'aime de tout mon coeur Liam", time: 6 },
    { text: ".", time: 8 },
    { text: "..", time: 9 },
    { text: "...", time: 10 },
    { text: "Él la estaba esperando con una flor amarilla", time: 16 },
    { text: "Ella lo estaba soñando con la luz en su pupila", time: 23 },
    { text: "Y el amarillo del sol iluminaba la esquina", time: 31 },
    { text: "(La esquina)", time: 36 },
    { text: "Lo sentia tan cercano, lo sentia desde niña", time: 36.20 },
    { text: "Lo sentia tan cercano, lo sentia desde niña", time: 39 },
    { text: "ella sabia que el sabia que algun dia pasaria", time: 45 },
    { text: "ella sabia que el sabia que algun dia pasaria", time: 45.80 },
    { text: "Que vendria a buscarla con sus flores amarillas", time: 50 },
    { text: "Que vendria a buscarla con sus flores amarillas", time: 52 },
    { text: "no te apures, no detengas", time: 56 },
    { text: "El instante del encuentro", time: 57.10 },
    { text: "Esta dicho que es un hecho", time: 58.10 },
    { text: "No la pierdas, no hay derecho", time: 59.90 },    
    { text: "No te olvides que la vida casi nunca esta dormida", time: 66 },
    { text: "No te olvides que la vida casi nunca esta dormida", time: 69 },
    { text: "En ese bar desierto nos esperaba el encuentro", time: 92 },
    { text: "(El encuentro)", time: 95.50 },
    { text: "Ella llego en limusina", time: 97 },
    { text: "Amarilla, por supuesto", time: 100 },
    { text: "El solo se acercaba de frente, la miró tan de frente", time: 108},
    { text: "Toda una vida soñada y no pudo decir nada", time: 116},
    { text: "Ella sabía que él sabía que algún día pasaría", time: 123 },
    { text: "Que vendría a buscarla con sus flores amarillas", time: 127 },
    { text: "No te apures, no te detengas", time: 133 },
    { text: "El instante del encuentro", time: 134 },
    { text: "Esta dicho que es un hecho", time: 136 },
    { text: "No la pierdas, no hay derecho", time: 137 },
    { text: "No te olvides que la vida casi nunca esta dormida", time: 141 },
    { text: "No te olvides que la vida casi nunca esta dormida", time: 146 },
    { text: "Flores amarillas", time: 160 },
    { text: "Ella sabia que él sabía que algún día pasaría", time: 168 },
    { text: "Que vendria a buscarla con sus flores amarillas", time: 171 },
    { text: "No te apures no detengas", time: 178.5 },
    { text: "el instante del encuentro", time: 179 },
    { text: "esta dicho que es un hecho", time: 181 },
    { text: "No la pierdas no hay derecho", time: 182 },
    { text: "No te olvides que la vida casi nunca esta dormida", time: 185 },
    { text: "No te olvides que la vida casi nunca esta dormida", time: 190 },
    { text: "Ella sabia que el sabia", time: 195 },
    { text: "Él sabia, ella sabia", time: 197 },
    { text: "Que él sabia, ella sabia", time: 199 },
    { text: "Y se olvidaron de sus...", time: 201 },
    { text: "Flores amarillas", time: 203 },
    { text: "Flores amarillas", time: 206 },
];

// Animar las letras
function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
    );

    if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
    } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
    }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
    setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);