import { Platform } from "react-native";

// FOR EMULATOR OR SIMULATOR DEVICE
export const BASE_URL = Platform.OS == 'android' ? 'http://10.0.2.2:3000': 'http://192.168.29.254:3000'

// 'http://192.168.29.254:3000'
// FOR PHYSICAL DEVICE
// USE YOUR NETWORK IP OR HOSTEL URL
// EXPORT CONST BASE-URL = 'http://192.168.29.88:3000'