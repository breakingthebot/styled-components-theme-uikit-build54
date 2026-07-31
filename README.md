# Build 54: Styled Components Theme-able UI Kit

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-000000?style=for-the-badge&logo=vercel)](https://styled-components-theme-uikit-build54.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/breakingthebot/styled-components-theme-uikit-build54)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](file:///C:/Users/marve/Desktop/AI-286-Builds/Build_54/LICENSE)
[![Styled Components](https://img.shields.io/badge/Styled--Components-CSS--in--JS-DB7093?style=for-the-badge&logo=styledcomponents)](file:///C:/Users/marve/Desktop/AI-286-Builds/Build_54/src/styles/theme.js)
[![Release](https://img.shields.io/badge/Release-v1.3.0-indigo?style=for-the-badge)](file:///C:/Users/marve/Desktop/AI-286-Builds/Build_54/CHANGELOG.md)

---

## 🌟 Overview

**Styled Components UI Kit (Build 54)** is a standalone, production-grade **React UI Component Library** engineered using **styled-components (CSS-in-JS)** to demonstrate real-time Light/Dark theme switching, dynamic prop-based styling, and 100% component style encapsulation. 

Featuring 9 theme-aware components (`Button`, `Progress`, `Skeleton`, `Tabs`, `Modal`, `Card`, `Badge`, `Switch`, `Input`), this UI kit allows developers to pass custom themes via `<ThemeProvider>` while dynamically computing surface colors, backdrop filters, and text contrast.

### 🌐 Live Production & Repository Links
- **Live Vercel Application**: [https://styled-components-theme-uikit-build54.vercel.app](https://styled-components-theme-uikit-build54.vercel.app)
- **GitHub Codebase**: [https://github.com/breakingthebot/styled-components-theme-uikit-build54](https://github.com/breakingthebot/styled-components-theme-uikit-build54)
- **License**: [MIT License](file:///C:/Users/marve/Desktop/AI-286-Builds/Build_54/LICENSE)

---

## 📂 Directory Architecture

```
Build_54/
├── src/
│   ├── components/
│   │   ├── Button/           # Button.jsx
│   │   ├── Progress/         # Progress.jsx
│   │   ├── Skeleton/         # Skeleton.jsx
│   │   ├── Tabs/             # Tabs.jsx
│   │   ├── Modal/            # Modal.jsx
│   │   ├── Card/             # Card.jsx
│   │   ├── Badge/            # Badge.jsx
│   │   ├── Switch/           # Switch.jsx (Theme Switcher)
│   │   └── Input/            # Input.jsx
│   ├── styles/
│   │   ├── theme.js          # lightTheme & darkTheme tokens
│   │   └── GlobalStyle.js    # createGlobalStyle baseline
│   ├── App.jsx               # Interactive Component Playground
│   └── main.jsx              # React application entry point
├── AGENTS.md                 # Master SOP Guidelines (copied & enforced)
├── BUILD_NOTES.md            # Append-only iteration log
├── CHANGELOG.md              # Technical version history
├── README.md                 # System overview & live documentation
├── LICENSE                   # Official MIT License
├── package.json              # Project dependencies & build scripts
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel SPA routing & dist output configuration
└── .gitignore                # SOP exclusion rules
```

---

## 🧩 Included Components

1. **🔘 Styled Button (`Button.jsx`)**:
   - Primary, secondary, danger, outline, and ghost style variants with loading spinner, size props (`sm`, `md`, `lg`), and `fullWidth` toggle.
2. **📊 Styled Progress Bar (`Progress.jsx`)**:
   - Linear progress indicators with percentage labels, gradient fills, and animated shine overlays.
3. **💀 Styled Skeleton Loader (`Skeleton.jsx`)**:
   - Shimmer wave placeholder elements for text, circular avatars, rectangular cards, and image blocks.
4. **📇 Styled Tabs Navigation (`Tabs.jsx`)**:
   - Underline, pills, and segmented tab switcher variants with active indicator bars, icons, and badge support.
5. **🪟 Styled Modal Overlay (`Modal.jsx`)**:
   - Accessible theme-aware modal dialog with backdrop blur overlays, scale-up entrance keyframe animations, size variants (`sm`, `md`, `lg`), and keyboard `ESC` dismissal.
6. **🃏 Styled Card (`Card.jsx`)**:
   - Standard, glassmorphism, and gradient background variants with composable sub-components (`Card.Header`, `Card.Body`, `Card.Footer`).
7. **🏷️ Styled Badge Pill (`Badge.jsx`)**:
   - Status color pills (`success`, `warning`, `danger`, `info`, `neutral`) with animated pulse dot indicators.
8. **🌙 Styled Theme Switch (`Switch.jsx`)**:
   - Interactive sliding track switch for real-time Light/Dark theme switching.
9. **📝 Styled Form Input (`Input.jsx`)**:
   - Text inputs with URL addon prepends, validation error borders, and helper text.

---

## 📄 Data Handling

This component library operates 100% client-side in browser memory. No user inputs, cookies, or telemetry logs are stored or transmitted.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](file:///C:/Users/marve/Desktop/AI-286-Builds/Build_54/LICENSE) for more information.
