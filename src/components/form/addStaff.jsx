
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TabNavigation from "./tabNavigation";
import FormContent from "./formContent";
import FormActions from "./formActions";
import { initialValues, validationSchema } from "../../schemas/generalInfo";
import { Formik, Form } from "formik";

export default function AddStaff() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("general");

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
    alert("Form Kaydedildi!");
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <div
        className="card d-flex flex-column position-relative"
        style={{ height: "850px", width: "736px" }}
      >
        <div className="modal-content p-4 flex-shrink-0">
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
            onClick={() => navigate("/staff/list")}
            style={{ color: "#D0D5DD" }}
          ></button>

          <h2 className="h5 mb-3">Yeni Personel Ekle</h2>

          {/* ✅ Formik burada */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form>
                {/* ✅ Formik'in içinde olduğundan emin olun */}
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

                <FormContent
                  activeTab={activeTab}
                  values={values}
                  setFieldValue={setFieldValue}
                />

                {/* ✅ Artık FormActions, Formik'in içinde */}
                <FormActions
                  navigate={navigate}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
