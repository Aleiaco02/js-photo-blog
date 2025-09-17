
// dichiarazione variabili
let containerMain = document.querySelector(".container");

// assegnazione endpoint a variabile
const endPoint = "https://lanciweb.github.io/demo/api/pictures/";

// chiamata ajax api img
axios.get(endPoint)
    .then(elements => {
        let outputString = "";

        elements.data.forEach(singleElement => {
            console.log(singleElement);

            

            outputString += `
                <div class="card sizing-card no-border-radius">
                    <div>
                        <img class="pin" src="img/pin.svg" alt="pin">
                        <img class="debug" src="${singleElement.url}" alt="${singleElement.url}">
                    </div>
                    <div class="card-body">
                        <span>${singleElement.date}</span>
                        <p class="card-text">Some quick example text to build on the card</p>
                    </div>
                </div>
            `;
        });
        containerMain.innerHTML = outputString;


        


    })




