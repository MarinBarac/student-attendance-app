import { COLORS } from "@/constants";
import { useField } from "formik";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface IProps {
  label: string;
  value: string;
  placeholder?: string;
  handleChange: (value: string) => void;
}

const Input = ({
  label,
  placeholder,
  handleChange,
  style: customStyle,
  ...props
}: IProps & TextInputProps) => {
  return (
    <View style={[stlyes.container, customStyle]}>
      <Text style={stlyes.label}>{label}</Text>
      <TextInput
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor={COLORS.placeholder}
        style={[stlyes.input]}
        {...props}
      />
    </View>
  );
};

export default Input;

const stlyes = StyleSheet.create({
  container: {
    width: '100%',
    display: "flex",
  },
  label: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Roboto_400Regular",
    color: COLORS.black,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 14,
    borderRadius: 8,
    color: COLORS.black,
    backgroundColor: COLORS.primaryLight,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Roboto_400Regular',
  },
});
