// MealPlannerComponent.js
import React, { useState } from 'react';
import fetchMealPlanner from './apiCall.js';
import { StyledMealPlanner } from './mealPlanner.styles.jsx';
import SearchSpinner from "../../components/SearchSpinner/SearchSpinner";

function MealPlannerComponent() {
  const [searchSpinner, setSearchSpinner] = useState(false);
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [dietType, setDietType] = useState('None');
  const [dailyCalories, setDailyCalories] = useState('');
  const [mealPlan, setMealPlan] = useState(null);

  const handleSubmit = async (event) => {
    setSearchSpinner(true);
    event.preventDefault();
    const fetchedMealPlan = await fetchMealPlanner(numberOfDays, dietType, parseInt(dailyCalories));
    setMealPlan(fetchedMealPlan);
    setSearchSpinner(false);
  };

  return (
    <StyledMealPlanner>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numberOfDays">Number of days:</label>
        <select
          id="numberOfDays"
          value={numberOfDays}
          onChange={(e) => setNumberOfDays(e.target.value)}
        >
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="dietType">Diet type:</label>
        <select
          id="dietType"
          value={dietType}
          onChange={(e) => setDietType(e.target.value)}
        >
          <option value="None">None</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="lacto-ovo-vegetarian">Lacto-ovo-vegetarian</option>
          <option value="keto">Keto</option>
          <option value="gluten-free">Gluten-free</option>
        </select>

        <label htmlFor="dailyCalories">Daily calories:</label>
        <input
          id="dailyCalories"
          type="number"
          min="0"
          step="1"
          value={dailyCalories}
          onChange={(e) => setDailyCalories(e.target.value)}
        />

        <button type="submit">Get Meal Plan</button>
        {searchSpinner ? <SearchSpinner /> : null}
      </form>

    {mealPlan && (
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Meal</th>
              <th>Food</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {mealPlan.map((dayData) => {
              const mealEntries = Object.entries(dayData).filter(
                ([dayKey]) => dayKey !== 'Day' && dayKey !== 'TotalCalories'
              );
              const totalCalories = mealEntries.reduce(
                (sum, [, mealInfo]) => sum + mealInfo.Calories,
                0
              );

              return mealEntries.flatMap(([dayKey, mealData], index) => [
                <tr key={`${dayKey}-${mealData.Meal}`}>
                  {index === 0 && (
                    <td rowSpan={mealEntries.length + 1}>{dayData.Day}</td>
                  )}
                  <td>{dayKey}</td>
                  <td>{mealData.Meal}</td>
                  <td>{mealData.Calories}</td>
                </tr>,
                index === mealEntries.length - 1 && (
                  <tr key={`${dayKey}-TotalCalories`}>
                    <td colSpan="3" align="right">
                      Total Day Calories : {totalCalories}
                    </td>
                  </tr>
                ),
              ]);
            })}
          </tbody>
        </table>
      )}
    </StyledMealPlanner>
  );
}

export default MealPlannerComponent;