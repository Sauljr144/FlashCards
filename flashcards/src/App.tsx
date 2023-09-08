import { FormEvent, useEffect, useRef, useState } from "react";
import "./App.css";
import { Category } from "./services/Category-Service";
import {
  Box,
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
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import Cards from "./components/Cards";
import { MyData } from "./services/card-service";



function App() {
  const [data, setData] = useState<MyData[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [error, setError] = useState("");

  const catRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

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
        console.log(response.data.results)

      })
      .catch((error) => setError(error.message));

      
      console.log(catRef.current?.value, amountRef.current?.value)

  };


  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://opentdb.com/api_category.php", {
        signal: controller.signal,
      })
      .then((response) => {
        setCategory(response.data.trivia_categories);
      })
      .catch((error) => setError(error.message));

    return () => controller.abort();
  }, []);



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


      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="20px"
        spacing={6}
      >
        {data.map((card) => (
          <Box key={card.question} width="100%" height="100%" borderRadius={10}>
            <Cards card={card}></Cards>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

export default App;
