import { Button } from "@chakra-ui/react";
import { useAuth } from "../../context/Auth.Context";

export const Dashboard = () => {
  const { signOut } = useAuth();
  return <Button onClick={signOut}>Logout</Button>;
};
