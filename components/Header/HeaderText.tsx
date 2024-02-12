import { COLORS } from "@/constants";
import { StyleSheet, Text, View } from "react-native";

const HeaderText = () => {
  return (
    <View>
      <Text style={styles.text}>LoggerApp</Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 24.3,
    fontFamily: "Roboto_400Regular",
    color: COLORS.black,
  },
});
