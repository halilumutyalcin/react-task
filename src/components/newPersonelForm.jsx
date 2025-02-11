import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/NewPersonnelForm.css";
import { Button, Modal, Form } from "react-bootstrap";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import '../styles/home.css';

export default function NewPersonnelForm() {

  const navigate = useNavigate();

  const [showSkillModal, setShowSkillModal] = useState(false);
  const [showAchModal, setshowAchModal] = useState(false);

  const handleShow = () => setShowSkillModal(true);
  const handleClose = () => setShowSkillModal(false);

  const handleShowAch = () => setshowAchModal(true);
  const handleCloseAch = () => setshowAchModal(false);

  return (
    <div className="container d-flex flex-column align-items-center mt-4">

    <div
      className="card d-flex flex-column position-relative"
      style={{ height: "750px", width: "736px" }}
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
        <ul className="nav nav-tabs w-100 d-flex border-bottom">
          <li className="nav-item text-center flex-fill">
            <a className="nav-link active" data-bs-toggle="tab" href="#general">
              Genel
            </a>
          </li>
          <li className="nav-item text-center flex-fill">
            <a className="nav-link" data-bs-toggle="tab" href="#skills">
              Yetenek ve Operasyon
            </a>
          </li>
          <li className="nav-item text-center flex-fill">
            <a className="nav-link" data-bs-toggle="tab" href="#achievements">
              Kazanılmış Başarı
            </a>
          </li>
        </ul>

        <div className="tab-content mt-3">
          <div className="tab-pane fade show active" id="general">
            <form>
              <div className="row pb-2">
                {/* Sol Sütun */}
                <div className="col-md-6 border-end">
                  <div className="d-flex align-items-center mb-3">
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
                    >
                      +
                    </button>

                    <div>
                      <label className="form-label fw-bold mb-0">
                        Personel Fotoğrafı
                      </label>
                      <div
                        className="text-primary"
                        style={{ cursor: "pointer", fontSize: "14px" }}
                      >
                        Resim yükle
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label>ID</label>
                    <input
                      type="text"
                      className="form-control"
                      value="1384843811"
                      disabled
                    />
                  </div>

                  <div className="mb-3">
                    <label>Yetki</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Yetki girin"
                    />
                  </div>

                  <div className="mb-3">
                    <label>Ad</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Adınızı girin"
                    />
                  </div>

                  <div className="mb-3">
                    <label>Soyad</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Soyadınızı girin"
                    />
                  </div>

                  <div className="mb-3">
                    <label>Telefon Numarası</label>
                    <div className="input-group">
                      <span className="input-group-text">TR</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+90 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>

                {/* Sağ Sütun */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email girin"
                    />
                  </div>

                  <div className="mb-3">
                    <label>İşe Giriş Tarihi</label>
                    <input type="date" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label>Upu Point</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Puan girin"
                    />
                  </div>

                  <div className="mb-3">
                    <label>Personel Toplam Maliyet</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Maliyet girin"
                    />
                  </div>

                  <div className="mb-3">
                    <label>Personel Toplam Maaş</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Maaş girin"
                    />
                  </div>

                  <div className="mb-3">
                    <label>Departman</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Departman girin"
                    />
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="responsibilityCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="responsibilityCheck"
                    >
                      Seçili departmanın sorumlusu yap
                    </label>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-2">
                Lütfen bilgilerinizi eksiksiz ve doğru giriniz.
              </p>
            </form>
          </div>
        </div>

        <div className="tab-content mt-3">
          <div className="tab-pane fade show" id="skills">
            <div className="d-flex justify-content-between align-items-center">
              <h5>
                Yetenekler{" "}
                <span className="badge bg-light text-dark">2 adet</span>
              </h5>
              <Button
                variant="primary"
                onClick={handleShow}
                style={{
                  backgroundColor: "white",
                  color: "#7F56D9",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                + Yetenek Ekle
              </Button>
            </div>

            <ul className="list-group mt-2">
              <li className="d-flex justify-content-between align-items-center py-2">
                <div>
                  <strong>CNC Taşlama</strong>
                  <div className="text-muted">Başarı Düzeyi: 5/10</div>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-secondary">
                    <FaPencil size={16} />
                  </button>
                  <button className="btn btn-sm btn-outline-danger ms-2">
                    <FaTrash size={16} />
                  </button>
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2">
                <div>
                  <strong>CNC Dişli</strong>
                  <div className="text-muted">Başarı Düzeyi: 7/10</div>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-secondary">
                    <FaPencil size={16} />
                  </button>
                  <button className="btn btn-sm btn-outline-danger ms-2">
                    <FaTrash size={16} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-pane fade show" id="achievements">
            <div className="d-flex justify-content-between align-items-center">
              <h5>
                Kazanılmış Eğitim - Başarı{" "}
                <span className="badge bg-light text-dark">2 adet</span>
              </h5>
              <Button
                variant="primary"
                onClick={handleShowAch}
                style={{
                  backgroundColor: "white",
                  color: "#7F56D9",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                + Başarı Ekle
              </Button>
            </div>

            <ul className="list-group mt-2">
              <li className="d-flex justify-content-between align-items-center py-2">
                <div>
                  <strong>Başarı Adı</strong>
                  <div className="text-muted">Approved by Çağatay Cangüloğlu</div>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-secondary">
                    <FaPencil size={16} />
                  </button>
                  <button className="btn btn-sm btn-outline-danger ms-2">
                    <FaTrash size={16} />
                  </button>
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2">
                <div>
                  <strong>Başarı Adı</strong>
                  <div className="text-muted">Approved by Çağatay Cangüloğlu</div>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-secondary">
                    <FaPencil size={16} />
                  </button>
                  <button className="btn btn-sm btn-outline-danger ms-2">
                    <FaTrash size={16} />
                  </button>
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2">
                <div>
                  <strong>Başarı Adı</strong>
                  <div className="text-muted">Approved by Çağatay Cangüloğlu</div>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-secondary">
                    <FaPencil size={16} />
                  </button>
                  <button className="btn btn-sm btn-outline-danger ms-2">
                    <FaTrash size={16} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Modal Component */}
      <Modal show={showSkillModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yeni Yetenek Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Operasyon</Form.Label>
              <Form.Select required>
                <option value="">Seçiniz</option>
                <option value="CNC Taşlama">CNC Taşlama</option>
                <option value="CNC Dişli">CNC Dişli</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tarih</Form.Label>
              <Form.Control type="time" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Puan</Form.Label>
              <Form.Select required>
                <option value="">Seçiniz</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Vazgeç
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>

         {/* Modal Component */}
         <Modal show={showAchModal} onHide={handleCloseAch}>
        <Modal.Header closeButton>
          <Modal.Title>Yeni Başarı Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Operasyon</Form.Label>
              <Form.Select required>
                <option value="">Seçiniz</option>
                <option value="CNC Taşlama">CNC Taşlama</option>
                <option value="CNC Dişli">CNC Dişli</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tarih</Form.Label>
              <Form.Control type="time" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Puan</Form.Label>
              <Form.Select required>
                <option value="">Seçiniz</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAch}>
            Vazgeç
          </Button>
          <Button variant="primary" onClick={handleCloseAch}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className="d-flex w-100 gap-2 p-3"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          background: "white",
          width: "100%",
        }}
      >
        <Button
          id="prev"
          className="flex-fill"
          style={{ border: "1px solid #D0D5DD" }}
          onClick={() => navigate("/staff/list")}
        >
          Vazgeç
        </Button>
        <Button
          id="next"
          className="flex-fill"
          style={{ border: "1px solid #D0D5DD" }}
        >
          Kaydet
        </Button>
      </div>
    </div>
    </div>

  );
}
