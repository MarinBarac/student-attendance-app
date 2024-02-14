import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "../Input";
import { Formik } from "formik";
import { INITIAL_VALUES } from "./constants";
import { COLORS } from "@/constants";
import { Route, useRouter } from "expo-router";
import apiService from "@/services/Api";
import storeService from "@/services/Store";

interface IValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();

  const onSubmit = ({ username, password }: IValues, resetForm: () => void) => {
    if (username !== "" && password !== "") {
      apiService
        .login(username, password)
        .then((data: any) => {
          storeService.setUser(data);
          router.push("/home" as Route<string>);
          resetForm();
        })
        .catch((error: any) => {
          console.log(error);
          let statusCode = error.response.status;
          let message =
            statusCode === 401 ? "Invalid password!" : "User doesn't exist!";

          invalidLogin(message);
        });
    } else if (username === "" && password === "") {
      let message = "Username and password are empty!";
      invalidLogin(message);
    } else if (username === "") {
      let message = "Username is empty!";
      invalidLogin(message);
    } else if (password === "") {
      let message = "Password is empty!";
      invalidLogin(message);
    }
  };

  const invalidLogin = (message: string) => {
    Alert.alert("Login error", message, [{ text: "Close" }]);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
    >
      {({ handleSubmit, values, handleChange }) => (
        <View style={styles.form}>
          <Input
            handleChange={handleChange("username")}
            label="Username"
            placeholder="Enter username"
            value={values.username}
            style={styles.firstInput}
          />
          <Input
            handleChange={handleChange("password")}
            label="Password"
            placeholder="Enter password"
            value={values.password}
            style={styles.secondInput}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.submitButton}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  form: {
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 66,
  },
  firstInput: {
    marginBottom: 12,
  },
  secondInput: {
    marginBottom: 32,
  },
  submitButton: {
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    paddingHorizontal: 24,
    paddingVertical: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Roboto_400Regular",
    color: COLORS.white,
  },
});
