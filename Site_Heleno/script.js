document.addEventListener("DOMContentLoaded", function () {
    const titleText = "Heleno Computadores";
    const titleElement = document.getElementById("title-text");
    const mainTitle = document.getElementById("main-title");
    const subText = document.getElementById("sub-text");
    const options = document.getElementById("options");
    const mainContent = document.getElementById("main-content");
    const servicesList = document.getElementById("services-list");
    const completedServices = document.getElementById("completed-services"); // Adicionado para a galeria
    const aboutMe = document.getElementById("about-me");
    const backButton = document.getElementById("back-btn");
    const buttons = document.querySelectorAll(".nav-btn");

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
                    mainContent.style.opacity = "1";

                    mainTitle.style.animation = "moveToCorner 1.5s ease-in-out forwards";

                    setTimeout(() => {
                        subText.style.animation = "fadeIn 1.5s ease-in-out forwards";

                        setTimeout(() => {
                            options.style.animation = "fadeIn 1.5s ease-in-out forwards";
                        }, 1000);
                    }, 1500);
                }, 1000);
            }, 1000);
        }
    }

    setTimeout(typeEffect, 500);

    // Esconder conteúdo ao clicar nos botões
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            mainContent.style.opacity = "0";
            setTimeout(() => {
                mainContent.style.display = "none";
                backButton.style.display = "block";

                if (button.innerText === "Serviços") {
                    servicesList.style.display = "flex";
                } else if (button.innerText === "Serviços já realizados") {
                    completedServices.style.display = "flex"; // Mostra a galeria
                } else if (button.innerText === "Sobre mim") {
                    aboutMe.style.display = "flex";
                }
            }, 1000);
        });
    });

    // Ao clicar no botão "Voltar"
    backButton.addEventListener("click", () => {
        backButton.style.display = "none";
        servicesList.style.display = "none";
        completedServices.style.display = "none"; // Esconde a galeria
        aboutMe.style.display = "none";
        mainContent.style.display = "flex";

        setTimeout(() => {
            mainContent.style.opacity = "1";
        }, 500);
    });
});

function showFullScreen(src, caption, isVideo = false) {
    const fullscreenView = document.getElementById("fullscreen-view");
    const fullscreenContent = document.getElementById("fullscreen-content");
    const fullscreenCaption = document.getElementById("fullscreen-caption");

    fullscreenContent.innerHTML = isVideo
        ? `<video controls autoplay><source src="${src}" type="video/mp4"></video>`
        : `<img src="${src}" alt="${caption}">`;

    fullscreenCaption.textContent = caption;
    fullscreenView.style.display = "flex";
}

function closeFullScreen() {
    document.getElementById("fullscreen-view").style.display = "none";
}

