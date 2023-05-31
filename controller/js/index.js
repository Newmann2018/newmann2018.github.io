  function mostrarVideo(id) {
            // Oculta todos os vídeos
            var videos = document.getElementsByClassName("video-container");
            for (var i = 0; i < videos.length; i++) {
                videos[i].style.display = "none";
            }

            // Exibe o vídeo do tema clicado
            var video = document.getElementById(id);
            video.style.display = "block";
        }