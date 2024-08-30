document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("expanded");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("modal-caption");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".expand-btn").forEach(button => {
        button.addEventListener("click", function() {
            const img = this.previousElementSibling;
            const description = this.getAttribute("data-description");

            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = description;
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(e) {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    });
});

