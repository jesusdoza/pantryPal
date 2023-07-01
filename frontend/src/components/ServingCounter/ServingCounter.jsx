import { useState } from "react";
import { StyledServingCounter } from "./ServingCounter.styles";
import { fraction } from "mathjs";
import { v4 as uuidv4 } from "uuid";

export default function ServingCounter(props) {
  const [counter, setCounter] = useState(props.servings);
  const [oneAmount, setOneAmount] = useState(props.ingredientAmount);

  const handleChange = (event) => {
    // Save input value and update UI
    const userServing = event.target.value;
    setCounter(userServing);

    const calculated = props.ingredientAmount.map((ingredient) => {
      return ingredient.props.children[0];
    });

    const oneServing = calculated.map((ingredient) => {
      return ingredient / props.servings;
    });

    // Convert Decimal to Fraction and return Mixed Fraction
    function decimalToFraction(decimal) {
      if (decimal % 1 !== 0) {
        function convertToMixedFraction(numerator, denominator) {
          if (numerator >= denominator) {
            var wholeNumber = Math.floor(numerator / denominator);
            var remainder = numerator % denominator;
            return wholeNumber + " " + remainder + "/" + denominator;
          } else {
            return numerator + "/" + denominator;
          }
        }
        const convertedFraction = fraction(decimal);
        return convertToMixedFraction(convertedFraction.n, convertedFraction.d);
      } else {
        return parseInt(decimal);
      }
    }

    // Get users desired serving amount and calculate ingredient needed
    const desiredAmount = oneServing.map((item, index) => (
      <li key={uuidv4()}>
        {decimalToFraction((item * Number(userServing)).toFixed(2))}{" "}
        {props.ingredientAmount[index].props.children[2]}
        <img
          src={props.ingredientAmount[index].props.children[4].props.src}
        ></img>
        {props.ingredientAmount[index].props.children[6]}
      </li>
    ));

    setOneAmount(desiredAmount);
  };

  return (
    <StyledServingCounter>
      <section className="counterSection">
        <h2>Serving Counter </h2>
        <section>
          <input
            type="number"
            min="0"
            max="15"
            inputMode="numeric"
            placeholder={props.servings}
            value={counter}
            onChange={handleChange}
          />
        </section>
      </section>
      <section className="ingredientSection">
        <span>{oneAmount}</span>
      </section>
    </StyledServingCounter>
  );
}
