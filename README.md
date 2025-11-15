# Portfolio

A modern, responsive portfolio website built with React and Vite.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 🛠️ Skills section with progress bars
- 📧 Contact form
- 🎭 Beautiful animations

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling
- **JavaScript (ES6+)** - Programming language

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AYUSHRAJPUT1012/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Project Structure

```
Portfolio/
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

## Customization

To customize this portfolio for your own use:

1. Update personal information in the components:
   - Hero section: Edit `src/components/Hero.jsx`
   - About section: Edit `src/components/About.jsx`
   - Projects: Edit `src/components/Projects.jsx`
   - Skills: Edit `src/components/Skills.jsx`
   - Contact: Edit `src/components/Contact.jsx`

2. Replace the title in `index.html`

3. Update social media links and contact information in the Contact component

## Building for Production

Build the project for production:

```bash
npm run build
```

The build output will be in the `dist` directory, ready to be deployed to any static hosting service.

## Deployment

You can deploy this portfolio to various platforms:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder or connect your GitHub repo
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## License

This project is open source and available under the MIT License.

## Contact

For any questions or suggestions, please reach out!
