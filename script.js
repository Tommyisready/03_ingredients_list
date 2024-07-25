// Liste des ingrédients stockée dans un tableau
var ingredients = [
  "Pâtes",
  "Oeuf",
  "Sel",
  "Poivre",
  "Lardon",
  "Oignon",
  "Parmesan",
];

// Calculer le nombre d'ingrédients
var numberOfIngredients = ingredients.length;

// Afficher le nombre d'ingrédients dans le paragraphe avec l'ID ingredientCount
document.getElementById("ingredientCount").innerText =
  "Le nombre d'ingrédients nécessaires pour la recette est : " +
  numberOfIngredients +
  ".";

// Récupérer l'élément où la liste sera affichée
var ingredientList = document.getElementById("ingredientList");

// Ajouter chaque ingrédient à la liste
for (var i = 0; i < ingredients.length; i++) {
  var listItem = document.createElement("li"); // Créer un nouvel élément de liste
  listItem.innerText = ingredients[i]; // Définir le texte de l'élément de liste
  ingredientList.appendChild(listItem); // Ajouter l'élément de liste à la liste
}
