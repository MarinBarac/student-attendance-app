import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Peripheral } from "react-native-ble-manager";
import CheckInModal from "./CheckInModal";
import { useEffect, useState } from "react";
import { COLORS } from "@/constants";
import { useBle } from "@/hooks";
import icons from "@/assets/icons";

interface IProps {
  item: Peripheral;
}

const Classroom = ({ item }: IProps) => {
  const { isDeviceConnected, getConnectedDevices, connectDevice } = useBle();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    getConnectedDevices().then((devices) =>
      setIsConnected(!!devices.find((device) => device.id === item.id))
    );
  }, []);

  const checkIn = async () => {
    await connectDevice(item.id);
    setIsConnected(true);
  }

  return (
    <>
      <CheckInModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
      <View style={styles.classroom}>
        <View style={styles.classroomText}>
          <Text style={styles.name}>{item.name || "-"}</Text>
          <Text style={styles.device}>Device: {item.id}</Text>
        </View>
        {!isConnected ? <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.checkBtn}>Check in</Text>
        </TouchableOpacity> : <Image source={icons.checkedActive}/>}
      </View>
    </>
  );
};

export default Classroom;

const styles = StyleSheet.create({
  classroom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 12,
  },
  classroomText: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    color: COLORS.black,
  },
  name: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Roboto_500Medium",
  },
  device: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Roboto_400Regular",
    color: COLORS.black,
    opacity: 0.5,
  },
  checkBtn: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Roboto_500Medium",
    color: COLORS.primary,
  },
  checkedIcon: {
    width: 24,
    height: 24,
  }
});
