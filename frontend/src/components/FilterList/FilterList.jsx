import { Filter } from "./FilterList.styles";

import CreatableSelect from "react-select/creatable";

export function FilterList({
    recipeListArr,
    setDietFilter,
    dietFilter,
    setCategoryFilter,
    categoryFilter,
}) {
    //todo props what filters do i display extract that to its own funciton
    if (!recipeListArr) {
        return <div>no filters available</div>;
    }
    let dietOptions = new Set();
    let categoryOptionsAvailable = new Set();
    let filterOptions = [
        { value: "options", label: "label", otherthing: "otherthing" },
    ];
    let categoryOptions = [
        "cheap",
        "veryPopular",
        "veryHealthy",
        "sustainable",
        "lowFodmap",
    ];

    //check recipe list and add all recipes diets filters the text string one
    recipeListArr.forEach((recipe) => {
        //extract diets from recipe
        let dietArr = recipe.diets;

        if (dietArr.length > 0) {
            dietArr.forEach((dietStr) => {
                //category not already selected
                if (!dietFilter.includes(dietStr)) {
                    dietOptions.add(dietStr);
                }
            });
        }

        //extract other options from recipe the BOOLEANs
        categoryOptions.forEach((category) => {
            if (recipe[category] && !categoryFilter.includes(category)) {
                categoryOptionsAvailable.add(category);
            }
        });
    });

    //all diet options and other options extracted from recipe list
    let dietOptionsArr = Array.from(dietOptions.values());
    let otherOptionsAvailableArr = Array.from(
        categoryOptionsAvailable.values()
    );

    //todo create options function to clean up
    filterOptions = createSelectOptions({
        dietOptions: dietOptionsArr,
        otherOptions: otherOptionsAvailableArr,
    });

    ///REMOVE OR ADD DIET FILTER
    function addDietFilter(str) {
        setDietFilter((state) => {
            //already in the filter remove it
            if (state.includes(str)) {
                return state.filter((category) => category !== str);
            }
            //add to filter
            return [...state, str];
        });
    }
    function removeDietFilter(str) {
        setDietFilter((state) => {
            return state.filter((category) => category !== str);
        });
    }
    function addCategoryFilter(str) {
        setCategoryFilter((state) => {
            if (state.includes(str)) {
                return state.filter((category) => category !== str);
            }
            return [...state, str];
        });
    }
    function removeCategoryFilter(str) {
        setCategoryFilter((state) => {
            return state.filter((category) => category !== str);
        });
    }

    return (
        <Filter className="main-filter-container">
            <section className="filter-container">
                <h2>Filter Results</h2>
                <CreatableSelect
                    closeMenuOnSelect={false}
                    isMulti
                    options={filterOptions}
                    onChange={(filters) => {
                        handleFilter(filters, {
                            diets: setDietFilter,
                            other: setCategoryFilter,
                        });
                    }}
                />
            </section>
        </Filter>
    );
}

//build options for react-select component to use
function createSelectOptions(allOptions) {
    let filterOptions = [];
    for (let options of Object.keys(allOptions)) {
        const newOptions = allOptions[options].map((filter) => {
            return { value: filter, label: filter, type: options };
        });

        //add options into single array
        filterOptions = filterOptions.concat(newOptions);
    }
    // console.log("filterOptions create options", filterOptions);
    return filterOptions;
}

///change the filter
// function handleFilter(filterArr:[], setters:{diets:setDiets, other: setOtheroptions}) {
function handleFilter(filterArr, setters) {
    let diets = [];
    let other = [];

    filterArr.forEach((event) => {
        //if filter is of dietOptionsarr type
        if (event.type === "dietOptions") {
            diets.push(event.value);
        }
        if (event.type === "otherOptions") {
            other.push(event.value);
        }
    });
    setters.diets(diets);
    setters.other(other);
}
