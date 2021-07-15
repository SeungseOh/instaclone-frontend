import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import {
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { NextPageArrow } from "../icons/NavIcons";
import Colors from "../style/Colors";
import { Container, IconContainer, ImageContainer } from "../style/View.Container";
import { Bottom, Top } from "../style/View";

export default function SelectPhoto({ navigation }) {
  const [ok, setOk] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [chosenPhoto, setChosenPhoto] = useState<string>("");

  const getPhotos = async () => {
    // * 모든 앨범 정보
    const albums = await MediaLibrary.getAlbumsAsync();
    const albumList = albums.map((album) => album.title);
    console.log(albumList);

    // * Default 앨범 경로 지정
    const albumName = "Camera";
    const album = await MediaLibrary.getAlbumAsync(albumName);

    // * 요청하는 앨범에서 사진을 로드한다.
    const { assets: photos } = await MediaLibrary.getAssetsAsync({
      first: 200,
      album,
      sortBy: ["creationTime"],
      mediaType: ["photo", "video"],
    });

    setPhotos(photos);
    setChosenPhoto(photos[0]?.uri);
  };

  const getPermissions = async () => {
    const { granted, canAskAgain } = await MediaLibrary.getPermissionsAsync();
    if (granted === false && canAskAgain) {
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      if (granted !== false) {
        setOk(true);
        getPhotos();
      }
    } else if (granted !== false) {
      setOk(true);
      getPhotos();
    }
  };

  const HeaderRight = () => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("UploadForm", {
          file: chosenPhoto,
        })
      }
    >
      <NextPageArrow />
    </TouchableOpacity>
  );

  useEffect(() => {
    getPermissions();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRight,
    });
  }, [chosenPhoto]);

  const numColumns = 4;
  const { width } = useWindowDimensions();
  const choosePhoto = (uri) => {
    setChosenPhoto(uri);
  };
  const renderItem = ({ item: photo }) => (
    <ImageContainer onPress={() => choosePhoto(photo.uri)}>
      <Image
        source={{ uri: photo.uri }}
        style={{ width: width / numColumns, height: 100 }}
      />
      <IconContainer>
        <Ionicons
          name="checkmark-circle"
          size={18}
          color={photo.uri === chosenPhoto ? Colors.blue : "white"}
        />
      </IconContainer>
    </ImageContainer>
  );
  return (
    <Container>
      <StatusBar hidden={false} />
      <Top>
        {chosenPhoto !== "" ? (
          <Image
            source={{ uri: chosenPhoto }}
            style={{ width, height: "100%" }}
          />
        ) : null}
      </Top>
      <Bottom>
        <FlatList
          data={photos}
          numColumns={numColumns}
          keyExtractor={(photo) => photo.id}
          renderItem={renderItem}
        />
      </Bottom>
    </Container>
  );
}
