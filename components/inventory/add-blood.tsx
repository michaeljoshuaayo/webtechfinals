import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

export const AddBlood = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
          Add Blood
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              Add Blood
            </ModalHeader>
            <ModalBody>
              <Input label="Blood Serial Number" variant="bordered" />
              <Input label="Blood Type" variant="bordered" />
              <Input label="Blood Component" variant="bordered" />
              <Input
                label="Expiration Date"
                variant="bordered"
                type="date"
                placeholder="YYYY-MM-DD"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={onClose}>
                Close
              </Button>
              <Button color="primary" onClick={onClose}>
                Add Blood
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
