import React from "react";
import { TouchableOpacity } from "react-native";
import AuthButton from "../components/authentication/AuthButton";
import AuthLayout from "../components/authentication/AuthLayout";
import { LoginLink } from "../style/Text";

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogIn = () => navigation.navigate("LogIn");
  return (
    <AuthLayout>
      <AuthButton
        text="Create New Account"
        disabled={false}
        loading={false}
        onPress={goToCreateAccount}
      />
      <TouchableOpacity onPress={goToLogIn}>
        <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
