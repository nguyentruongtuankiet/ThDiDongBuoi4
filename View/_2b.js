import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function _2a() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Điều hướng sang trang _1c.js khi ấn nút "LOGIN"
    navigation.navigate("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imageUsb}
          source={require("../assets/USB.png")} // Thay đổi đường dẫn đến hình ảnh tương ứng
        />
        <View style={styles.divTextHeader}>
          <Text style={styles.textHeader}>
            USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
            bluetooth
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.divTexEvaluate}>
          <Text style={styles.textEvaluate}>Cực kỳ hài lòng</Text>
        </View>
        <View style={styles.divStar}>
          <Image
            style={styles.imageStar}
            source={require("../assets/star.png")}
          />
          <Image
            style={styles.imageStar}
            source={require("../assets/star.png")}
          />
          <Image
            style={styles.imageStar}
            source={require("../assets/star.png")}
          />
          <Image
            style={styles.imageStar}
            source={require("../assets/star.png")}
          />
          <Image
            style={styles.imageStar}
            source={require("../assets/star.png")}
          />
        </View>
        <View style={styles.divInsertImage}>
          <Image
            style={styles.imageCamera}
            source={require("../assets/Camera.png")}
          />
          <Text style={styles.textInsertImage}>Thêm hình ảnh</Text>
        </View>
        <View style={styles.divInput}>
          <TextInput
            multiline={true}
            style={styles.input}
            placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
          ></TextInput>
          <Text style={styles.textinput}>
            https://meet.google.com/nsj-ojwi-xpp
          </Text>
        </View>
        <View style={styles.divNext}>
          <Text style={styles.textNext}>Gửi</Text>
        </View>
      </View>
    </View>
  );
}
// borderBottomWidth: 1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  header: {
    width: 360,
    height: 105,
    flexDirection: "row",
  },
  imageUsb: {
    width: 60,
    height: 60,
    marginTop: 20,
    marginLeft: 10,
  },
  divTextHeader: {
    width: 259,
    height: 70,
    marginTop: 19,
    marginLeft: 5,
  },
  textHeader: {
    fontFamily: "Arial",
    fontSize: 16,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
  },
  body: {
    marginTop: 8,
    width: 360,
    height: 527,
    textAlign: "center",
    alignItems: "center",
  },
  divTexEvaluate: {
    marginTop: 31,
    width: 259,
    height: 21,
  },
  textEvaluate: {
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
  },
  divStar: {
    marginTop: 18,
    width: 251,
    height: 40,
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageStar: {
    width: 40,
    height: 40,
    // marginLeft: \,
  },
  divInsertImage: {
    marginTop: 30,
    width: 293,
    height: 68,
    borderWidth: 1,
    borderColor: "#1511EB",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageCamera: {
    width: 39,
    height: 32,
    marginRight: 15,
  },
  textInsertImage: {
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
  },
  divInput: {
    marginTop: 15,
    width: 293,
    height: 222,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 5,
  },
  input: {
    width: 293,
    height: 222,
    fontSize: 18,
    color: "#C4C4C4",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    borderColor: "blue",
    paddingHorizontal: 19,
    paddingTop: 11,
  },
  textinput: {
    fontSize: 12,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
    marginLeft: 60,
    fontFamily: "Arial",
    marginBottom: 5,
 
  },
  divNext: {
    marginTop: 25,
    width: 289,
    height: 41,
    backgroundColor: "#0D5DB6",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1511EB",
  },
  textNext: {
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#fff",
  },
});
