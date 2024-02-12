import icons from "@/assets/icons";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export const HeaderBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={icons.bluetooth} resizeMode="cover" style={styles.image} />
    </TouchableOpacity>
  );
};

export default HeaderBtn;

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    padding: 8,
  },
  image: {
    width: 24,
    height: 24,
  },
});
