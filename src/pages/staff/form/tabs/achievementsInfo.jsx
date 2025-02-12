import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CustomModal from "../../../../components/form/customModal";
import AchievementList from "../../../../components/form/achivements/achivementList";

export default function AchievementsInfo({ values, setFieldValue }) {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
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
    setEditIndex(null);
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
          file: reader.result,
          filePreview: reader.result,
          fileName: file.name,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSaveAchievement = () => {
    if (achievement.name && achievement.date && achievement.institution) {
      let updatedAchievements = [...achievements];

      if (editIndex !== null) {
        updatedAchievements[editIndex] = achievement;
      } else {
        updatedAchievements = [...updatedAchievements, achievement];
      }

      setFieldValue("achievements", updatedAchievements, true);

      handleClose();
    } else {
      console.warn("⚠️ Lütfen tüm zorunlu alanları doldurun!");
    }
  };

  const handleEditAchievement = (index) => {
    const selectedAchievement = achievements[index];

    setAchievement({
      ...selectedAchievement,
      file: selectedAchievement.file || null,
      filePreview: selectedAchievement.filePreview || "",
      fileName: selectedAchievement.fileName || "",
    });

    setEditIndex(index);
    setShowModal(true);
  };

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

      <AchievementList
        achievements={achievements}
        onEdit={handleEditAchievement}
        onDelete={handleDeleteAchievement}
      />

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
          <div
            className="col-md-6"
            style={{
              borderRight: "2px solid #D0D5DD",
              paddingRight: "15px",
            }}
          >
            <label className="form-label">Başarı</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={achievement.name}
              onChange={handleChange}
              required
            />

            <label className="form-label mt-3">Tarih</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={achievement.date}
              onChange={handleChange}
              required
            />

            <label className="form-label mt-3">Kurum</label>
            <input
              type="text"
              className="form-control"
              name="institution"
              value={achievement.institution}
              onChange={handleChange}
              required
            />
            <div className="col-md-12 mt-3">
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

          <div className="col-md-6" style={{ paddingLeft: "15px" }}>
            <label className="form-label">Sertifika No</label>
            <input
              type="text"
              className="form-control"
              name="certificateNo"
              value={achievement.certificateNo}
              onChange={handleChange}
            />

            <label className="form-label mt-3">Alınan Puan</label>
            <input
              type="number"
              className="form-control"
              name="obtainedScore"
              value={achievement.obtainedScore}
              onChange={handleChange}
            />

            <label className="form-label mt-3">Tam Puan</label>
            <input
              type="number"
              className="form-control"
              name="totalScore"
              value={achievement.totalScore}
              onChange={handleChange}
            />
          </div>
        </div>
      </CustomModal>
    </>
  );
}
