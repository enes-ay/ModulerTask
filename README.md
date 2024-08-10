# Modüler Site Tasarımı

Stil Değiştirici, kullanıcıların web sitesinin görünümünü özelleştirmesine olanak tanıyan dinamik bir özelliktir. Bir yan menü aracılığıyla erişilebilir ve metin rengini, arka plan rengini ve yazı tipini değiştirme seçenekleri sunar. Ayrıca, Kullanıcıların Portföy, Hakkımızda, Blog ve İletişim gibi belirli bölümleri göstermesine veya gizlemesine olanak tanır.

### Nasıl Çalışır
- Stil Değiştirici, sol tarafta bulunan kalem simgesi düğmesi ile açılıp kapatılabilen bir yan menü aracılığıyla kontrol edilir. Açık olduğunda, menü çeşitli özelleştirme seçenekleri sunar:

- Metin Rengi: Kullanıcılar, web sitesinin ana metin rengini değiştirmek için bir renk seçici kullanabilirler.
- Arka Plan Rengi: Arka plan rengini değiştirmek için bir renk seçici kullanılır.
- Yazı Tipi: Kullanıcılar, açılır menüden Sans Serif, Serif ve Monospace yazı tipleri arasında seçim yapabilirler.



## Setup
Node.js ve npm'in kurulu olması gerekmektedir
```bash
  git clone https://github.com/enes-ay/ModulerTask.git
```
```bash
  cd ModulerTask
  npm run dev
```
## Kullanılan Teknolojiler
### React.js
- React: Yan menü ve işlevselliği React bileşenleri olarak uygulanmıştır. React’in durum yönetimi (useState) kullanıcı tarafından seçilen stilleri ve bölüm görünürlüğünü kontrol etmek için kullanılır.

- React Component Yapısı: Projede, her ana bölüm (örneğin, "Portfolio", "About", "Blog", "Contact") bağımsız bir React bileşeni olarak yapılandırıldı. Bu sayede, her bölüm kendi iç işleyişini ve stilini yönetebilir. Ayrıca, "Style Switcher" gibi kullanıcı etkileşimlerine dayalı bileşenler, React’in state ve props sistemleri kullanılarak dinamik bir şekilde kontrol edilebilir. Bu modüler yaklaşım, uygulamanın her bir parçasının bağımsız olarak geliştirilip test edilebilmesini sağlar.

### Tailwind CSS
- Tailwind CSS: Menü ve bileşenleri, temiz ve duyarlı bir tasarım için Tailwind CSS kullanılarak stil verilmiştir.
### 

#### Stil Yönetimi:
SideMenu bileşeni Stil Değiştirici işlevselliğini yönetir:

- Durum Yönetimi: Bileşen, kullanıcı etkileşimlerine göre stilleri ve bölüm görünürlüğünü güncellemek için setPrimaryColor, setSecondaryColor, setFontFamily ve setSections işlevlerini kullanır.

- Menüyü Açma/Kapama: Yan menü, kalem simgesine tıklanarak açılır veya kapanır, bu işlem isOpen durumunu değiştirir.

- Stil Seçimi: Kullanıcılar, menü içindeki giriş alanları ve açılır menüler aracılığıyla metin rengi, arka plan rengi ve yazı tipini değiştirebilirler.

- Bölüm Görünürlüğü: toggleSection işlevi, kullanıcıların bireysel bölümleri göstermesine veya gizlemesine olanak tanır, toggleAllSections ise tüm bölümleri bir anda yönetmek için hızlı bir yol sunar.


