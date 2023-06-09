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

    //todo
    // add all options to a string set
    //check if in set already if not add to filter options set
    //
    //todo load option into select
    // iterate through extracted options and add options to multiselect
    let allOptions = { dietOptionsArr, otherOptionsAvailableArr };
    for (let options of Object.keys(allOptions)) {
        console.log("options", options);
        console.log("options", allOptions[options]);
    }

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
    //todo implement a creatable select for filter

    function handleFilter(event) {
        console.log("event from change on creatable select", event);
    }

    return (
        <Filter className="main-filter-container">
            <CreatableSelect
                isMulti
                options={filterOptions}
                onChange={handleFilter}
            />
            {dietFilter.length > 0 ? (
                <section>
                    <h2>Selected filters: </h2>

                    <ul>
                        {dietFilter.map((item, index) => {
                            return (
                                <li
                                    key={index + item}
                                    onClick={() => {
                                        removeDietFilter(item);
                                    }}
                                    className="btn-filter">
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ) : (
                <section></section>
            )}
            {categoryFilter.length > 0 ? (
                <section>
                    <h2>Category filters</h2>
                    <ul>
                        {categoryFilter.map((category, index) => {
                            return (
                                <li
                                    key={index + category}
                                    onClick={() => {
                                        removeCategoryFilter(category);
                                    }}
                                    className="btn-filter">
                                    {category}
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ) : (
                <section></section>
            )}
            <section className="filter-row">
                <h2>Dietary options:</h2>

                <ul className="filter-options">
                    {dietOptionsArr.length > 0 ? (
                        dietOptionsArr.map((item, index) => {
                            return (
                                <li
                                    onClick={() => {
                                        addDietFilter(item);
                                    }}
                                    className="btn"
                                    key={index + item + 1}>
                                    <span>{item}</span>
                                </li>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </ul>
            </section>
            <section className="filter-row">
                <h2>Categories:</h2>
                <ul className="filter-options">
                    {otherOptionsAvailableArr.map((option, index) => {
                        return (
                            <li
                                onClick={() => {
                                    addCategoryFilter(option);
                                }}
                                key={option + index + 2}
                                className="btn">
                                <span>{option}</span>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </Filter>
    );
}
