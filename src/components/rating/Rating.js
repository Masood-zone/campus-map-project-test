import React, { useState } from "react";
import { Container, Radio, Rating } from "./RatingStyles";
import { FaStar } from "react-icons/fa";

function Rate() {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label key={index}>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "#DF9511"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
      <span className="ml-4 font-bold">{rate}</span>
    </Container>
  );
}

export default Rate;
