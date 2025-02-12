import React, { useEffect, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchEmployeesAsync,
  deleteEmployeeAsync,
} from "../../redux/employeeSlice";
import EmployeeListC from "../../components/employee/employeeList";
import "../../styles/home.css";
import { setEditingEmployee } from "../../redux/employeeSlice";

export default function EmployeeList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { employees, loading } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployeesAsync()); // Redux'tan çalışanları çek
  }, [dispatch]);

  const handleEdit = (person) => {
    dispatch(setEditingEmployee(person)); // 🔥 Seçili çalışanı Redux'a kaydet
    navigate(`/staff/edit/${person.id}`); // 🔥 Form sayfasına yönlendir
  };

  const handleDelete = (person) => {
    dispatch(deleteEmployeeAsync(person.id));
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container d-flex flex-column align-items-center w-100 mt-4">
      <Card className="card-container d-flex card flex-column mb-3">
        <div className="header d-flex justify-content-between align-items-center">
          <h2 className="h5">Personeller</h2>
          <div className="status-badge">
            <span className="badge" style={{ color: "#6941C6" }}>
              {employees.length}/56 Personel Kredisi
            </span>
          </div>
        </div>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Ara..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </InputGroup>

        {loading ? (
          <p>Yükleniyor...</p>
        ) : (
          <EmployeeListC
            employees={filteredEmployees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        <Button
          className="w-100 my-3"
          style={{
            backgroundColor: "#ffffff",
            color: "black",
            border: "1px solid rgb(208, 213, 221)",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#7F56D9";
            e.target.style.color = "white";
            e.target.style.border = "1px solid #7F56D9";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#ffffff";
            e.target.style.color = "black";
            e.target.style.border = "1px solid rgb(208, 213, 221)";
          }}
          onClick={() => navigate("/staff/form")}
        >
          + Yeni Personel Ekle
        </Button>
      </Card>

      <div className="d-flex gap-2 w-50">
        <Button
          style={{
            backgroundColor: "#ffffff",
            color: "black",
            border: "1px solid rgb(208, 213, 221)",
            transition: "0.3s",
          }}
          className="flex-fill"
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#7F56D9";
            e.target.style.color = "white";
            e.target.style.border = "1px solid #7F56D9";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#ffffff";
            e.target.style.color = "black";
            e.target.style.border = "1px solid rgb(208, 213, 221)";
          }}
          onClick={() => navigate("/staff/welcome")}
        >
          Önceki
        </Button>

        <Button
          style={{
            backgroundColor: "#7F56D9",
            border: "1px solid rgb(208, 213, 221)",
          }}
          onClick={() => {
            navigate("/projects");
          }}
          className="flex-fill"
        >
          Sonraki
        </Button>
      </div>
    </div>
  );
}
