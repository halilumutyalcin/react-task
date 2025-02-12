import * as Yup from "yup";

export const validationSchema = Yup.object({
  photo: Yup.mixed()
    .test("fileSize", "Dosya 2MB'dan küçük olmalıdır", (value) => {
      if (!value || typeof value === "string") return true; 
      return value.size <= 2 * 1024 * 1024; 
    })
    .test("fileType", "Sadece JPG ve PNG yükleyebilirsiniz", (value) => {
      if (!value || typeof value === "string") return true; 
      return ["image/jpeg", "image/png"].includes(value.type); 
    })
    .nullable(),

  id: Yup.string().required("ID zorunludur"),
  role: Yup.string().required("Yetki zorunludur"),
  name: Yup.string().required("Ad zorunludur"),
  surname: Yup.string().required("Soyad zorunludur"),
  phone: Yup.string()
    .matches(
      /^(\+90|0)?\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/,
      "Geçerli bir telefon numarası girin"
    )
    .required("Telefon numarası zorunludur"),
  email: Yup.string()
    .email("Geçerli bir e-posta girin")
    .required("E-posta zorunludur"),
  date: Yup.date().required("İşe giriş tarihi zorunludur"),
  upuPoint: Yup.number()
    .typeError("Sayı girin")
    .min(0, "En az 0 olabilir")
    .required("Puan zorunludur"),
  totalCost: Yup.number()
    .typeError("Sayı girin")
    .min(0, "En az 0 olabilir")
    .required("Maliyet zorunludur"),
  salary: Yup.number()
    .typeError("Sayı girin")
    .min(0, "En az 0 olabilir")
    .required("Maaş zorunludur"),
  department: Yup.string().required("Departman zorunludur"),
  isDepartmentManager: Yup.boolean(),
});

export const initialValues = {
  photo: "",
  id: "",
  role: "",
  name: "",
  surname: "",
  phone: "",
  email: "",
  date: "",
  upuPoint: "",
  totalCost: "",
  salary: "",
  department: "",
  isDepartmentManager: false,
  skills: [],
  achievements: [],
};
