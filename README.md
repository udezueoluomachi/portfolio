# The "Dream" Portfolio - V2

> **"Code is poetry, written in logic."**

Welcome to the internal documentation for **Project Dream-Dev**. This isn't just a portfolio; it's `/**IDK what to say here.**/`.

It uses a "Matrix" design system, physics-based animations, and a decentralized data structure so you can update your content without touching complex code.

---

## 🚀 Quick Start

If you just want to get this running on your machine, follow these three steps. I assume you have `Node.js` installed. If not, go download that first.

### 1. Clone & Install
Open your terminal (Command Prompt or PowerShell) and run:

```bash
# Install dependencies
npm install
```

### 2. Ignite the Engine
Start the local development server:

```bash
npm run dev
```

### 3. Visit Localhost
Open your browser and go to:
`http://localhost:3000`

You should see the site live. Changes you make to the code will update instantly (mostly).

---

## 📂 System Architecture (How it Works)

The project is built on **Next.js (App Router)**. Here is the map of the territory:

### `src/app`
This is the core. `page.jsx` is the main entry point. It loads all the components (Hero, About, Skills, etc.) in order.
- **`layout.js`**: Controls global fonts (JetBrains Mono) and metadata.
- **`globals.scss`**: The master stylesheet. Contains the "Starry Universe" background hacks and scrollbar styles.

### `src/components`
The Lego blocks of the site.
- **`sections/`**: The big blocks of the page.
  - `Hero.jsx`: The top section with the "{DREAM}" typing effect.
  - `Skills.jsx`: The horizontal scrolling "Arsenal" section.
  - `Projects.jsx`: The gallery with the new **Lightbox** feature.
- **`ui/`**: Smaller, reusable tools.
  - `DockNav.jsx`: The iOS-style bottom floating menu.
  - `ImageViewer.jsx`: The full-screen image modal.
  - `CustomCursor.jsx`: The magnetic circle following your mouse.

### `src/data` (⚡ EDIT THIS FIRST)
**This is the most important folder for you.** You don't need to be a React expert to change the content. Just edit these files:

- **`experience.js`**: Your job history.
- **`projects.js`**: Your list of works, images, and links.
- **`skills.js`**: The tags shown in the Arsenal section.

---

## 🛠️ Key Features & "How to Hack"

### 1. The Liquid Dock (`DockNav.jsx`)
This is the floating bar at the bottom. It uses **Framer Motion** for the spring physics.
- **Icons**: We use `lucide-react`. If you want to change an icon, import a new one from that library and swap it in the `<DockItem />`.

### 2. The Lightbox (`ImageViewer.jsx`)
In the Projects section, clicking an image opens it in full screen.
- **Logic**: We use a simple State (`selectedImage`). When it's not null, the `ImageViewer` renders on top of everything using a fixed z-index (`z-[100]`).

### 3. Parallax Background
The background isn't a video. It's code.
- **`ParallaxBackground.jsx`**: It renders math formulas (`\int`, `\sum`) and code snippets (`const dream = true`) that float at different speeds depending on your mouse position.

---

## 🎨 Customizing Colors

We use **Tailwind CSS**. Most colors are defined in utility classes like `text-orange-500` or `bg-black/90`.

- **To change the Main Accent**: Look for `cyan` or `orange` classes in `Hero.jsx` and replace them with your favorite color (e.g., `purple`, `emerald`).
- **To change the "{DREAM}" text**: Go to `src/components/sections/Hero.jsx`. It's hardcoded to `#F97316` (Orange) to ensure it pops.

---

## 🚢 deploying to the World

When you are ready to show this to the world:

1.  Push your code to **GitHub**.
2.  Go to **Vercel.com**, login, and click "Add New Project".
3.  Import your repository.
4.  Click **Deploy**.

That's it. Vercel handles the rest.

Do not forget to give credit.

If you wanna build cool stuff, contact me.

This project was inspired by other portfolios I have came across over the years...

---

**Built with 🖤 by Oluomachi.**
*Next.js • Tailwind • Framer Motion • GSAP*
