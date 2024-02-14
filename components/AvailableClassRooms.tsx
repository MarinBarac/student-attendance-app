import { COLORS } from "@/constants";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { useBle } from "@/hooks";
import { Peripheral } from "react-native-ble-manager";
import Classroom from "./Classroom";

const AvailableClassrooms = () => {
  const { scanDevices, connectDevice } = useBle();

  const [devices, setDevices] = useState<Peripheral[]>();

  const refresh = async () => {
    const devices = await scanDevices();
    setDevices(devices);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Available classrooms</Text>
        <TouchableOpacity onPress={refresh}>
          <Text style={styles.refreshBtn}>Refresh</Text>
        </TouchableOpacity>
      </View>
      {devices?.length && (
        <View style={styles.devices}>
          {devices.map((item) => (
            <Classroom item={item} key={item.id} />
          ))}
        </View>
      )}
      {!devices?.length && (
        <View style={styles.emptyMessageContainer}>
          <Text style={styles.emptyMessage}>
            No classrooms found. Press 'Refresh' to find new classrooms.
          </Text>
        </View>
      )}
    </View>
  );
};

export default AvailableClassrooms;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 16,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    paddingVertical: 10,
    color: COLORS.black,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Roboto_500Medium",
    flex: 1,
    opacity: 0.5,
  },
  refreshBtn: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Roboto_500Medium",
  },
  emptyMessageContainer: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
  },
  emptyMessage: {
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.black,
    opacity: 0.5,
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
  },
  devices: {
    width: '100%',
    display: 'flex',
    columnGap: 12,
  }
});
