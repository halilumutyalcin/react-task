import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import TabNavigation from "../../../components/form/tabNavigation";
import FormContent from "../../../components/form/formContent";
import FormActions from "../../../components/form/formActions ";
import { initialValues, validationSchema } from "../../../schemas/schema";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../redux/tabSlice";
import {
  addEmployeeAsync,
  updateEmployeeAsync,
} from "../../../redux/employeeSlice";

export default function AddStaff() {
  const activeTab = useSelector((state) => state.tab.activeTab);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const submitFormRef = useRef(null);

  const editingEmployee = useSelector((state) =>
    state.employee.employees.find((emp) => emp.id === id)
  );

  const [formValues, setFormValues] = useState(
    editingEmployee || initialValues
  );

  useEffect(() => {
    if (editingEmployee) {
      setFormValues(editingEmployee);
    }
  }, [editingEmployee]);

  const handleSubmit = async (values) => {
    setFormValues(values);

    if (values.photo instanceof File) {
      const reader = new FileReader();
      reader.readAsDataURL(values.photo);

      reader.onloadend = () => {
        const base64Photo = reader.result;
        const payload = { ...values, photo: base64Photo };

        if (id) {
          dispatch(updateEmployeeAsync({ id, ...payload }))
            .then(() => {
              alert("Personel başarıyla güncellendi!");
              navigate("/staff/list");
            })
            .catch((error) =>
              console.error("Güncellenirken hata oluştu:", error)
            );
        } else {
          dispatch(addEmployeeAsync(payload))
            .then(() => {
              alert("Personel başarıyla eklendi!");
              navigate("/staff/list");
            })
            .catch((error) => console.error("Eklenirken hata oluştu:", error));
        }
      };
    } else {
      if (id) {
        dispatch(updateEmployeeAsync({ id, ...values }))
          .then(() => {
            alert("Personel başarıyla güncellendi!");
            navigate("/staff/list");
          })
          .catch((error) =>
            console.error("Güncellenirken hata oluştu:", error)
          );
      } else {
        dispatch(addEmployeeAsync(values))
          .then(() => {
            alert("Personel başarıyla eklendi!");
            navigate("/staff/list");
          })
          .catch((error) => console.error("Eklenirken hata oluştu:", error));
      }
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <div
        className="card d-flex flex-column position-relative"
        style={{ height: "900px", width: "736px" }}
      >
        <div className="modal-content p-4 flex-shrink-0">
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
            onClick={() => navigate("/staff/list")}
            style={{ color: "#D0D5DD" }}
          ></button>

          <h2 className="h5 mb-3">
            {id ? "Personeli Düzenle" : "Yeni Personel Ekle"}
          </h2>

          <Formik
            initialValues={formValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, submitForm }) => (
              <Form>
                <TabNavigation /> 
                <FormContent values={values} setFieldValue={setFieldValue} />
                <FormActions navigate={navigate} submitForm={submitForm} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
