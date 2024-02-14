import { COLORS } from "@/constants";
import { IUser } from "@/interfaces/user";
import storeService from "@/services/Store";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const WelcomeMessage = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    let currentUser = storeService.getUser();
    setUser(currentUser);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user?.firstName}</Text>
      <Text style={styles.subtitle}>
        To update list of classrooms, please refresh.
      </Text>
    </View>
  );
};

export default WelcomeMessage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    color: COLORS.black,
    fontFamily: "Roboto_500Medium",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.black,
    opacity: 0.5,
    fontFamily: "Roboto_400Regular",
  },
});
