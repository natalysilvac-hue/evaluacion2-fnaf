const containerSection = document.querySelector(".container");
const apiURL = "https://raw.githubusercontent.com/johannpeterson/fnaf-api/main/animatronics.json";

async function getAnimatronicos() {
    return [
        { name: "Freddy Fazbear", type: "Animatrónico Principal" },
        { name: "Bonnie", type: "Guitarrista" },
        { name: "Chica", type: "Cantante / Cupcake" },
        { name: "Foxy", type: "Pirata de la Cueva" },
        { name: "Golden Freddy", type: "Misterioso" },
        { name: "Toy Freddy", type: "Versión Toy" },
        { name: "Toy Bonnie", type: "Versión Toy" },
        { name: "Toy Chica", type: "Versión Toy" },
        { name: "Mangle", type: "Desarmado" },
        { name: "The Puppet", type: "Caja de Música" },
        { name: "Balloon Boy", type: "Vendedor de Globos" },
        { name: "Springtrap", type: "Poseído" }
    ];
}

async function renderAnimatronicos() {
    const animatronicos = await getAnimatronicos();
    
    // Abre la fila con la rejilla exacta de Bootstrap de tu imagen
    let template = `<div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">`;

    animatronicos.forEach((animatronic) => {
        template += `
            <div class="col">
                <div class="p-3">
                    <h5>${animatronic.name}</h5>
                    <p>${animatronic.type}</p>
                </div>
            </div>
        `;
    });

    template += `</div>`; // Cierra el row

    if (containerSection) {
        containerSection.innerHTML = template;
    }
}

renderAnimatronicos();