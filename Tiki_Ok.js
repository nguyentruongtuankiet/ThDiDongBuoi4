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

export default function Tiki_Ok() {
  const navigation = useNavigation();

  const handleEvaluate = () => {
    navigation.navigate("_2b");
  };

  return (
    <View style={styles.container}>
      <View style={styles.divheader}>
        <View style={styles.divheaderchil}>
          <View style={styles.divImage}>
            <Image
              style={styles.imageUsb}
              source={require("./assets/Book.png")} // Thay đổi đường dẫn đến hình ảnh tương ứng
            />
          </View>
          <View style={styles.divTextHeader}>
            <Text style={styles.textNameBook}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.textprovide}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.textPriceNew}>141.800 đ</Text>
            <Text style={styles.textPriceOld}>141.800 đ</Text>
            <View style={styles.divQuanlity}>
              <View style={styles.divtQuanlityChil}>
                <View style={styles.divallowable}>
                  <Text style={styles.textallowable}>-</Text>
                </View>
                <Text style={styles.textallowable}>1</Text>
                <View style={styles.divallowable}>
                  <Text style={styles.textallowable}>+</Text>
                </View>
              </View>
              <Text style={styles.textBuyAfter}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={styles.divdiscount}>
          <Text style={styles.textdiscount}>Mã giảm giá đã lưu</Text>
          <Text style={styles.textseehere}>Xem tại đây</Text>
        </View>
        <View style={styles.divViewdiscount}>
          <View style={styles.divViewdiscountChil}>
            <View style={styles.divcolor}></View>
            <Text style={styles.textViewdiscountChil}>Mã giảm giá</Text>
          </View>
          <View style={styles.divApply}>
            <Text style={styles.textApply}>Áp dụng</Text>
          </View>
        </View>
      </View>
      <View style={styles.divbody1}>
        <Text style={styles.textbody1}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={styles.textbody2}>Nhập tại đây?</Text>
      </View>
      <View style={styles.divProvisional}>
        <Text style={styles.textProvisional}>Tạm tính</Text>
        <Text style={styles.textProvisionalPrice}>141.800 đ</Text>
      </View>
      <View style={styles.divfooter}>
        <View style={styles.divfooterchil}>
          <Text style={styles.textintomoney}>Thành tiền</Text>
          <Text style={styles.textintomoneyPrice}>141.800 đ</Text>
        </View>
        <TouchableOpacity onPress={handleEvaluate}>
          <View style={styles.divOrder}>
            <Text style={styles.textOrder}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#C4C4C4",
  },
  divheader: {
    width: 360,
    height: 283,
    backgroundColor: "#FFFFFF",
  },
  divheaderchil: {
    width: 360,
    height: 141,
    flexDirection: "row",
  },
  divImage: {
    width: 104,
    height: 127,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 12,
  },
  imageUsb: {
    width: 104,
    height: 127,
  },
  divTextHeader: {
    width: 197,
    height: 127,
    marginTop: 14,
    marginLeft: 25,
  },
  textNameBook: {
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: 11,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
  },
  textprovide: {
    marginTop: 14,
    fontFamily: "Arial",
    fontSize: 11,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
  },
  textPriceNew: {
    marginTop: 11,
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#EE0D0D",
  },
  textPriceOld: {
    marginTop: 11,
    fontFamily: "Arial",
    fontSize: 11,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    textDecorationLine: "line-through",
    color: "#808080",
  },
  divQuanlity: {
    marginTop: 11,
    width: 197,
    height: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divtQuanlityChil: {
    width: 61,
    height: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  textBuyAfter: {
    width: 46,
    height: 14,
    fontFamily: "Arial",
    fontSize: 11.5,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#134FEC",
  },
  divallowable: {
    width: 15,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080",
  },
  textallowable: {
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: 15,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    // color: "#FFFFFF",
  },
  divdiscount: {
    width: 188,
    height: 14,
    marginTop: 14,
    marginLeft: 12,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  textdiscount: {
    fontFamily: "Arial",
    fontSize: 11.5,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#011627",
  },
  textseehere: {
    marginLeft: 17,
    fontFamily: "Arial",
    fontSize: 11.5,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#134FEC",
  },
  divViewdiscount: {
    marginTop: 35,
    marginLeft: 12,
    width: 331,
    height: 45,
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divViewdiscountChil: {
    width: 208,
    height: 45,
    // backgroundColor: "red",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#808080",
    alignItems: "center",
    borderRadius: 2,
  },
  divcolor: {
    marginLeft: 13,
    width: 32,
    height: 16,
    backgroundColor: "#F2DD1B",
  },
  textViewdiscountChil: {
    textAlign: "center",
    marginLeft: 12,
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#011627",
  },
  divApply: {
    width: 99,
    height: 45,
    backgroundColor: "#0A5EB7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  textApply: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#FFFFFF",
  },
  divbody1: {
    marginTop: 17,
    width: 360,
    height: 51,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  textbody1: {
    marginTop: 15,
    marginLeft: 13,
    fontFamily: "Arial",
    fontSize: 11.5,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#011627",
  },
  textbody2: {
    marginTop: 16,
    marginLeft: 5,
    fontFamily: "Arial",
    fontSize: 11.5,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#134FEC",
  },
  divProvisional: {
    marginTop: 16,
    width: 360,
    height: 51,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  textProvisional: {
    marginTop: 10,
    marginLeft: 12,
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#011627",
  },
  textProvisionalPrice: {
    marginTop: 10,
    marginRight: 32,
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#EE0D0D",
  },
  divfooter: {
    marginTop: 123,
    width: 360,
    height: 120,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  divfooterchil: {
    width: 360,
    height: 51,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textintomoney: {
    marginLeft: 13,
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#808080",
  },
  textintomoneyPrice: {
    marginRight: 19,
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#EE0D0D",
  },
  divOrder: {
    marginTop: 7,
    width: 331,
    height: 45,
    backgroundColor: "#E53935",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  textOrder: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    lineWeight: "normal",
    fontStyle: "normal",
    color: "#FFFFFF",
  },
});
