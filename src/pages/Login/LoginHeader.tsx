import { Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";

export const LoginHeader = () => {
  return (
    <VStack>
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
      <Flex border="1px" borderColor="gray.100" w="90vw">
        <Center
          bg="green.200"
          color="green.800"
          w="60px"
          h="60px"
          borderRadius="5px"
        >
          <FiShoppingBag />
        </Center>
        <Text fontSize="14px" color="gray.300">
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <strong>melhores </strong>
          ingredientes.
        </Text>
      </Flex>
    </VStack>
  );
};
