import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaPencil, FaTrash } from "react-icons/fa6";
import CustomModal from "../../../../components/form/customModal";

export default function AchievementsInfo({ values, setFieldValue }) {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Düzenleme için indeks
  const [achievement, setAchievement] = useState({
    name: "",
    date: "",
    institution: "",
    certificateNo: "",
    obtainedScore: "",
    totalScore: "",
    document: null,
  });

  const achievements = values.achievements || []; 

  const handleShow = () => {
    setEditIndex(null); // Yeni başarı eklerken indeks sıfırla
    setShowModal(true);
  };
  
  const handleClose = () => {
    setShowModal(false);
    setAchievement({
      name: "",
      date: "",
      institution: "",
      certificateNo: "",
      obtainedScore: "",
      totalScore: "",
      document: null,
    });
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAchievement((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setAchievement((prev) => ({ ...prev, document: e.target.files[0] }));
  };

  // **Başarıyı Kaydetme (Ekleme/Düzenleme)**
  const handleSaveAchievement = () => {
    if (achievement.name && achievement.date && achievement.institution) {
      let updatedAchievements = [...achievements];

      if (editIndex !== null) {
        // **Düzenleme modunda: var olan kaydı güncelle**
        updatedAchievements[editIndex] = achievement;
      } else {
        // **Yeni başarı ekleme modu**
        updatedAchievements.push(achievement);
      }

      setFieldValue("achievements", updatedAchievements);
      handleClose();
    } else {
      console.warn("Lütfen tüm zorunlu alanları doldurun!");
    }
  };

  // **Başarıyı Düzenleme**
  const handleEditAchievement = (index) => {
    setAchievement(achievements[index]); // Mevcut veriyi modal içine yükle
    setEditIndex(index);
    setShowModal(true);
  };

  // **Başarıyı Silme**
  const handleDeleteAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setFieldValue("achievements", updatedAchievements);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>
          Kazanılmış Eğitim - Başarı{" "}
          <span className="badge bg-light text-dark">{achievements.length} adet</span>
        </h5>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ backgroundColor: "white", color: "#7F56D9", border: "none", fontWeight: "bold" }}
        >
          + Başarı Ekle
        </Button>
      </div>

      <ul className="list-group mt-2">
        {achievements.map((ach, index) => (
          <li key={index} className="d-flex justify-content-between align-items-center py-2">
            <div>
              <strong>{ach.name}</strong> 
              <div className="text-muted">
                Sertifika No: {ach.certificateNo} | Puan: {ach.obtainedScore}/{ach.totalScore}
              </div>
            </div>
            <div>
              <button className="btn btn-sm btn-outline-secondary" onClick={() => handleEditAchievement(index)}>
                <FaPencil size={16} />
              </button>
              <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => handleDeleteAchievement(index)}>
                <FaTrash size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal - Yeni/Düzenleme */}
      <CustomModal show={showModal} handleClose={handleClose} title={editIndex !== null ? "Başarıyı Düzenle" : "Yeni Kazanılmış Başarı Ekle"} onSave={handleSaveAchievement}>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Başarı</label>
            <input type="text" className="form-control" name="name" value={achievement.name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Sertifika No</label>
            <input type="text" className="form-control" name="certificateNo" value={achievement.certificateNo} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Tarih</label>
            <input type="date" className="form-control" name="date" value={achievement.date} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Alınan Puan</label>
            <input type="number" className="form-control" name="obtainedScore" value={achievement.obtainedScore} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Kurum</label>
            <input type="text" className="form-control" name="institution" value={achievement.institution} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Tam Puan</label>
            <input type="number" className="form-control" name="totalScore" value={achievement.totalScore} onChange={handleChange} />
          </div>
          <div className="col-md-12">
            <label className="form-label">Ek Belge</label>
            <input type="file" className="form-control" onChange={handleFileChange} />
          </div>
        </div>
      </CustomModal>
    </>
  );
}
