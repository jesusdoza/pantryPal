// api.js
async function fetchMealPlanner(numberOfDays, dietType, dailyCalories) {
  const url = 'http://localhost:4000/api/getMealPlanner'; 

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numberOfDays,
        dietType,
        dailyCalories,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const mealPlan = await response.json();
    return mealPlan;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export default fetchMealPlanner;
