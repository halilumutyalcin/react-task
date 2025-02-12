const LOCAL_STORAGE_KEY = "employees";

// LocalStorage'tan çalışanları al
export const getEmployeesFromStorage = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// LocalStorage'a çalışanları kaydet
export const saveEmployeesToStorage = (employees) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
};
