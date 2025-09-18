
let containerMain = document.querySelector(".container");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const closeBtn = document.getElementById("closeBtn");

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(elements => {
        elements.data.forEach(singleElement => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card', 'sizing-card', 'no-border-radius');

            cardElement.innerHTML = `
            <a href="#">
                <div>
                    <img class="debug" src="${singleElement.url}" alt="${singleElement.url}">
                </div>
                <div class="card-body">
                    <span>${singleElement.date}</span>
                    <p class="card-text">Some quick example text</p>
                </div>
            </a>
            `;

            // al click mostra overlay
            cardElement.addEventListener('click', (e) => {
                e.preventDefault();
                overlayImg.src = singleElement.url;
                overlay.style.display = "flex"; // mostra overlay
            });

            containerMain.append(cardElement);
        });
});

// chiudi overlay
closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});
overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.style.display = "none";
});





