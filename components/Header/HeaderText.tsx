import { COLORS } from "@/constants";
import { StyleSheet, Text, View } from "react-native";

const HeaderText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LoggerApp</Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
  },
  text: {
    fontSize: 18,
    lineHeight: 24.3,
    fontFamily: "Roboto_500Medium",
    color: COLORS.black,
  },
});
