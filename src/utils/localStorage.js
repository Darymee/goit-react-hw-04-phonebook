// export const localStorageGetItem = key =>
//   JSON.parse(window.localStorage.getItem(key));
// export const localStorageSetItem = (key, item) => {};

export const localStorage = {
  getItem(key) {
    return JSON.parse(window.localStorage.getItem(key));
  },
  setItem(key, item) {
    window.localStorage.setItem(key, JSON.stringify(item));
  },
};
