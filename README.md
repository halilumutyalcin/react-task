# Personel Yönetim Sistemi

Bu proje, bir **Personel Yönetim Sistemi** olup, çalışan verilerini yönetmek için geliştirilmiştir. React, Redux Toolkit, Formik ve JSON Server gibi teknolojiler kullanılmıştır.

## Proje Yapısı

### 1. **components/**
Bu klasör, projedeki tekrar eden bileşenleri içerir.
- **employee/** → Çalışanlarla ilgili bileşenler.
  - `employeeItem.jsx` → Tek bir çalışanı temsil eden bileşen.
  - `employeeList.jsx` → Çalışan listesini gösteren bileşen.
- **form/** → Personel ekleme ve düzenleme formlarıyla ilgili bileşenler.
  - `addStaff.jsx` → Yeni personel ekleme bileşeni.
  - `customModal.jsx` → Modal pencereler için ortak bileşen.
  - `formActions.jsx` → Form işlemleri için butonlar.
  - `formContent.jsx` → Form içeriğini düzenleyen bileşen.
  - `tabNavigation.jsx` → Form içinde sekmeli gezinme bileşeni.
- **generic/** → Genel kullanılan bileşenler.
  - `header.jsx` → Sayfanın üst kısmındaki başlık bileşeni.
  - `footer.jsx` → Sayfanın alt kısmındaki bileşen.
  - `blank.jsx` → Boş bir bileşen, gerektiğinde kullanılabilir.

### 2. **pages/**
Bu klasör, uygulamanın ana sayfalarını içerir.
- **staff/** → Çalışanlarla ilgili sayfalar.
  - `mainForm.jsx` → Çalışan ekleme/düzenleme formu.
  - `employeeList.jsx` → Çalışan listesi sayfası.
  - `achievementsInfo.jsx` → Çalışan başarıları sekmesi.
  - `generalInfo.jsx` → Çalışan genel bilgileri sekmesi.
  - `skillsInfo.jsx` → Çalışan becerileri sekmesi.
- **company.jsx** → Şirketle ilgili genel bilgiler sayfası.
- **edit.jsx** → Düzenleme sayfası.
- **projects.jsx** → Proje yönetimi sayfası.
- **schedule.jsx** → Çalışma programı sayfası.
- **settings.jsx** → Ayarlar sayfası.
- **teams.jsx** → Ekipler sayfası.
- **not-found.jsx** → 404 hata sayfası.

### 3. **redux/**
Redux Toolkit kullanılarak oluşturulan global state yönetimi.
- `employeeSlice.js` → Çalışan verilerini yöneten slice.
- `tabSlice.js` → Sekmelerin yönetimini sağlayan slice.

### 4. **schemas/**
- `schema.jsx` → Form doğrulama kurallarını içeren dosya (Formik & Yup).

### 5. **services/**
- `service.js` → JSON Server ile API isteklerini yöneten dosya.

### 6. **utils/**
- `localStorageHelper.js` → LocalStorage işlemlerini yöneten yardımcı fonksiyonlar.

### 7. **styles/**
- Uygulamaya özel stil dosyaları.

### 8. **Diğer Dosyalar**
- `App.jsx` → Ana bileşen.
- `main.jsx` → React uygulamasını başlatan dosya.
- `store.js` → Redux store'un oluşturulduğu dosya.
- `db.json` → JSON Server için sahte veritabanı dosyası.

## Kullanılan Teknolojiler
- **React.js** → Arayüz geliştirme.
- **Redux Toolkit** → Global state yönetimi.
- **Formik & Yup** → Form yönetimi ve doğrulama.
- **JSON Server** → Sahte API oluşturma.
- **LocalStorage** → Kullanıcı verilerini yerel olarak saklama.
- **Vite** → Hızlı geliştirme sunucusu ve derleme aracı.
- **ESLint** → Kod kalite kontrolü.

## Kurulum & Çalıştırma
1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
2. **Uygulamayı geliştirme modunda çalıştırın:**
   ```bash
   npm run dev
   ```
   - Bu komut, **JSON Server**'ı `http://localhost:5000` adresinde ve **Vite geliştirme sunucusunu** başlatır.


