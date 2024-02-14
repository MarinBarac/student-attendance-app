import { LoginForm } from "@/components";
import { COLORS } from "@/constants";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        flex: 1,
        display: "flex",
        alignItems: "center",
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LoggerApp</Text>
        <Text style={styles.subtitle}>BY FESB</Text>
      </View>

      <LoginForm />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  titleContainer: {
    width: 198,
    display: "flex",
    marginTop: 120,
  },
  title: {
    fontSize: 40,
    lineHeight: 46,
    color: COLORS.primary,
    fontFamily: 'Roboto_700Bold',
  },
  subtitle: {
    fontSize: 10,
    lineHeight: 12,
    color: COLORS.black,
    marginLeft: "auto",
    fontFamily: 'Roboto_700Bold'
  },
});
