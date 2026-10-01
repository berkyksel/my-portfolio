# My Portfolio

Kişisel portfolyo sitesi olarak geliştirilmiş, modern ve responsive bir web uygulamasıdır. Proje; kişisel bilgiler, yetenekler, deneyimler ve geliştirilen projelerin tek bir platform üzerinden sergilenmesi amacıyla hazırlanmıştır.

## Proje Özeti

Bu proje, bir yazılım geliştiricinin teknik yeteneklerini, deneyimlerini ve projelerini ziyaretçilere modern bir arayüz üzerinden sunmak amacıyla geliştirilmiştir.

Ana sayfada aşağıdaki bölümler bulunmaktadır:

* **Navbar** — Sayfa bölümleri arasında gezinme
* **Hero** — Kişisel tanıtım ve temel bilgiler
* **About** — Hakkımda bölümü
* **Skills** — Teknik yetenekler ve kullanılan teknolojiler
* **Projects** — Geliştirilen projelerin sergilendiği bölüm
* **Experience** — Eğitim ve iş/staj deneyimleri
* **Contact** — İletişim bilgileri
* **GitHub & CV** — GitHub profili ve CV'ye hızlı erişim

## Özellikler

* Responsive tasarım
* Modern ve koyu tema
* Tek sayfalık portfolio yapısı
* Component tabanlı React mimarisi
* Next.js App Router kullanımı
* TypeScript ile tip güvenliği
* Tailwind CSS ile modern stil yönetimi
* Yeniden kullanılabilir UI bileşenleri
* Projelerin ve deneyimlerin düzenli şekilde sergilenmesi
* GitHub ve CV bağlantıları
* Mobil, tablet ve masaüstü cihazlara uyumlu tasarım

## Kullanılan Teknolojiler

| Teknoloji        | Kullanım Alanı                        |
| ---------------- | ------------------------------------- |
| **Next.js**      | Web uygulaması ve sayfa yapısı        |
| **React**        | Kullanıcı arayüzü ve component yapısı |
| **TypeScript**   | Tip güvenliği ve geliştirme           |
| **Tailwind CSS** | Stil ve responsive tasarım            |
| **shadcn/ui**    | UI bileşenleri                        |
| **Lucide React** | İkonlar                               |

## Proje Yapısı

```text
my-portfolio/
├── README.md
└── frontend/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    │
    ├── components/
    │   └── ui/
    │       ├── About.tsx
    │       ├── Contact.tsx
    │       ├── Experience.tsx
    │       ├── Hero.tsx
    │       ├── Iletisim.tsx
    │       ├── Navbar.tsx
    │       ├── Projects.tsx
    │       ├── Skills.tsx
    │       └── button.tsx
    │
    ├── lib/
    │   └── utils.ts
    │
    ├── public/
    ├── package.json
    ├── tsconfig.json
    ├── next.config.ts
    ├── postcss.config.mjs
    ├── eslint.config.mjs
    └── components.json
```

## Mimari

Proje, **Next.js App Router** yapısı kullanılarak geliştirilmiştir.

React component yapısı sayesinde sayfanın farklı bölümleri ayrı bileşenlere ayrılmıştır. Bu yapı, kodun daha düzenli ve sürdürülebilir olmasını sağlarken ileride yeni bölümlerin veya özelliklerin kolayca eklenmesine olanak tanımaktadır.

Stil yönetiminde **Tailwind CSS**, hazır ve yeniden kullanılabilir UI bileşenlerinde ise **shadcn/ui** kullanılmıştır.

## Responsive Tasarım

Site farklı ekran boyutlarına uyum sağlayacak şekilde tasarlanmıştır.

* Masaüstü
* Tablet
* Mobil

cihazlarda kullanılabilir bir arayüz hedeflenmiştir.

## Canlı Demo

[Portfolio Sitesi](https://berkyuksel.com)

## GitHub

[GitHub Profilim](https://github.com/berkyksel)

## Geliştirici

**Berk Yüksel**

Bilgisayar Mühendisi
Frontend Developer

---

Bu proje, modern frontend teknolojileri kullanarak kişisel bir portfolyo deneyimi oluşturmak ve geliştirilen projeleri sergilemek amacıyla geliştirilmiştir.
