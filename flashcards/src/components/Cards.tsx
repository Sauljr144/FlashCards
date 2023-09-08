import React, { useState } from "react";
import {
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { MyData } from "../services/card-service";
import ReactCardFlip from "react-card-flip";
import "../hover.css";

// interface to get our data with the type of MyData card-service
interface ICard {
  card: MyData;
}

// useState to determine if card is flipped. we are using the ReactCardFlip to do the animation
const Cards = ({ card }: ICard) => {
  const [flip, setFlip] = useState(false);

  // function to get rid of certain characters that appear
  function decodeString(str: string) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <>
      <ReactCardFlip flipDirection="horizontal" isFlipped={flip}>
        <Card className="myCard" height="200px" onClick={() => setFlip(!flip)}>
          <CardBody>
            <Heading fontSize="large">{decodeString(card.question)}</Heading>
          </CardBody>
        </Card>

        <Card className="myCard" bgColor="#38B2AC" height="200px" onClick={() => setFlip(!flip)}>
          <CardBody>
            <Heading fontSize="large">
              {decodeString(card.correct_answer)}
            </Heading>
          </CardBody>
        </Card>
      </ReactCardFlip>
    </>
  );
};

export default Cards;
