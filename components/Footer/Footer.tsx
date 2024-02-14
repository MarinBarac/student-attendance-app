import { StyleSheet, View } from "react-native";
import FooterBtn from "./FooterBtn";
import icons from "@/assets/icons";
import { COLORS } from "@/constants";

const Footer = () => {
  return (
    <View style={styles.container}>
      <FooterBtn
        icon={icons.home}
        iconActive={icons.homeActive}
        label="Home"
        href="home"
      />
      <FooterBtn
        icon={icons.profile}
        iconActive={icons.profileActive}
        label="Profile"
        href="profile"
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 60,
    paddingVertical: 8,
    backgroundColor: COLORS.primaryLight,
  },
});
