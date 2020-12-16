const getDog = document.querySelector(".button");
getDog.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("loadend", () => {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    const drinkPic = document.createElement("img");
    drinkPic.src = data.drinks[0].strDrinkThumb;
    document.body.appendChild(drinkPic);
    const drinkHowTo = document.createElement("p");
    drinkHowTo.src = data.drinks[0].strInstructions;
    document.body.appendChild(drinkHowTo);
  });
  xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
});
