const container = document.getElementById("projects-container");

projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    let screenshotsHTML = "";
    if (project.screenshots && project.screenshots.length > 0) {
        screenshotsHTML = project.screenshots
            .map((src, i) => `<img src="${src}" alt="${project.title}" class="project-screenshot" data-index="${i}">`)
            .join("");

        screenshotsHTML = `
        <div class="screenshot-gallery">
            <button class="scroll-btn left">&lt;</button>
            <div class="screenshot-wrapper">${screenshotsHTML}</div>
            <button class="scroll-btn right">&gt;</button>
        </div>`;
    }

    card.innerHTML = `
        ${screenshotsHTML}
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech:</strong> ${project.technologies}</p>
        <a href="${project.github}" target="_blank">GitHub</a>
        <a href="${project.demo}" target="_blank">Live Demo</a>
    `;

    container.appendChild(card);

    // Scrolling functionality
    const gallery = card.querySelector(".screenshot-wrapper");
    const btnLeft = card.querySelector(".scroll-btn.left");
    const btnRight = card.querySelector(".scroll-btn.right");

    btnLeft.addEventListener("click", () => {
        gallery.scrollBy({ left: -200, behavior: "smooth" });
    });
    btnRight.addEventListener("click", () => {
        gallery.scrollBy({ left: 200, behavior: "smooth" });
    });

    // Make screenshots clickable for modal
    const images = card.querySelectorAll(".project-screenshot");
    images.forEach(img => {
        img.addEventListener("click", () => {
            openModal(img.src);
        });
    });
});

// Modal functionality
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModalBtn = document.getElementById("close-modal");

function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
}

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if clicked outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


