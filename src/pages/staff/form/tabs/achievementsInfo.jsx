import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CustomModal from "../../../../components/form/customModal";
import AchievementList from "../../../../components/form/achivements/achivementList";

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
    setAchievement({
      name: "",
      date: "",
      institution: "",
      certificateNo: "",
      obtainedScore: "",
      totalScore: "",
      document: null,
    });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAchievement((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setAchievement((prev) => ({
          ...prev,
          file: reader.result, // ✅ Base64 olarak kaydet
          filePreview: reader.result, // ✅ Önizleme için de Base64 kullan
          fileName: file.name, // ✅ Orijinal dosya adını da sakla
        }));
      };

      reader.readAsDataURL(file); // ✅ Base64'e çevir
    }
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
        updatedAchievements = [...updatedAchievements, achievement];
      }


      // ✅ Formik state'ini güncelle
      setFieldValue("achievements", updatedAchievements, true);

      handleClose();
    } else {
      console.warn("⚠️ Lütfen tüm zorunlu alanları doldurun!");
    }
  };

  // **Başarıyı Düzenleme**
  const handleEditAchievement = (index) => {
    const selectedAchievement = achievements[index];

    setAchievement({
      ...selectedAchievement,
      file: selectedAchievement.file || null, // ✅ Base64 dosya bilgisi korunsun
      filePreview: selectedAchievement.filePreview || "", // ✅ Önizleme korunsun
      fileName: selectedAchievement.fileName || "", // ✅ Dosya adı korunsun
    });

    setEditIndex(index);
    setShowModal(true);
  };

  // **Başarıyı Silme**
  const handleDeleteAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setFieldValue("achievements", updatedAchievements, true);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>
          Kazanılmış Eğitim - Başarı{" "}
          <span
            className="badge"
            stye={{
              backgroundColor: "white",
              color: "#6941C6",
              border: "1px solid #E9D7FE",
              fontWeight: "bold",
            }}
          >
            {achievements.length} adet
          </span>
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
          + Başarı Ekle
        </Button>
      </div>

      {/* Başarı Listesi */}
      <AchievementList
        achievements={achievements}
        onEdit={handleEditAchievement}
        onDelete={handleDeleteAchievement}
      />

      {/* Modal - Yeni/Düzenleme */}
      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title={
          editIndex !== null
            ? "Başarıyı Düzenle"
            : "Yeni Kazanılmış Başarı Ekle"
        }
        onSave={handleSaveAchievement}
      >
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Başarı</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={achievement.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Sertifika No</label>
            <input
              type="text"
              className="form-control"
              name="certificateNo"
              value={achievement.certificateNo}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Tarih</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={achievement.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Alınan Puan</label>
            <input
              type="number"
              className="form-control"
              name="obtainedScore"
              value={achievement.obtainedScore}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Kurum</label>
            <input
              type="text"
              className="form-control"
              name="institution"
              value={achievement.institution}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Tam Puan</label>
            <input
              type="number"
              className="form-control"
              name="totalScore"
              value={achievement.totalScore}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Ek Belge</label>
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
            />

            {achievement.filePreview && (
              <div className="mt-2">
                <strong>Yüklenen Belge:</strong>
                <a
                  href={achievement.filePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {achievement.fileName || "Dosyayı Görüntüle"}
                </a>
              </div>
            )}
          </div>
        </div>
      </CustomModal>
    </>
  );
}
