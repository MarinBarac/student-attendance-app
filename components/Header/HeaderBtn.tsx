import icons from "@/assets/icons";
import { useBle } from "@/hooks";
import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { BleState } from "react-native-ble-manager";

export const HeaderBtn = () => {
  const { checkStatus } = useBle();

  const [status, setStatus] = useState<BleState>();

  useEffect(() => {
    checkStatus().then((state) => setStatus(state));
  }, []);

  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.imageWrapper}>
        <View
          style={[styles.circle, status === BleState.On && styles.active]}
        />
        <Image
          source={icons.bluetooth}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HeaderBtn;

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    padding: 8,
    paddingRight: 12,
  },
  imageWrapper: {
    position: "relative",
    width: 24,
    height: 24,
  },
  circle: {
    position: "absolute",
    right: 2,
    top: -3,
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "red",
  },
  active: {
    backgroundColor: "green",
  },
  image: {
    width: 24,
    height: 24,
  },
});
