

const pointsContainer = document.querySelector("#points-container");

const typeKeys = Object.keys(TYPES);

function points(scores) {
    pointsContainer.innerHTML = ''
    Object.keys(scores).forEach((color, index) => { // [ yellow, blue, green]
        const eggContainer =  document.createElement("div");
        eggContainer.classList.add('egg-container')
        eggContainer.id = `egg-container-${index}`

        if (scores[color] > 0) {
            for (i = 0; i < scores[color]; i++) {
                const imgEgg = document.createElement("img");
                imgEgg.src = TYPES[color];
                eggContainer.append(imgEgg)
            }
        } else {
            console.log("no cojas más");
        }
       

        pointsContainer.append(eggContainer)
    })
}


