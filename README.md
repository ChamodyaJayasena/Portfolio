# Chamodya Jayasena - Modern Professional Portfolio

A clean, modern, and professional portfolio website built with **React**, **Vite**, and **Tailwind CSS**, designed in an elegant **Dark Navy Blue and White** theme with subtle glowing cyan accents.

---

## 🎨 Theme & Design System
- **Background**: Deep Navy Blue (`#060B18`, `#0B132B`)
- **Card Surfaces**: Translucent Navy Glassmorphism (`rgba(15, 26, 56, 0.7)`) with refined borders (`border-navy-700/60`) and subtle cyan glow on hover
- **Typography**: Pure White (`#FFFFFF`) for bold titles and headings, Off-White / Ice Slate (`#F8FAFC`, `#E2E8F0`) for readable body text, and Electric Cyan (`#38BDF8`) for highlights
- **Accents**: Cyan / Royal Blue gradients, animated pulse indicators, modern badges, and interactive category filters

---

## 📂 Project Architecture

```
my_portfolio/
├── public/
│   ├── Chamodya_Jayasena_CV.pdf   # Downloadable CV
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── profile.jpg            # Profile avatar image (with fallback)
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky glassmorphic navbar with active scroll spy
│   │   ├── Hero.jsx               # Hero banner with bio, stats, CTA, & tech card
│   │   ├── About.jsx              # Undergraduate journey & 4 core engineering pillars
│   │   ├── Skills.jsx             # Categorized technical skills with interactive filter
│   │   ├── Projects.jsx           # Featured project showcase with filters & links
│   │   ├── Education.jsx          # Academic history & Moratuwa certification
│   │   ├── Contact.jsx            # Direct contact cards, copy email, & message form
│   │   ├── Footer.jsx             # Brand footer, fast navigation, & back-to-top button
│   │   └── Icons.jsx              # Vector SVG icons for GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.js       # Central data source for all portfolio content
│   ├── App.jsx                    # Root layout & component assembly
│   ├── index.css                  # Custom Tailwind layers, scrollbars, & glass utilities
│   └── main.jsx                   # React entry point
├── index.html                     # HTML5 template with SEO meta tags & Inter font
├── tailwind.config.js             # Custom dark navy theme configuration
├── postcss.config.js              # PostCSS plugins configuration
└── package.json
```

---

## 🚀 How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## ✏️ How to Customize Your Portfolio

All personal information, project details, skills, and links are centralized in:
👉 [`src/data/portfolioData.js`](file:///c:/Users/Pasindu/OneDrive/Desktop/my_portfolio/src/data/portfolioData.js)

- **Change Projects / Details**: Update the `projects` array in `portfolioData.js`.
- **Change Technical Skills**: Update `skillCategories` in `portfolioData.js`.
- **Change Education / Certifications**: Update `educationHistory` and `certifications` in `portfolioData.js`.
- **Profile Picture**: Replace `src/assets/profile.jpg` with your photo. (If missing or loading fails, an initials fallback avatar is displayed automatically).
- **CV / Resume**: Replace `public/Chamodya_Jayasena_CV.pdf` with an updated PDF whenever needed.
