import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/Auth.Context";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";
import { RegisterHeader } from "./RegisterHeader";

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
  name: yup.string().required("Nome obrigatório"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas diferentes"),
});

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  confirm_password?: string;
}

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const { signUp } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<SignUpData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignUp = (data: SignUpData) => {
    setLoading(true);
    delete data.confirm_password;

    signUp(data)
      .then((_) => {
        history.push("/");
        setLoading(false);
        toast({
          title: "Conta Registrada com sucesso.",
          description: "Tente realizar o Login",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <Flex
      bgGradient="white"
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh", "100vh"]}
    >
      <Flex
        flexDir={["column", "column", "row", "row"]}
        alignItems="center"
        justifyContent="center"
      >
        <RegisterHeader />
        <RegisterForm
          errors={errors}
          handleSignUp={handleSubmit(handleSignUp)}
          loading={loading}
          register={register}
        />
      </Flex>
    </Flex>
  );
};
