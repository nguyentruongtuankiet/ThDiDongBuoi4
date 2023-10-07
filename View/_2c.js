import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  CheckBox,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function _2c() {
  const [isCheckedList, setIsCheckedList] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const [passwordLength, setPasswordLength] = useState(0);

  const handleCheckboxChange = (index) => {
    const updatedList = [...isCheckedList];
    updatedList[index] = !updatedList[index];
    setIsCheckedList(updatedList);
  };
  const generatePassword = () => {
    // Xây dựng mật khẩu dựa trên các điều kiện đã chọn
    let newPassword = "";

    if (isCheckedList[0]) {
      newPassword += "abcdefghijklmnopqrstuvwxyz"; // Chữ cái thường
    }

    if (isCheckedList[1]) {
      newPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Chữ cái in hoa
    }

    if (isCheckedList[2]) {
      newPassword += "0123456789"; // Số
    }

    if (isCheckedList[3]) {
      newPassword += "!@#$%^&*()"; // Ký tự đặc biệt
    }

    let password = "";
    const newPasswordLength = passwordLength;
    const characters = newPassword;

    for (let i = 0; i < newPasswordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setGeneratedPassword(password);
  };
  return (
    <ImageBackground
      source={require("../assets/background.png")} // Đặt hình ảnh nền
      style={styles.container}
    >
      <View style={styles.divbody}>
        <View style={styles.divheader}>
          <Text style={styles.texGENERATOR}>PASSWORD GENERATOR</Text>
        </View>
        <View style={styles.divGENERATOR}>
          <Text style={styles.texGENERATORPass}>{generatedPassword}</Text>
        </View>
        <View style={styles.divPassLenght}>
          <Text style={styles.textPassLenght}>Password length</Text>
          <View style={styles.divinputPassLenght}>
            <TextInput
              style={styles.textinputPassLenght}
              onChangeText={(text) => setPasswordLength(text)}
            />
          </View>
        </View>
        <View style={styles.divlowercaseletters}>
          <Text style={styles.textlowercaseletters}>
            Include lower case letters
          </Text>
          <TouchableOpacity
            style={styles.check}
            onPress={() => handleCheckboxChange(0)}
          >
            <View style={styles.divinputletters}>
              {isCheckedList[0] && (
                <Image
                  style={styles.checkImage}
                  source={require("../assets/check.png")}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.divupcaseletters}>
          <Text style={styles.textupcaseletters}>Include upcase letters</Text>
          <TouchableOpacity
            style={styles.check}
            onPress={() => handleCheckboxChange(1)}
          >
            <View style={styles.divinputletters}>
              {isCheckedList[1] && (
                <Image
                  style={styles.checkImage}
                  source={require("../assets/check.png")}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.divnumber}>
          <Text style={styles.textnumber}>Include number</Text>
          <TouchableOpacity
            style={styles.check}
            onPress={() => handleCheckboxChange(2)}
          >
            <View style={styles.divinputletters}>
              {isCheckedList[2] && (
                <Image
                  style={styles.checkImage}
                  source={require("../assets/check.png")}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.divsymbol}>
          <Text style={styles.textsymbol}>Include special symbol</Text>
          <TouchableOpacity
            style={styles.check}
            onPress={() => handleCheckboxChange(3)}
          >
            <View style={styles.divinputletters}>
              {isCheckedList[3] && (
                <Image
                  style={styles.checkImage}
                  source={require("../assets/check.png")}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={generatePassword}>
          <View style={styles.divGENERATE}>
            <Text style={styles.textGENERATE}>GENERATE PASSWORD </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroup: {
    width: 360,
    height: 640,
  },
  divbody: {
    width: 322,
    height: 605,
    backgroundColor: "#23235B",
    borderRadius: 15,
  },
  divheader: {
    marginTop: 40,
    width: 181,
    height: 64,
    marginLeft: 61,
    justifyContent: "center",
  },
  texGENERATOR: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: 700,
    lineHeight: "normal",
    fonfStyle: "normal",
    fontFamily: "Arial",
  },
  divGENERATOR: {
    marginTop: 33,
    width: 297,
    height: 55,
    marginLeft: 13,
    backgroundColor: "#151537",
    justifyContent: "center",
    alignItems: "center",
  },
  texGENERATORPass: {
    textAlign: "center",
    color: "#67F338",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: "normal",
    fonfStyle: "normal",
    fontFamily: "Arial",
  },
  divPassLenght: {
    marginTop: 40,
    width: 297,
    height: 33,
    marginLeft: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPassLenght: {
    marginLeft: 6,
    marginTop: 6,
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "normal",
    fonfStyle: "normal",
    color: "#FFF",
  },
  divinputPassLenght: {
    width: 118,
    height: 33,
    backgroundColor: "#FFFFFF",
  },
  textinputPassLenght: {
    width: 118,
    height: 33,
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "normal",
    fonfStyle: "normal",
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  divlowercaseletters: {
    marginTop: 25,
    width: 297,
    height: 33,
    marginLeft: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textlowercaseletters: {
    marginLeft: 6,
    marginTop: 6,
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "normal",
    fonfStyle: "normal",
    color: "#FFF",
  },
  divinputletters: {
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
  },
  check: {
    width: 25,
    height: 25,
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "normal",
    fonfStyle: "normal",
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  checkImage: {
    width: 21,
    height: 21,
    marginLeft: 2,
    marginTop: 1,
  },
  divupcaseletters: {
    marginTop: 25,
    width: 297,
    height: 33,
    marginLeft: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textupcaseletters: {
    marginLeft: 6,
    marginTop: 6,
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "normal",
    fonfStyle: "normal",
    color: "#FFF",
  },
  divnumber: {
    marginTop: 25,
    width: 297,
    height: 33,
    marginLeft: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textnumber: {
    marginLeft: 6,
    marginTop: 5,
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "normal",
    fonfStyle: "normal",
    color: "#FFF",
  },
  divsymbol: {
    marginTop: 25,
    width: 297,
    height: 33,
    marginLeft: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textsymbol: {
    marginLeft: 6,
    marginTop: 5,
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "normal",
    fonfStyle: "normal",
    color: "#FFF",
  },
  divGENERATE: {
    marginTop: 30,
    marginLeft: 26,
    width: 297,
    height: 55,
    marginLeft: 13,
    backgroundColor: "#3B3B98",
    justifyContent: "center",
  },
  textGENERATE: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: "normal",
    fonfStyle: "normal",
    fontFamily: "Arial",
  },
});
