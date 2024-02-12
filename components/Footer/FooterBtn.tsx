import { COLORS } from "@/constants";
import { useRoute } from "@react-navigation/native";
import { Route, useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface IProps {
  icon: ImageSourcePropType;
  iconActive: ImageSourcePropType;
  label: string;
  href: string;
}

const FooterBtn = ({ icon, iconActive, label, href }: IProps) => {
  const route = useRoute();
  const router = useRouter();

  console.log(route);

  const active = route.path === href;

  const styles = styling(active);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        route.path !== href && router.push(`/${href}` as Route<string>)
      }
    >
      <Image
        source={active ? iconActive : icon}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default FooterBtn;

const styling = (active?: boolean) =>
  StyleSheet.create({
    button: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 5,
    },
    image: {
      width: 24,
      height: 24,
    },
    label: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: "Roboto_500Medium",
      color: active ? COLORS.primary : COLORS.black,
    },
  });
