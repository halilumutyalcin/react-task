import * as Yup from "yup";

export const validationSchema = Yup.object({
  general: Yup.object({
    photo: Yup.string().url("Geçerli bir URL girin").nullable(),
    id: Yup.string().required("ID zorunludur"),
    role: Yup.string().required("Yetki zorunludur"),
    name: Yup.string().required("Ad zorunludur"),
    surname: Yup.string().required("Soyad zorunludur"),
    phone: Yup.string()
      .matches(/^(\+90|0)?\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/, "Geçerli bir telefon numarası girin")
      .required("Telefon numarası zorunludur"),
    email: Yup.string().email("Geçerli bir e-posta girin").required("E-posta zorunludur"),
    date: Yup.date().required("İşe giriş tarihi zorunludur"),
    upuPoint: Yup.number().typeError("Sayı girin").min(0, "En az 0 olabilir").required("Puan zorunludur"),
    totalCost: Yup.number().typeError("Sayı girin").min(0, "En az 0 olabilir").required("Maliyet zorunludur"),
    salary: Yup.number().typeError("Sayı girin").min(0, "En az 0 olabilir").required("Maaş zorunludur"),
    department: Yup.string().required("Departman zorunludur"),
    isDepartmentManager: Yup.boolean(),
  }),
});

export const initialValues = {
      photo: "", // Profil fotoğrafı (URL veya dosya için)
      id: "1384843811", // ID değişmeyecek, bu yüzden readonly
      role: "", // Yetki
      name: "", // Ad
      surname: "", // Soyad
      phone: "", // Telefon numarası
      email: "", // E-posta
      date: "", // İşe giriş tarihi
      upuPoint: "", // Upu puanı
      totalCost: "", // Toplam maliyet
      salary: "", // Maaş
      department: "", // Departman
      isDepartmentManager: false, // Departman sorumlusu mu?
      skills: [], // Yetenekler (Boş bir dizi olarak başlatıldı)
      achievements: [], //
  };