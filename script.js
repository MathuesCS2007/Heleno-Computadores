document.addEventListener("DOMContentLoaded", function() {
    const titleText = "Heleno Computadores";
    const titleElement = document.getElementById("title-text");
    const mainTitle = document.getElementById("main-title");
    const subText = document.getElementById("sub-text");
    const options = document.getElementById("options");
    let index = 0;

    function typeEffect() {
        if (index < titleText.length) {
            titleElement.innerHTML += titleText[index];
            index++;
            setTimeout(typeEffect, 150);
        } else {
            setTimeout(() => {
                document.getElementById("intro").classList.add("fade-out");

                setTimeout(() => {
                    document.getElementById("intro").style.display = "none";
                    document.getElementById("main-content").style.opacity = "1";

                    // Animação do título principal
                    mainTitle.style.animation = "moveUp 1.5s ease-in-out forwards";

                    // Exibir o subtítulo depois do título estar no lugar
                    setTimeout(() => {
                        subText.style.animation = "fadeIn 1.5s ease-in-out forwards";

                        // Exibir os botões depois da frase
                        setTimeout(() => {
                            options.style.animation = "fadeIn 1.5s ease-in-out forwards";
                        }, 1000);
                    }, 1500);
                }, 1000);
            }, 1000);
        }
    }

    setTimeout(typeEffect, 500);
});
