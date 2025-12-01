# VRM Groups Landing Website

A professional landing website for VRM Groups - Building, Construction and Infrastructure company.

## 🏗️ About

This is a modern, responsive landing website built with React for VRM Groups, showcasing their construction and infrastructure services. The website features a clean design with a color scheme based on the company logo (Yellow #FFC600 and Navy Blue #003049).

## ✨ Features

- **Responsive Navigation Bar** - Sticky header with mobile menu
- **Hero Section** - Eye-catching banner with call-to-action
- **About Section** - Company information and key features
- **Services Section** - Comprehensive list of construction services
- **Projects Portfolio** - Featured projects showcase
- **Why Choose Us** - Key differentiators and statistics
- **Contact Form** - Get in touch section with contact details
- **Professional Footer** - Complete footer with links and social media

## 🎨 Color Scheme

- Primary Yellow: `#FFC600`
- Primary Navy: `#003049`
- Dark Navy: `#001D2E`
- Light Blue: `#669BBC`
- White: `#FFFFFF`
- Light Gray: `#F5F5F5`

## 📦 Installation

1. Navigate to the project directory:
```bash
cd vrm-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🚀 Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
vrm-landing/
├── public/
│   ├── assets/          # Logo and images
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Projects.js
│   │   ├── WhyChooseUs.js
│   │   ├── ContactCTA.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## 🔧 Customization

### Update Company Information
Edit the content in each component file under `src/components/` to match your company details.

### Change Colors
Modify the CSS variables in `src/App.css`:
```css
:root {
  --primary-yellow: #FFC600;
  --primary-navy: #003049;
  /* ... other colors */
}
```

### Add Images
Place your images in the `public/assets/` folder and reference them using:
```javascript
{process.env.PUBLIC_URL + '/assets/your-image.png'}
```

## 📱 Sections

1. **Home** - Hero section with company branding
2. **About Us** - Company overview and experience
3. **Services** - Detailed service offerings
4. **Projects** - Portfolio of completed projects
5. **Why Choose Us** - Company strengths and statistics
6. **Contact** - Contact form and company details

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for VRM Groups.

## 🤝 Support

For support, email info@vrmgroups.com

---

Built with ❤️ using React
