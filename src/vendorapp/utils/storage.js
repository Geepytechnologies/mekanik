import * as SecureStore from "expo-secure-store";

export async function savetostore(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFromstore(key) {
  let result = await SecureStore.getItemAsync(key);
  try {
    if (result) {
      return { value: result, status: true };
    } else {
      return { value: `No value with key : ${key}`, status: false };
    }
  } catch (error) {
    return error;
  }
}
export async function deleteFromstore(key) {
  let result = await SecureStore.deleteItemAsync(key);
  if (result) {
    return result;
  } else {
    return `No value with key : ${key}`;
  }
}
