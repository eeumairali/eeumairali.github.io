# Umair Ali - Professional Python Tutor Portfolio

A professional, SEO-optimized portfolio website for Python tutoring and machine learning services, built with Next.js and deployed on GitHub Pages.

## Features

- 🎓 **Professional Portfolio**: Showcase experience, skills, and certifications
- 🔍 **SEO Optimized**: Fully optimized for search engines with meta tags, structured data, and keyword targeting
- 📱 **Responsive Design**: Mobile-first design with beautiful UI/UX
- 📧 **Contact Form**: One-click messaging with Formspree integration
- 🔐 **Admin Panel**: Secure admin login to manage certificates
- 🚀 **Performance**: Optimized for speed and Core Web Vitals
- 🌍 **Custom Domain**: Configured for umairali.me domain

## Keywords Targeted

- Best Python tutor
- Python teacher
- Python instructor
- Machine learning expert
- Data science tutor
- Python exam preparation
- AI tutor
- Deep learning instructor
- Python programming course
- Computer vision expert

## Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Domain**: Custom domain (umairali.me)
- **Forms**: Formspree integration

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Contact Form

1. Go to [Formspree](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Replace `your-form-id` in `pages/index.tsx` with your actual Formspree form ID:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
```

### 3. Update Contact Information

Update the contact information in `pages/index.tsx`:

```typescript
// Update these with your actual details
<span>your-email@example.com</span>
<span>+92 300 1234567</span>
<span>Gujrat, Pakistan</span>
```

### 4. Add Your Profile Image

1. Add your profile image to `public/` folder
2. Update the image source in `pages/index.tsx`:

```typescript
<img
  src="/your-profile-image.jpg"
  alt="Umair Ali - Python Tutor"
  className="w-full h-auto rounded-xl shadow-lg"
/>
```

### 5. Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site locally.

### 6. Build and Export

```bash
npm run build
npm run export
```

This creates static files in the `out/` directory.

### 7. Deploy to GitHub Pages

#### Method 1: Automatic (Recommended)

The GitHub Action will automatically deploy when you push to the main branch.

#### Method 2: Manual

```bash
npm run deploy
```

## GitHub Pages Configuration

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Set source to "Deploy from a branch"
4. Select "gh-pages" branch
5. Your site will be available at `https://yourusername.github.io` and `https://umairali.me`

## Admin Panel

- Default password: `admin123`
- To access: Click the user icon in the navigation
- Features: Add/manage certificates

**⚠️ Important**: Change the admin password in `pages/index.tsx` for security:

```typescript
if (adminPassword === 'YOUR_NEW_PASSWORD') {
```

## SEO Features

- **Meta Tags**: Comprehensive meta tags for all major search engines
- **Open Graph**: Facebook and social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: Schema.org markup for better search results
- **Sitemap**: Auto-generated sitemap for search engines
- **Robots.txt**: Search engine crawling instructions

## Performance Features

- **Static Export**: Lightning-fast loading times
- **Image Optimization**: Optimized images for web
- **Font Optimization**: Efficient font loading
- **Code Splitting**: Automatic code splitting for faster loads
- **Caching**: Browser caching optimization

## Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize your brand colors
  },
}
```

### Content

Update your content in `pages/index.tsx`:

- Experience section
- Skills section
- About section
- Certifications

## Domain Setup

Your custom domain `umairali.me` is already configured:

1. The `CNAME` file in the root contains `umairali.me`
2. The `public/CNAME` file ensures the domain is preserved after deployment
3. The GitHub Action automatically handles the CNAME file

## Support

For any issues or questions, contact: your-email@example.com

## License

This project is licensed under the MIT License.
