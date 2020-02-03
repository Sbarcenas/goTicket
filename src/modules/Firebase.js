import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';

export const checkPermission = async () => {
  const enabled = await messaging().hasPermission();
  if (enabled) {
    await getToken();
  } else {
    await requestPermission();
  }
};

const getToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    fcmToken = await messaging().getToken();
  }
  if (fcmToken) {
    await AsyncStorage.setItem('fcmToken', fcmToken);
  }
  console.info(fcmToken);
};

const requestPermission = async () => {
  try {
    await messaging().requestPermission();
    await getToken();
  } catch (error) {
    console.log('permission rejected');
  }
};
