import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import ScreenLayout from "../components/ScreenLayout";
import UserRow from "../components/UserRow";
import { LIKES_QUERY } from "../graphql/Photo";

export default function Likes({ route }) {
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, refetch } = useQuery(LIKES_QUERY, {
    variables: {
      id: route?.params?.photoId,
    },
    skip: !route?.params?.photoId,
  });
  const renderUser = ({ item: user }) => <UserRow {...user} />;
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          ></View>
        )}
        data={data?.seePhotoLikes}
        keyExtractor={(item) => "" + item.id}
        renderItem={renderUser}
        style={{ width: "100%" }}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </ScreenLayout>
  );
}
