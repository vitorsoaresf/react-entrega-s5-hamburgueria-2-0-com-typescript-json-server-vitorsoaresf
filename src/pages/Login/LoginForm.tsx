import { Button, Heading, VStack, Grid, Box, Text } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import {
  DeepMap,
  FieldError,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";
import { SignInData } from ".";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../../context/Auth.Context";
import { useHistory } from "react-router-dom";

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignInData>;
  loading: boolean;
}

export const LoginForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const { signIn } = useAuth();
  const history = useHistory();

  return (
    <Grid
      onSubmit={handleSignIn}
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
            placeholder="Digite seu login"
            type="email"
            label="Login"
            error={errors.email}
            icon={FaEnvelope}
            {...register("email")}
          />
          {!errors.email && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: nome@email.com
            </Text>
          )}
        </Box>
        <Input
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          error={errors.password}
          icon={FaLock}
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
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
          Entrar
        </Button>
        <Text color="gray.400">Ainda não possui uma conta? </Text>
        <Button
          bg="gray.100"
          w="100%"
          color="gray.300"
          h="60px"
          borderRadius="8px"
          onClick={() => history.push("/register")}
          _hover={{
            background: "gray.200",
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
