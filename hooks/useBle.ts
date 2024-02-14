import BleManager from "react-native-ble-manager";

const useBle = () => {
  const checkStatus = () => BleManager?.checkState();

  const scanDevices = async () => {
    await BleManager?.stopScan();

    await BleManager?.scan([], 5, false);

    return BleManager.getDiscoveredPeripherals();
  };

  const connectDevice = (id: string) => BleManager.connect(id);

  const getConnectedDevices = () => BleManager.getConnectedPeripherals();

  const isDeviceConnected = (id: string) =>
    BleManager.isPeripheralConnected(id);

  return {
    checkStatus,
    connectDevice,
    isDeviceConnected,
    getConnectedDevices,
    scanDevices,
  };
};

export default useBle;
