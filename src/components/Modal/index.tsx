import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { ModalBodyC } from "./ModalBodyC";
import { ModalFooterC } from "./ModalFooterC";
import { ModalHeaderC } from "./ModalHeaderC";

interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCart = ({ isOpen, onClose }: ModalCartProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="90vw">
        <ModalHeaderC />
        <ModalCloseButton color="white" outline="none" />
        <ModalBodyC />
        <ModalFooterC />
      </ModalContent>
    </Modal>
  );
};
