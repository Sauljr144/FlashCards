import {
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import { FormEvent, useRef, useState } from "react";
import axios from "axios";
import CardGrid from "./CardGrid";
import { MyData } from "../services/card-service";



const Form = () => {
  
  //custom hook
  const{category} = useData();

  //useState with the type of MyData card-service
  const [data, setData] = useState<MyData[]>([]);
  const [error, setError] = useState("");

  //useRefs for our form
  const catRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  //function to handle our form submit.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: amountRef.current?.value,
          category: catRef.current?.value,
        },
      })
      .then((response) => {
        setData(response.data.results);

      })
      .catch((error) => setError(error.message));
      console.log(error)
  };

  
  return (
    <>
      <Heading marginTop={5}>
        <Center>FlashCards</Center>
      </Heading>

    
      <HStack padding="20px" justifyContent="center">

        <form onSubmit={handleSubmit}>
          <FormControl>
            <Select placeholder="Select A Category" ref={catRef}>
              {category.slice(0, 5).map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <NumberInput max={50} min={10}>
              <NumberInputField
                placeholder="Number of cards."
                ref={amountRef}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Center>
            <Button
              marginTop={3}
              type="submit"
            >
              Generate
            </Button>
          </Center>
        </form>
      </HStack>

      <CardGrid results={data}/>
    </>
  );
};

export default Form;
