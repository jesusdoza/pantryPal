export function CombinedRecipeData(searchResultsArr, recipeInstructionsArr) {
    let combined = [];

    searchResultsArr.forEach((recipe) => {
        const id = recipe.id;

        for (let i = 0; i < recipeInstructionsArr.length; i++) {
            if (id === recipeInstructionsArr[i].id) {
                combined.push({ ...recipe, ...recipeInstructionsArr[i] });
            }
        }
    });
    return combined;
}
