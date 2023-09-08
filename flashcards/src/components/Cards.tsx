import React, { useState } from "react";
import {
  Card,
  CardBody,
  Heading,
  Text,
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
        <Card className="myCard" height="250px" onClick={() => setFlip(!flip)}>
          <CardBody>
            <Heading fontSize="large">{decodeString(card.question)}</Heading>
            {card.incorrect_answers.map(x => <Text padding={1} marginTop={1} >{decodeString(x)}</Text>)}
            <Text padding={1} marginTop={1}>{decodeString(card.correct_answer)}</Text>
          </CardBody>
        </Card>

        <Card className="myCard" bgColor="#38B2AC" height="225px" onClick={() => setFlip(!flip)}>
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
