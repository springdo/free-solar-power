# Free Solar Power Website

Modern website for a solar panel installation business built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/free-solar-power.git
cd free-solar-power
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Project Structure
```
free-solar-power/
├── public/
├── src/
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles and Tailwind imports
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 📦 Building for Production

1. Create production build
```bash
npm run build
```

2. Preview the build
```bash
npm run preview
```

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Log in to Netlify
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Build settings will be auto-detected
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI
```bash
npm install netlify-cli -g
```

2. Login to Netlify
```bash
netlify login
```

3. Initialize Netlify
```bash
netlify init
```

4. Deploy
```bash
netlify deploy --prod
```

### Build Settings

These should be auto-detected by Netlify, but if needed:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `16` (or higher)

## 📝 Environment Variables

If you need to add environment variables:

1. Locally: Create `.env` file
```
VITE_API_KEY=your_api_key
```

2. On Netlify:
   - Go to Site settings > Build & deploy > Environment
   - Add your variables there

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details
