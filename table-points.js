const tablePointsContainer = document.querySelector("#table-points");
const tablePointsList = document.createElement("ul");
tablePointsContainer.appendChild(tablePointsList);

this.points.forEach((obstacle) => {
  const listItem = document.createElement("li");
    const image = document.createElement("img");
    image.src = TYPES[obstacle];
    listItem.appendChild(image);

  tablePointsList.appendChild(listItem);
});

