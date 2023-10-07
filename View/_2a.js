import React, { useState } from "react";
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
export default function _2a() {
  const navigation = useNavigation();
  const userData = [
    { username: "TK", password: "01234" },
    { username: "NH", password: "56789" },
    // Thêm các tài khoản khác vào đây
  ];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleCreateAcc = () => {
    navigation.navigate("_2c");
  };
  const handleOrder = () => {
    const user = userData.find(
      (item) => item.username === username && item.password === password
    );

    if (user) {
      alert("Đăng nhập thành công");
      navigation.navigate("Tiki_Ok");
    } else {
      // Nếu không tìm thấy tài khoản, có thể hiển thị thông báo lỗi
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  return (
    <LinearGradient
      colors={["#BF9A00", "#FBCB00"]}
      start={{ x: 0.5, y: 1.0 }}
      end={{ x: 0.5, y: 0.0 }}
      style={styles.container}
    >
      <Text style={styles.textLOGIN}>LOGIN</Text>
      <View style={styles.divinputName}>
        <Image
          style={styles.imageUser}
          source={require("file:///D:/Ch%C6%B0%C6%A1ng%20Tr%C3%ACnh%20H%E1%BB%8Dc/N%C4%83m%204/L%E1%BA%ADp%20tr%C3%ACnh%20di%20%C4%91%E1%BB%99ng/ReactNative/Shopee/Image/User.svg")} // Thay đổi đường dẫn đến hình ảnh tương ứng
        />
        <TextInput
          style={styles.textinputName}
          placeholder="Name"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.divinputPass}>
        <Image
          style={styles.imagePassword}
          source={require("file:///D:/Ch%C6%B0%C6%A1ng%20Tr%C3%ACnh%20H%E1%BB%8Dc/N%C4%83m%204/L%E1%BA%ADp%20tr%C3%ACnh%20di%20%C4%91%E1%BB%99ng/ReactNative/Shopee/Image/okhoa.svg")} // Thay đổi đường dẫn đến hình ảnh tương ứng
        />
        <TextInput
          style={styles.textinputPassword}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Image
          style={styles.imageSee}
          source={require("file:///D:/Ch%C6%B0%C6%A1ng%20Tr%C3%ACnh%20H%E1%BB%8Dc/N%C4%83m%204/L%E1%BA%ADp%20tr%C3%ACnh%20di%20%C4%91%E1%BB%99ng/ReactNative/Shopee/Image/see.svg")} // Thay đổi đường dẫn đến hình ảnh tương ứng
        />
      </View>
      <TouchableOpacity onPress={handleOrder}>
        <View style={styles.divLOGIN}>
          <Text style={styles.textLOGINNEXT}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateAcc} >
        <Text style={styles.textCREATEACCOUNT}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textLOGIN: {
    marginTop: 82,
    marginLeft: 30,
    marginRight: 243,
    fontFamily: "Roboto",
    fontSize: 30,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divinputName: {
    marginTop: 75,
    marginHorizontal: 15,
    width: 330,
    height: 54,
    flexDirection: "row",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderColor: "#F2F2F2",
  },
  imageUser: {
    marginLeft: 9,
    marginTop: 9,
    marginBottom: 13,
    width: 32,
    height: 32,
  },
  textinputName: {
    marginLeft: 21,
    width: 260,
    height: 45,
    fontSize: 18,
  },
  divinputPass: {
    marginTop: 20,
    marginHorizontal: 15,
    width: 330,
    height: 54,
    flexDirection: "row",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderColor: "#F2F2F2",
    position: "relative",
  },
  imagePassword: {
    marginLeft: 9,
    marginTop: 9,
    marginBottom: 13,
    width: 32,
    height: 32,
  },
  textinputPassword: {
    marginLeft: 21,
    width: 195,
    height: 45,
    fontSize: 18,
  },
  imageSee: {
    // marginLeft: 9,
    // marginTop: 9,
    // marginBottom :13,
    width: 32,
    height: 32,
    position: "absolute",
    right: 33,
    top: 9,
    bottom: 13,
  },
  divLOGIN: {
    marginTop: 59,
    marginHorizontal: 15,
    width: 330,
    height: 45,
    backgroundColor: "#060000",
    // justifyContent: "center",
    borderRadius: 3,
  },
  textLOGINNEXT: {
    marginTop: 9,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  textCREATEACCOUNT: {
    marginTop: 45,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
});
