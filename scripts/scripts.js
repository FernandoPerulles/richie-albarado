document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const mainContent = document.getElementById("main-content");

    const content = {
        about: "<h2>About Me</h2><p>Contenido sobre mí.</p>",
        music: "<h2>Listen to My Music</h2><p>Contenido de mi música.</p>",
        photos: "<h2>Photos</h2><p>Contenido de mis fotos.</p>",
        social: "<h2>Social Media</h2><p>Contenido de mis redes sociales.</p>",
    };

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const section = card.getAttribute("data-section");
            mainContent.innerHTML = content[section];
        });
    });
});
