import React from "react";
import useData from "../hooks/useData";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Cards from "./Cards";

const CardGrid = () => {
  const { data } = useData();

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="20px"
        spacing={6}
      >
        {data.map((card) => (
          <Box key={card.question}  width="100%" height='100%' borderRadius={10}>
            <Cards card={card}></Cards>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CardGrid;
