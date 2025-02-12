import axios from "axios";

const API_URL = "http://localhost:5000/employees"; // JSON Server adresi

// Çalışanları getir
export const fetchEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Yeni çalışan ekle
export const addEmployee = async (employee) => {
  const response = await axios.post(API_URL, employee);
  return response.data;
};

// Çalışanı güncelle
export const updateEmployee = async (employee) => {
  const response = await axios.put(`${API_URL}/${employee.id}`, employee);
  return response.data;
};

// Çalışanı sil
export const deleteEmployee = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
