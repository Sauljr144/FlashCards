import {
  Button,
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
  const { category } = useData();
  const test = useRef<HTMLInputElement>(null)

  


  return (
    <HStack padding="20px">
      <Heading>FlashCards</Heading>
      <FormControl width="30%">
        <Select placeholder="Select A Category">
          {category.slice(0, 5).map((c) => (
            <option key={c.id}>{c.name}</option>
          ))}
        </Select>
      </FormControl>
      <FormControl width='30%'>
      <NumberInput max={50} min={10}>
          <NumberInputField ref={test} placeholder="Number of cards."/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </HStack>
  );
};

export default Form;
