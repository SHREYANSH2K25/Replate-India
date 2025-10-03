export const savetoLocalStorage = (key, value) => {
  if (value !== undefined) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};


export const loadFromLocalStorage = (key) => {
  try {
    const rawData = localStorage.getItem(key);
    return rawData && rawData !== 'undefined' ? JSON.parse(rawData) : null;
  } catch (err) {
    console.warn(`Failed to parse localStorage for key "${key}":`, err);
    return null;
  }
};
