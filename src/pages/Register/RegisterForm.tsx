import { Button, Heading, VStack, Grid, Box, Text } from "@chakra-ui/react";
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
    <Grid
      onSubmit={handleSignUp}
      as="form"
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0"]}
      w={["100%", "100%", "80%", "80%"]}
    >
      <Heading size="lg"> Bem vindo de volta!</Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%">
          <Input
            placeholder="Digite seu nome"
            type="text"
            label="Nome"
            error={errors.name}
            icon={FaUser}
            {...register("name")}
          />
          {/* {!errors.name && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: João Alves dos Santos
            </Text>
          )} */}
        </Box>
        <Box w="100%">
          <Input
            placeholder="Digite seu email"
            type="email"
            label="Email"
            error={errors.email}
            icon={FaEnvelope}
            {...register("email")}
          />
          {/* {!errors.email && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: nome@email.com
            </Text>
          )} */}
        </Box>
        <Box w="100%">
          <Input
            type="password"
            placeholder="Digite sua senha"
            label="Senha"
            error={errors.password}
            icon={FaLock}
            {...register("password")}
          />
          {/* {!errors.password && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: 123456
            </Text>
          )} */}
        </Box>
        <Box w="100%">
          <Input
            type="password"
            placeholder="Digite sua senha novamente"
            label="Confirme sua Senha"
            error={errors.confirm_password}
            icon={FaLock}
            {...register("confirm_password")}
          />
          {/* {!errors.password && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: 123456
            </Text>
          )} */}
        </Box>
        <Button
          isLoading={loading}
          bg="purple.800"
          w="100%"
          color="white"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "purple.900",
          }}
          type="submit"
        >
          Cadastrar-se
        </Button>
      </VStack>
    </Grid>
  );
};
