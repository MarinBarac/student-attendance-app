import { COLORS } from "@/constants";
import { Dispatch, SetStateAction } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { BlurView } from "expo-blur";
import icons from "@/assets/icons";

interface IProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const CheckInModal = ({ isVisible, setIsVisible }: IProps) => {
  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(!isVisible);
      }}
      transparent
    >
      <BlurView
        style={styles.centeredView}
        intensity={10}
        tint={"dark"}
        experimentalBlurMethod="dimezisBlurView"
      >
        <View style={styles.modalView}>
          <Image source={icons.checked} style={styles.icon} />
          <Text style={styles.title}>Check in for Classroom A100</Text>
          <Text style={styles.description}>
            Are you sure that you want to check in into Classroom A100?
          </Text>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={[styles.button, styles.closeButton]}
              onPress={() => setIsVisible(!isVisible)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.submitButton]}
              onPress={() => setIsVisible(!isVisible)}
            >
              <Text style={[styles.buttonText, styles.submitButtonText]}>
                Check in
              </Text>
            </Pressable>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default CheckInModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 16,
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 24,
    lineHeight: 26,
    textAlign: "center",
    marginBottom: 16,
    color: COLORS.black,
  },
  description: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 16,
    color: COLORS.black,
    opacity: 0.5,
  },
  buttonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    flex: 1,
    flexBasis: "40%",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 24,
    display: "flex",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: COLORS.white,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.black,
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  submitButtonText: {
    color: COLORS.white,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
