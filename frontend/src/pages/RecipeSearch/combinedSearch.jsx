
export default function combine(recipeSearch, bulkInfo) {
  let combinedObjs = [];
  recipeSearch.forEach((recipe) => {
    const id = recipe.id;

    for (let i = 0; i < bulkInfo.length; i++) {
      if (bulkInfo[i].id === id) {
        combinedObjs.push({ ...recipe, ...bulkInfo[i] })
      }
    }//primagen frontendmaster.com
    //javascriptinfo.com


  })
  // console.log(combinedObjs)
  return combinedObjs
}