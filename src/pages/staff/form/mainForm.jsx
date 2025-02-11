import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TabNavigation from "../../../components/form/tabNavigation";
import FormContent from "../../../components/form/formContent";
import FormActions from "../../../components/form/formActions ";
import { initialValues, validationSchema } from "../../../schemas/generalInfo";
import { Formik, Form } from "formik";

export default function AddStaff() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("general");
  const submitFormRef = useRef(null);
  const [formValues, setFormValues] = useState(initialValues); // ✅ Form verilerini takip eden state

  const handleSubmit = (values) => {
    setFormValues(values); // ✅ Güncellenmiş form verilerini kaydet
    console.log("Form Data:", values); // ✅ Konsola yazdır
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

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, submitForm }) => {
              useEffect(() => {
                submitFormRef.current = submitForm;
              }, [submitForm]);

              return (
                <Form>
                  <TabNavigation
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <FormContent
                    activeTab={activeTab}
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <FormActions
                    navigate={navigate}
                    submitForm={() => {
                      submitForm().then(() => {
                        console.log("Form başarıyla gönderildi!");
                        console.log("Gönderilen Veriler:", values); // ✅ Güncellenmiş veriler
                      });
                    }}
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
