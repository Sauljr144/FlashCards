import React, { useState } from "react";
import {
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { MyData } from "../services/card-service";
import ReactCardFlip from "react-card-flip";
import "../flip.css";

interface ICard {
  card: MyData;
}

const Cards = ({ card }: ICard) => {
  const [flip, setFlip] = useState(false);

  function decodeString(str: string) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <>
      <ReactCardFlip flipDirection="horizontal" isFlipped={flip}>
        <Card height="200px" onClick={() => setFlip(!flip)}>
          <CardBody>
            <Heading fontSize="large">{decodeString(card.question)}</Heading>
          </CardBody>
        </Card>

        <Card height="200px" onClick={() => setFlip(!flip)}>
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
