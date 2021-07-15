import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import LoggedOutNav from "./navigators/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { client, isLoggedInVar } from "./apollo";
import LoggedInNav from "./navigators/LoggedInNav";
import Preloader from "./preloader";

export default function App() {
  const [loading, setLoading] = useState(true);
  // * 앱로딩 종료 콜백
  const onFinish = () => setLoading(false);
  // * 로그인 검증변수
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  // * 프리로더 호출
  const preloader = new Preloader();

  if (loading) {
    return (
      <AppLoading
        startAsync={preloader.preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }
  // * 앱로딩 종료시 클라이언트 실행
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ApolloProvider>
  );
}
