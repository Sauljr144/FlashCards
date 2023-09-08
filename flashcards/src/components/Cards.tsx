import React, { useState } from 'react'
import { Card, CardBody, Collapse, HStack, Heading, SlideFade, useDisclosure } from '@chakra-ui/react';
import { MyData } from '../services/card-service';
import '../flip.css'

interface ICard{
  card: MyData
}

const Cards = ({card} : ICard) => {

    const [flip, setFlip] = useState(false)
    // const { isOpen, onToggle } = useDisclosure()

    function decodeString(str: string) {
      const textArea = document.createElement("textarea");
      textArea.innerHTML = str;
      return textArea.value;
    }

  return (
    <>
        {/* <Card height='200px' onClick={onToggle}>
          <CardBody>
            <Heading fontSize='large'>{decodeString(card.question)}</Heading>
          </CardBody>
        </Card>

        <Collapse in={isOpen} animateOpacity>
        <Card height='200px' marginTop={5}>
          <CardBody>
            <Heading fontSize='large'>{decodeString(card.correct_answer)}</Heading>
          </CardBody>
        </Card>
        </Collapse> */}

        <div className={`myCard ${flip ? "flip": ""}`}>
        <Card height='200px' className='front' onClick={() => setFlip(!flip)}>
          <CardBody>
            <Heading fontSize='large'>{decodeString(card.question)}</Heading>
          </CardBody>
        </Card>
        
        <Card height='200px' className='back' onClick={() => setFlip(!flip)}>
          <CardBody>
            <Heading fontSize='large'>{decodeString(card.correct_answer)}</Heading>
          </CardBody>
        </Card>
        </div>


        {/* {data.map(q => <Card>{q.question}</Card>)} */}

    </>
  )
}

export default Cards