import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { useProduct } from "../../context/Products.Context";

export const Header = () => {
  const [search, setSearch] = useState(false);
  const [change, setChange] = useState("");
  const { searchProducts } = useProduct();

  return (
    <Box
      w="100vw"
      h="80px"
      bg="gray.0"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading ml="16px" display="flex" alignItems="center" fontSize={["2xl"]}>
        Burguer{" "}
        <Text
          h="100%"
          ml="5px"
          color="#EB5757"
          fontSize={["sm"]}
          fontWeight="700"
        >
          Kenzie
        </Text>
      </Heading>
      <Flex>
        <Button
          onClick={() => setSearch(true)}
          bg="none"
          w="50px"
          fontSize="4xl"
          color="gray.400"
        >
          <FaSearch />
        </Button>
        <Button bg="none" w="50px" fontSize="4xl" color="gray.400">
          <FaShoppingCart />
        </Button>
        <Button bg="none" w="50px" fontSize="4xl" color="gray.400">
          <FaSignOutAlt />
        </Button>
      </Flex>
      {search && (
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
              onChange={(e) => searchProducts(e.target.value)}
              h="55px"
              w="90%"
              border="none"
              _focus={{
                outline: "none",
                color: "gray.600",
              }}
            />
            <Button
              onClick={() => setSearch(false)}
              bg="green.800"
              color="white"
              mr="5px"
            >
              <FaSearch />
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};
