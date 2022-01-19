import { Box, Flex, ModalBody, Text } from "@chakra-ui/react";
import { useCart } from "../../context/Cart.Context";
import { CartList } from "../Header/CartList";

export const ModalBodyC = () => {
  const { cart } = useCart();
  return (
    <ModalBody alignItems="center">
      <Flex w="100%" minH="158px">
        {cart.length === 0 ? (
          <Box textAlign="center" w="100%">
            <Text fontWeight="700" fontSize="lg">
              Sua sacola está vazia
            </Text>
            <Text fontSize="sm">Adicione Itens</Text>
          </Box>
        ) : (
          <CartList />
        )}
      </Flex>
    </ModalBody>
  );
};
