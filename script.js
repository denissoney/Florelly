
/* =========================================================
   MENU MOBILE
   ========================================================= */
const menuMobile = document.getElementById("menuMobile");
const navigation = document.querySelector(".navigation");
menuMobile.addEventListener("click", () => { navigation.classList.toggle("active");});
/* =========================================================
   FECHAR MENU AO CLICAR EM UM LINK
   ========================================================= */
document.querySelectorAll(".navigation a").forEach(link => { link.addEventListener("click", () => { navigation.classList.remove("active");});});
/* =========================================================
   ELEMENTOS DO MODAL
   ========================================================= */
const flowerModal = document.getElementById("flowerModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalFlowerImage");
const modalName = document.getElementById("modalFlowerName");
const modalDesc = document.getElementById("modalFlowerDescription");
/* =========================================================
   ELEMENTOS DA IMAGEM EM TELA CHEIA
   ========================================================= */
const fullscreen = document.getElementById("imageFullscreen");
const fullscreenImg = document.getElementById("fullscreenImage");
const fullscreenCaption = document.getElementById("fullscreenCaption");
const fullscreenClose = document.getElementById("fullscreenClose");
/* =========================================================
   FOTO DO PRODUTO → TELA CHEIA
   ========================================================= */
document.querySelectorAll(".flower-image img").forEach(img => { img.addEventListener("click", event => { event.stopPropagation();
        const card = img.closest(".flower-card");
        if (!card) return; fullscreenImg.src = img.src;
        fullscreenCaption.textContent = card.dataset.flower || "";
        fullscreen.classList.add("active");
        document.body.style.overflow = "hidden";
    });

});
/* =========================================================
   BOTÃO "VER DETALHES" → MODAL
   ========================================================= */
document.querySelectorAll(".flower-button").forEach(button => { button.addEventListener("click", event => { event.stopPropagation();
        const card = button.closest(".flower-card");
        if (!card) return;
        const image = card.querySelector(".flower-image img");
        const description = card.querySelector(".flower-info p");
        if (!image || !description) return;
        modalImage.src = image.src;
        modalName.textContent = card.dataset.flower || "Flor";
        modalDesc.textContent = description.textContent;
        flowerModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

});
/* =========================================================
   FECHAR MODAIS
   ========================================================= */
function closeModals() { flowerModal.classList.remove("active");
    fullscreen.classList.remove("active");
    document.body.style.overflow = "";
}
/* =========================================================
   BOTÕES DE FECHAR
   ========================================================= */
modalClose.addEventListener("click", closeModals);
modalOverlay.addEventListener("click", closeModals);
fullscreenClose.addEventListener("click", closeModals);
/* =========================================================
   CLICAR FORA DA IMAGEM EM TELA CHEIA
   ========================================================= */
fullscreen.addEventListener("click", event => {
    if (event.target === fullscreen) {
        closeModals();
    }

});
/* =========================================================
   TECLA ESC → FECHAR
   ========================================================= */
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModals();
    }
});

