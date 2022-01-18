import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import {
  FaCarAlt,
  FaCartPlus,
  FaSearch,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";

export const Header = () => {
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
        <Button bg="none" w="50px" fontSize="4xl" color="gray.400">
          <FaSearch />
        </Button>
        <Button bg="none" w="50px" fontSize="4xl" color="gray.400">
          <FaShoppingCart />
        </Button>
        <Button bg="none" w="50px" fontSize="4xl" color="gray.400">
          <FaSignOutAlt />
        </Button>
      </Flex>
    </Box>
  );
};
