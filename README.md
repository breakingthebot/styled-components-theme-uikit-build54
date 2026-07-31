# Build 54: Styled Components Theme-able UI Kit

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-000000?style=for-the-badge&logo=vercel)](https://styled-components-theme-uikit-build54.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/breakingthebot/styled-components-theme-uikit-build54)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Styled Components](https://img.shields.io/badge/Styled--Components-CSS--in--JS-DB7093?style=for-the-badge&logo=styledcomponents)](https://styled-components.com)
[![Release](https://img.shields.io/badge/Release-v2.7.0-indigo?style=for-the-badge)](CHANGELOG.md)

---

## 🌟 Overview

**Styled Components UI Kit (Build 54)** is a standalone, production-grade **React UI Component Library** engineered using **styled-components (CSS-in-JS)** to demonstrate real-time Light/Dark theme switching, dynamic prop-based styling, and 100% component style encapsulation. 

Featuring 25 theme-aware components (`Button`, `CommandPalette`, `Toast`, `Popover`, `SegmentedControl`, `Table`, `Drawer`, `Breadcrumb`, `Slider`, `Alert`, `Select`, `Accordion`, `Tooltip`, `Checkbox`, `Toggle`, `Avatar`, `AvatarGroup`, `Progress`, `Skeleton`, `Tabs`, `Modal`, `Card`, `Badge`, `Switch`, `Input`), this UI kit allows developers to pass custom themes via `<ThemeProvider>` while dynamically computing surface colors, backdrop filters, and text contrast.

### 🌐 Live Production & Repository Links
- **Live Vercel Application**: [https://styled-components-theme-uikit-build54.vercel.app](https://styled-components-theme-uikit-build54.vercel.app)
- **GitHub Codebase**: [https://github.com/breakingthebot/styled-components-theme-uikit-build54](https://github.com/breakingthebot/styled-components-theme-uikit-build54)
- **License**: [MIT License](LICENSE)

---

## 📂 Directory Architecture

```
Build_54/
├── src/
│   ├── components/
│   │   ├── Button/           # Button.jsx
│   │   ├── CommandPalette/   # CommandPalette.jsx
│   │   ├── Toast/            # Toast.jsx
│   │   ├── Popover/          # Popover.jsx
│   │   ├── SegmentedControl/ # SegmentedControl.jsx
│   │   ├── Table/            # Table.jsx
│   │   ├── Drawer/           # Drawer.jsx
│   │   ├── Breadcrumb/       # Breadcrumb.jsx
│   │   ├── Slider/           # Slider.jsx
│   │   ├── Alert/            # Alert.jsx
│   │   ├── Select/           # Select.jsx
│   │   ├── Accordion/        # Accordion.jsx
│   │   ├── Tooltip/          # Tooltip.jsx
│   │   ├── Checkbox/         # Checkbox.jsx
│   │   ├── Toggle/           # Toggle.jsx
│   │   ├── Avatar/           # Avatar.jsx
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
2. **🔍 Styled Command Palette (`CommandPalette.jsx`)**:
   - Modal command palette with global `⌘K` keyboard shortcut trigger, real-time search query filtering, category groupings, shortcut badges, backdrop blur overlays, and keyboard `ESC` dismissal.
3. **🔔 Styled Toast Notification (`Toast.jsx`)**:
   - Floating toast notification overlay with contextual status variants (`info`, `success`, `warning`, `danger`), left accent borders, status icons (`ℹ️`, `✅`, `⚠️`, `🚨`), slide-in entrance animations (`slideInRight`, `slideInLeft`), position anchors, and dismiss triggers.
4. **🪟 Styled Popover (`Popover.jsx`)**:
   - Click-triggered floating popover panel with position anchors (`bottomLeft`, `bottomRight`, `topLeft`, `topRight`), title headers, click-outside dismissal, and scale-up entrance keyframe animations.
5. **🎛️ Styled Segmented Control (`SegmentedControl.jsx`)**:
   - Compact horizontal view switcher with active pill surface backgrounds, option icons, size props (`sm`, `md`, `lg`), and `fullWidth` mode.
6. **🗂️ Styled Data Table & Pagination (`Table.jsx`)**:
   - Sortable data table with striped rows, row hover highlights, custom cell renderers (status badge pills), and pagination navigation bar.
7. **🪟 Styled Slide-Over Drawer (`Drawer.jsx`)**:
   - Side sheet drawer panel with backdrop blur overlays, sliding keyframe animations (`slideRight`, `slideLeft`), edge anchors (`left`, `right`), size options (`sm`, `md`, `lg`), and keyboard `ESC` dismissal.
8. **📇 Styled Breadcrumb Navigation (`Breadcrumb.jsx`)**:
   - Hierarchical page navigation path with separator icons, active page highlighting (`aria-current="page"`), and accessible `<nav>` markup.
9. **🎛️ Styled Slider Range Control (`Slider.jsx`)**:
   - Custom range input slider with dynamic gradient track percentage fills, hover thumb handles with focus halos, live value badges, and custom unit labels.
10. **🔔 Styled Alert Banner (`Alert.jsx`)**:
   - Contextual inline alert callouts (`info`, `success`, `warning`, `danger`) with left accent borders, status icons (`ℹ️`, `✅`, `⚠️`, `🚨`), and dismiss triggers.
11. **📇 Styled Dropdown Select (`Select.jsx`)**:
   - Custom select dropdown with item icons, selected checkmark indicators (`✓`), disabled states, click-outside dismissal, and rotating chevron animations (`rotate(180deg)`).
12. **🗂️ Styled Accordion FAQ (`Accordion.jsx`)**:
   - Smooth expandable disclosure FAQ panels with CSS grid height transitions and rotating chevron indicators (`rotate(180deg)`).
13. **🪟 Styled Tooltip (`Tooltip.jsx`)**:
   - Directional callout tooltips (`top`, `bottom`, `left`, `right`) with arrow indicators and scale/fade entrance animations.
14. **☑️ Styled Checkbox (`Checkbox.jsx`)**:
   - Custom checkmark square input box with active theme brand fills, focus ring halos, and disabled states.
15. **🎛️ Styled Toggle Switch (`Toggle.jsx`)**:
   - Sliding track switch with theme brand track fills, smooth thumb sliding animations, and title/description label text.
16. **🖼️ Styled Avatar & Avatar Group (`Avatar.jsx`)**:
   - User avatar badges with initials fallbacks, status indicator rings (`online`, `busy`, `away`, `offline`), and stacked avatar group overlaps with `+N` remaining counter.
17. **📊 Styled Progress Bar (`Progress.jsx`)**:
   - Linear progress indicators with percentage labels, gradient fills, and animated shine overlays.
18. **💀 Styled Skeleton Loader (`Skeleton.jsx`)**:
   - Shimmer wave placeholder elements for text, circular avatars, rectangular cards, and image blocks.
19. **📇 Styled Tabs Navigation (`Tabs.jsx`)**:
   - Underline, pills, and segmented tab switcher variants with active indicator bars, icons, and badge support.
20. **🪟 Styled Modal Overlay (`Modal.jsx`)**:
   - Accessible theme-aware modal dialog with backdrop blur overlays, scale-up entrance keyframe animations, size variants (`sm`, `md`, `lg`), and keyboard `ESC` dismissal.
21. **🃏 Styled Card (`Card.jsx`)**:
   - Standard, glassmorphic, and gradient background variants with composable sub-components (`Card.Header`, `Card.Body`, `Card.Footer`).
22. **🏷️ Styled Badge Pill (`Badge.jsx`)**:
   - Status color pills (`success`, `warning`, `danger`, `info`, `neutral`) with animated pulse dot indicators.
23. **🌙 Styled Theme Switch (`Switch.jsx`)**:
   - Interactive sliding track switch for real-time Light/Dark theme switching.
24. **📝 Styled Form Input (`Input.jsx`)**:
   - Text inputs with URL addon prepends, validation error borders, and helper text.

---

## 📄 Data Handling

This component library operates 100% client-side in browser memory. No user inputs, cookies, or telemetry logs are stored or transmitted.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
