import {
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import useData from "../hooks/useData";
import { Category } from "../services/Category-Service";
import { useRef } from "react";

const Form = () => {
  const { category} = useData();
  const catRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: any) =>{
    e.preventDefault();

  }

  
  

  return (
    <HStack padding="20px" justifyContent='center'>
      <form onSubmit={handleSubmit}>
      <FormControl>
        <Select placeholder="Select A Category" ref={catRef}>
          {category.slice(0, 5).map((c) => (
            <option key={c.id} >{c.name}</option>
          ))}
        </Select>
      </FormControl>
      <FormControl >
      <NumberInput max={50} min={10}>
          <NumberInputField  placeholder="Number of cards." ref={amountRef} type="number"/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Center>
      <Button marginTop={3}>Generate</Button>
      </Center>
      </form>
    </HStack>
  );
};

export default Form;
