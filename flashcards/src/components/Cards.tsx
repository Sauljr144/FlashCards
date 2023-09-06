import React, { useState } from 'react'
import { Card, CardBody, Heading } from '@chakra-ui/react';
import { MyData } from '../services/card-service';

interface ICard{
  card: MyData
}

const Cards = ({card} : ICard) => {

    const [flip, setFlip] = useState(false)

    function decodeString(str: string) {
      const textArea = document.createElement("textarea");
      textArea.innerHTML = str;
      return textArea.value;
    }

  return (
    <>
        <Card height='200px' className=''>
          <CardBody>
            <Heading fontSize='large'>{decodeString(card.question)}</Heading>
            
          </CardBody>
        </Card>
        
        {/* {data.map(q => <Card>{q.question}</Card>)} */}
     

    </>
  )
}

export default Cards