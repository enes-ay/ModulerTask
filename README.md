# Setup
Node.js and npm are required first
git clone https://github.com/enes-ay/ModulerTask.git
cd ModulerTask
npm run dev
## Kullanılan Teknolojiler
### React.js
React, kullanıcı arayüzleri oluşturmak için en popüler JavaScript kütüphanelerinden biridir. Bu projede React'in tercih edilmesinin başlıca sebeplerinden biri, bileşen (component) tabanlı mimarisi sayesinde modüler ve yeniden kullanılabilir UI bileşenleri oluşturma yeteneğidir. Bu yapı, uygulamanın çeşitli bölümlerini (örneğin portfolyo, hakkımızda, blog ve iletişim) bağımsız bileşenler olarak yönetmeye olanak tanır, bu da kodun bakımını ve genişletilmesini kolaylaştırır.

- React Component Yapısı: Projede, her ana bölüm (örneğin, "Portfolio", "About Us", "Blog", "Contact") bağımsız bir React bileşeni olarak yapılandırıldı. Bu sayede, her bölüm kendi iç işleyişini ve stilini yönetebilir. Ayrıca, "Style Switcher" gibi kullanıcı etkileşimlerine dayalı bileşenler, React’in state ve props sistemleri kullanılarak dinamik bir şekilde kontrol edilebilir. Bu modüler yaklaşım, uygulamanın her bir parçasının bağımsız olarak geliştirilip test edilebilmesini sağlar.

### Tailwind CSS
Tailwind CSS, projeye hızlı, esnek ve özelleştirilebilir stil yönetimi getiren bir CSS framework’üdür. Tailwind’in utility-first (yardımcı sınıf) yapısı, bileşenlerin stilini inline olarak tanımlamaya ve değiştirmeye olanak tanır. Bu özellik, özellikle "Style Switcher" gibi dinamik stil değişikliklerine izin veren bir projede büyük bir avantaj sağlar.

- Tailwind ile Modülerlik: Tailwind CSS, her bileşenin stilinin, projenin diğer bölümlerinden bağımsız olarak yönetilebilmesine olanak tanır. Bu, her bileşenin kendi CSS sınıflarını barındırmasına gerek kalmadan, stil değişikliklerinin merkezi olarak kontrol edilebilmesini sağlar. Projede kullanılan "Style Switcher" modülü, Tailwind CSS ile kolayca entegre edilerek, kullanıcıların anlık olarak stil ayarlarını değiştirmesine ve sonuçları anında görmesine olanak tanır.

#### Stil Yönetimi:
 Tailwind CSS, her bir bileşenin stilini esnek bir şekilde tanımlamaya olanak tanır. Stil değiştirme modülü (Style Switcher), Tailwind’in utility sınıfları ile hızlı bir şekilde entegre edilerek, tüm sayfanın veya belirli bileşenlerin görünümünün dinamik olarak değiştirilmesini sağlar.

#### Durum Yönetimi:
 React'in state yönetimi, bileşenlerin durumlarına göre dinamik olarak render edilmesini sağlar. Bu, sayfanın belirli bölümlerinin (örneğin, portfolyo veya blog) "Style Switcher" üzerinden gizlenmesini veya gösterilmesini kolaylaştırır.

