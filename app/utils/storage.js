import { AsyncStorage } from 'react-native';

class Storage {
  constructor(storage = AsyncStorage) {
    this.storage = storage;
  }

  isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  get = async key => {
    const value = await this.storage.getItem(key);
    if (!value) return {};
    if (!this.isJsonString(value)) return value;
    return JSON.parse(value);
  };

  set = async (key, value) => {
    const jsonValue = JSON.stringify(value);
    await this.storage.setItem(key, jsonValue);
  };

  merge = async (key, value) => {
    const jsonValue = JSON.stringify(value);
    await this.storage.mergeItem(key, jsonValue);
  };

  remove = async key => {
    await this.storage.removeItem(key);
  };
}

export { Storage };
export default new Storage(AsyncStorage);
