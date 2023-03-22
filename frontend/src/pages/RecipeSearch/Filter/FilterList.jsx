function FilterList({ recipeListArr, setDietFilter }) {
    //todo props what filters do i display extract that to its own funciton
    if (!recipeListArr) {
        return <div>no filters available</div>;
    }
    let dietOptions = new Set();
    let otherOptionsAvailable = new Set();

    let otherOptions = [
        "cheap",
        "dairyFree",
        "glutenFree",
        "vegan",
        "vegetarian",
        "veryPopular",
        "veryHealthy",
    ];

    //check recipe list and add all recipes diets filters the text string one
    recipeListArr.forEach((recipe) => {
        //extract diets from recipe
        let dietArr = recipe.diets;
        if (dietArr.length > 0) {
            dietArr.forEach((categoryStr) => {
                dietOptions.add(categoryStr);
            });
        }

        //extract other options from recipe the BOOLEANs
        otherOptions.forEach((item) => {
            if (recipe[item]) otherOptionsAvailable.add(item);
        });
    });

    //all diet options and other options extracted from recipe list
    let dietOptionsArr = Array.from(dietOptions.values());
    let otherOptionsAvailableArr = Array.from(otherOptionsAvailable.values());

    ///REMOVE OR ADD DIET FILTER
    function addRemoveDietFilter(str) {
        setDietFilter((state) => {
            if (state.includes(str)) {
                // console.log(state);
                // console.log("filter already in selected", str);
                return state.filter((category) => category !== str);
            }
            return [...state, str];
        });
    }
    function addRemoveOtherOptionFilter(str) {}

    return (
        <>
            <h2>Dietary options</h2>
            <section>
                {dietOptionsArr.length > 0 ? (
                    <ul className="filter-options">
                        {dietOptionsArr.map((item, index) => {
                            return (
                                <li
                                    onClick={() => {
                                        addRemoveDietFilter(item);
                                    }}
                                    className="btn"
                                    key={index + item + 1}>
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <></>
                )}
            </section>
            <section>
                <h2>other options</h2>
                <ul className="filter-options">
                    {otherOptionsAvailableArr.map((option, index) => {
                        return (
                            <li key={option + index + 2} className="btn">
                                <span>{option}</span>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}

/// FILTER *****************************************

//todo filter recipes by checking diets string array and boolean values
function filterRecipeList(recipeListArr, recipeFilters, otherOptions) {
    //filter.diets = string []
    //filter.otherOptions = String []  but will be checked against booleans
    console.log("filter", recipeFilters.length);
    let filteredList = recipeListArr;

    if ((!recipeFilters && !otherOptions) || recipeFilters.length <= 0) {
        console.log("no filters");
        return recipeListArr;
    }

    if (recipeFilters.length > 0) {
        filteredList = recipeListArr.filter((recipe) => {
            //todo check diets property on recipe matches filter
            let recipeDiets = recipe.diets;

            for (let i = 0; i < recipeDiets.length; i++) {
                //recipe fails to have all filters
                if (!recipeFilters.includes(recipeDiets[i])) {
                    console.log(recipe.id, "failed", recipeDiets[i]);
                    return false;
                }

                //all filters where found
                return true;
            }

            //todo check booleans
            console.log("recipe : ", recipe.id, "failed");
            return false;
        });
    }

    return filteredList;
}
