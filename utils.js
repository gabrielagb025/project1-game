const scores = {
  yellow: 3,
  blue: 4,
  green: 2
}

const pointsContainer = document.querySelector("#points-container");

const typeKeys = Object.keys(TYPES);

const scoresKeys = Object.keys(scores);

const scoresVal = Object.values(scores);

function points() {
    
    if (scores.yellow) {
        const firstDiv = document.createElement("div");
        const imgElement = document.createElement("img");
        typeKeys.forEach((key) => {
            if (key === scoresKeys[0]) {
                imgElement.src = TYPES[key];
            }
        });
        firstDiv.appendChild(imgElement)
        pointsContainer.appendChild(firstDiv);
    }

    if (scores.blue) {
        const secondDiv = document.createElement("div");
        const imgElement = document.createElement("img");
        typeKeys.forEach((key) => {
            if (key === scoresKeys[1]) {
                imgElement.src = TYPES[key];
            }
        })
        secondDiv.appendChild(imgElement)
        pointsContainer.appendChild(secondDiv);
    }

    if (scores.green) {
        const thirdDiv = document.createElement("div");
        const imgElement = document.createElement("img");
        typeKeys.forEach((key) => {
            if (key === scoresKeys[2]) {
                imgElement.src = TYPES[key];
            }
        })
        thirdDiv.appendChild(imgElement)
        pointsContainer.appendChild(thirdDiv);
    }

    return pointsContainer;
}

