import React, { useRef, useEffect, useState } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useFormikContext } from "formik";
const generateRandomID = () =>
  String(Math.floor(1000000000 + Math.random() * 9000000000));

export default function GeneralInfo() {
  const { values, handleChange, errors, touched, setFieldValue } =
    useFormikContext();
  useEffect(() => {
    if (!values.id) {
      setFieldValue("id", generateRandomID());
    }
  }, [values.id, setFieldValue]);

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(values.photo || null);

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue("photo", file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="row g-4 pb-2">
        <div className="col-md-6 border-end">
          <div className="d-flex align-items-center mb-2">
            <div className="mb-4 d-flex align-items-center">
              {preview ? (
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    border: "3px dotted #D0D5DD",
                    overflow: "hidden",
                    backgroundColor: "white",
                  }}
                  onClick={() => fileInputRef.current.click()} 
                >
                  <img
                    src={preview}
                    alt="Profil Önizleme"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <button
                  className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    fontSize: "24px",
                    marginRight: "12px",
                    border: "3px dotted #D0D5DD",
                    color: "#667085",
                    backgroundColor: "white",
                  }}
                  onClick={() => fileInputRef.current.click()}  
                >
                  +
                </button>
              )}

              <div style={{ paddingLeft: 10 }}>
                <label className="form-label fw-bold">Personel Fotoğrafı</label>

                <input
                  type="file"
                  name="photo"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/png, image/jpeg"
                  style={{ display: "none" }} 
                />

                <div
                  className="text-primary"
                  style={{ cursor: "pointer", fontSize: "14px" }}
                  onClick={() => fileInputRef.current.click()} 
                >
                  Resim yükle
                </div>

                {errors.photo && touched.photo && (
                  <div className="text-danger mt-1">{errors.photo}</div>
                )}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              value={values.id} 
              disabled
            />
          </div>

          <div className="mb-4">
            <label>Yetki</label>
            <input
              type="text"
              className="form-control"
              placeholder="Yetki girin"
              value={values.role}
              onChange={handleChange}
              name="role"
            />
            {errors.role && touched.role && (
              <div className="text-danger">{errors.role}</div>
            )}
          </div>

          <div className="mb-4">
            <label>Ad</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Adınızı girin"
            />
            {errors.name && touched.name && (
              <div className="text-danger">{errors.name}</div>
            )}
          </div>

          <div className="mb-4">
            <label>Soyad</label>
            <input
              type="text"
              name="surname"
              value={values.surname}
              onChange={handleChange}
              className="form-control"
              placeholder="Soyadınızı girin"
            />
            {errors.surname && touched.surname && (
              <div className="text-danger">{errors.surname}</div>
            )}
          </div>

          <div className="mb-4">
            <label>Telefon Numarası</label>
            <div className="input-group">
              <span className="input-group-text">TR</span>
              <input
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="+90 (555) 000-0000"
              />
            </div>
            {errors.phone && touched.phone && (
              <div className="text-danger mt-1">{errors.phone}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email girin"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <div className="text-danger">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label>İşe Giriş Tarihi</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={values.date}
              onChange={handleChange}
            />
            {errors.date && touched.date && (
              <div className="text-danger">{errors.date}</div>
            )}
          </div>

          <div className="mb-4">
            <label>Upu Point</label>
            <input
              type="text"
              className="form-control"
              placeholder="Puan girin"
              name="upuPoint"
              value={values.upuPoint}
              onChange={handleChange}
            />
            {errors.upuPoint && touched.upuPoint && (
              <div className="text-danger">{errors.upuPoint}</div>
            )}
          </div>

          <div className="mb-4">
            <label>Personel Toplam Maliyet</label>
            <input
              type="text"
              className="form-control"
              placeholder="Maliyet girin"
              name="totalCost"
              value={values.totalCost}
              onChange={handleChange}
            />
            {errors.totalCost && touched.totalCost && (
              <div className="text-danger">{errors.totalCost}</div>
            )}
          </div>

          <div className="mb-4">
            <label>Personel Toplam Maaş</label>
            <input
              type="text"
              className="form-control"
              placeholder="Maaş girin"
              name="salary"
              value={values.salary}
              onChange={handleChange}
            />
            {errors.salary && touched.salary && (
              <div className="text-danger">{errors.salary}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Departman</label>
            <input
              type="text"
              className="form-control"
              placeholder="Departman girin"
              name="department"
              value={values.department}
              onChange={handleChange}
            />
            {errors.department && touched.department && (
              <div className="text-danger">{errors.department}</div>
            )}
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="responsibilityCheck"
              name="isDepartmentManager"
              checked={values.isDepartmentManager || false}
              onChange={handleChange}
            />
            {errors.isDepartmentManager && touched.isDepartmentManager && (
              <div className="text-danger">{errors.isDepartmentManager}</div>
            )}
            <label className="form-check-label" htmlFor="responsibilityCheck">
              Seçili departmanın sorumlusu yap
            </label>
          </div>
        </div>
      </div>
      <div className="text-muted mb-2">
        <p className="text-muted mt-2">
          *Personelinizi eklediğiniz departmanın sorumlusu olarak
          atayabilirsiniz.
        </p>
      </div>
    </>
  );
}
