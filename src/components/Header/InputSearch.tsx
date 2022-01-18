import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useProduct } from "../../context/Products.Context";

interface InputSearchProps {
  setSearch: (arg: boolean) => void;
}

export const InputSearch = ({ setSearch }: InputSearchProps) => {
  const { searchProducts } = useProduct();
  const [change, setChange] = useState("");
  const toast = useToast();

  return (
    <Flex
      w="100vw"
      position="absolute"
      bg="gray.0"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="90vw"
        bg="white"
        h="60px"
        alignItems="center"
        borderRadius="8px"
        border="2px"
        justifyContent="space-between"
      >
        <Input
          onChange={(e) => {
            toast({
              title: "Resultado da pesquisa",
              status: "success",
              duration: 200,
              isClosable: true,
              variant: "top-accent",
            });
            searchProducts(e.target.value);
            setChange(e.target.value);
          }}
          h="55px"
          w="90%"
          border="none"
          _focus={{
            outline: "none",
            color: "gray.600",
          }}
        />
        <Button
          onClick={() => {
            toast({
              title: "Resultado da pesquisa",
              status: "success",
              duration: 1000,
              isClosable: true,
              variant: "top-accent",
            });
            searchProducts(change);
            setSearch(false);
          }}
          bg="green.800"
          color="white"
          mr="5px"
        >
          <FaSearch />
        </Button>
      </Flex>
    </Flex>
  );
};
