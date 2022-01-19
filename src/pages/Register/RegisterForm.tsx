import {
  Button,
  Heading,
  VStack,
  Grid,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import {
  DeepMap,
  FieldError,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";
import { SignUpData } from ".";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useAuth } from "../../context/Auth.Context";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

interface LoginFormProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignUpData>;
  loading: boolean;
}

export const RegisterForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const { signUp } = useAuth();
  const history = useHistory();

  return (
    <VStack w="100vw" maxW="377px" m="0" display="flex">
      <Flex
        onSubmit={handleSignUp}
        as="form"
        w="90%"
        m="20px 0px 10px 0"
        flexDir="column"
        border="1px"
        borderColor="gray.100"
        borderRadius="5px"
        boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px;"
      >
        <Heading
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          size="lg"
          m="30px 0px 0px 18px"
        >
          {" "}
          Cadastro
          <Box mr="5px" fontSize="10px" textDecor="underline" color="gray.300">
            <Link to="/">Retornar para o login</Link>
          </Box>
        </Heading>
        <VStack m="10px 0px 20px 0px" spacing="5">
          <Flex w="90%">
            <Input
              placeholder="Digite seu nome"
              type="text"
              error={errors.name}
              icon={FaUser}
              {...register("name")}
            />
          </Flex>
          <Flex w="90%">
            <Input
              placeholder="Digite seu email"
              type="email"
              error={errors.email}
              icon={FaEnvelope}
              {...register("email")}
            />
          </Flex>
          <Flex w="90%">
            <Input
              type="password"
              placeholder="Digite sua senha"
              error={errors.password}
              icon={FaLock}
              {...register("password")}
            />
          </Flex>
          <Flex w="90%">
            <Input
              type="password"
              placeholder="Confirme sua senha"
              error={errors.confirm_password}
              icon={FaLock}
              {...register("confirm_password")}
            />
          </Flex>
          <Button
            isLoading={loading}
            bg="green.800"
            w="91%"
            color="white"
            h="60px"
            borderRadius="8px"
            _hover={{
              filter: "brightness(80%)",
            }}
            type="submit"
          >
            Cadastrar-se
          </Button>
        </VStack>
      </Flex>
    </VStack>
  );
};
