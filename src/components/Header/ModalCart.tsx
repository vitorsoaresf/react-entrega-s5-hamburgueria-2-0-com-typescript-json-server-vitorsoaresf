import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useCart } from "../../context/Cart.Context";
import { CardCart } from "../Card/CardCart";
import { CartList } from "./CartList";

interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCart = ({ isOpen, onClose }: ModalCartProps) => {
  const { cart, removeAll } = useCart();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="90vw">
        <ModalHeader bg="green.800" color="white" borderRadius="5px 5px 0 0">
          Carrinho de Compras
        </ModalHeader>
        <ModalCloseButton color="white" outline="none" />
        <ModalBody alignItems="center">
          <Flex w="100%" minH="158px">
            {cart.length === 0 ? (
              <Box textAlign="center">
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

        <ModalFooter>
          <Button
            onClick={removeAll}
            bg="gray.100"
            color="gray.300"
            w="100%"
            h="60px"
          >
            Remover todos{" "}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
