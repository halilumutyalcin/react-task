const LOCAL_STORAGE_KEY = "employees";

export const getEmployeesFromStorage = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveEmployeesToStorage = (employees) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
};
