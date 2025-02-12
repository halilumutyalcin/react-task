import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/service";
import {
  getEmployeesFromStorage,
  saveEmployeesToStorage,
} from "../utils/localStorageHelper";

// **LocalStorage'tan çalışanları oku ve başlangıç durumuna ekle**
const initialState = {
  employees: getEmployeesFromStorage(),
  loading: false,
  error: null,
  editingEmployee: null,
};

// **Çalışanları API'den çek ve LocalStorage'a kaydet**
export const fetchEmployeesAsync = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const data = await fetchEmployees();
    saveEmployeesToStorage(data);
    return data;
  }
);

// **Yeni çalışan ekle ve LocalStorage'ı güncelle**
export const addEmployeeAsync = createAsyncThunk(
  "employee/addEmployee",
  async (employee) => {
    const newEmployee = await addEmployee(employee);
    const updatedEmployees = [...getEmployeesFromStorage(), newEmployee];
    saveEmployeesToStorage(updatedEmployees);
    return newEmployee;
  }
);

// **Çalışanı güncelle ve LocalStorage'ı güncelle**
export const updateEmployeeAsync = createAsyncThunk(
  "employee/updateEmployee",
  async (employee) => {
    const updatedEmployee = await updateEmployee(employee);
    const updatedEmployees = getEmployeesFromStorage().map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    saveEmployeesToStorage(updatedEmployees);
    return updatedEmployee;
  }
);

// **Çalışanı sil ve LocalStorage'ı güncelle**
export const deleteEmployeeAsync = createAsyncThunk(
  "employee/deleteEmployee",
  async (id) => {
    await deleteEmployee(id);
    const updatedEmployees = getEmployeesFromStorage().filter(
      (emp) => emp.id !== id
    );
    saveEmployeesToStorage(updatedEmployees);
    return id;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEditingEmployee: (state, action) => {
      state.editingEmployee = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployeesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployeesAsync.rejected, (state) => {
        state.loading = false;
        state.error = "Çalışanları getirirken hata oluştu!";
      })
      .addCase(addEmployeeAsync.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })
      .addCase(updateEmployeeAsync.fulfilled, (state, action) => {
        const index = state.employees.findIndex(
          (emp) => emp.id === action.payload.id
        );
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      })
      .addCase(deleteEmployeeAsync.fulfilled, (state, action) => {
        state.employees = state.employees.filter(
          (emp) => emp.id !== action.payload
        );
      });
  },
});
export const { setEditingEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
