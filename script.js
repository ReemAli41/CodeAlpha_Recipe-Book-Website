document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        { name: 'Pasta Carbonara', ingredients: 'Pasta, Eggs, Bacon, Parmesan Cheese', instructions: 'Cook pasta. Mix eggs, bacon, and cheese. Combine with pasta.', image: 'https://th.bing.com/th/id/OIP.4RYWSJ-DVTvwhqlP--vlqwHaIE?rs=1&pid=ImgDetMain' },
    ];

    displayRecipes();

    window.addRecipe = function () {
        const recipeIndex = document.getElementById('recipeIndex').value;
        const recipeName = document.getElementById('recipeName').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;
        const recipeImage = document.getElementById('recipeImage').value;

        if (recipeName && ingredients && instructions) {
            if (recipeIndex === '') {
                const newRecipe = { name: recipeName, ingredients, instructions, image: recipeImage };
                recipes.push(newRecipe);
            } else {
                recipes[recipeIndex] = { name: recipeName, ingredients, instructions, image: recipeImage };
            }

            document.getElementById('addRecipeForm').reset();
            displayRecipes();
        } else {
            alert('Please fill in all fields.');
        }
    };

    window.editRecipe = function (index) {
        const recipe = recipes[index];
        document.getElementById('recipeIndex').value = index;
        document.getElementById('recipeName').value = recipe.name;
        document.getElementById('ingredients').value = recipe.ingredients;
        document.getElementById('instructions').value = recipe.instructions;
        document.getElementById('recipeImage').value = recipe.image;
    };

    window.deleteRecipe = function (index) {
        recipes.splice(index, 1);
        displayRecipes();
    };

    window.saveRecipe = function () {
        addRecipe();
    };

    window.cancelEdit = function () {
        document.getElementById('addRecipeForm').reset();
        document.getElementById('recipeIndex').value = '';
    };

    function displayRecipes() {
        const recipeList = document.getElementById('recipe-list');
        recipeList.innerHTML = '';

        recipes.forEach((recipe, index) => {
            const recipeItem = document.createElement('div');
            recipeItem.className = 'recipe-item';
            recipeItem.innerHTML = `
                <h3>${recipe.name}</h3>
                <img src="${recipe.image}" alt="${recipe.name}">
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <button onclick="editRecipe(${index})">Edit</button>
                <button onclick="deleteRecipe(${index})">Delete</button>
            `;
            recipeList.appendChild(recipeItem);
        });
    }
});
