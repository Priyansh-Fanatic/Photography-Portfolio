# Priyansh Photography Portfolio

A modern, responsive photography portfolio website built with Next.js 15, showcasing professional photography work across multiple genres including street photography, wildlife, landscapes, and spiritual imagery.

## 🌟 Features

- **Modern Design**: Clean, minimal aesthetic with elegant typography and smooth animations
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Interactive Gallery**: Advanced lightbox gallery with masonry layout and keyboard navigation
- **Project Showcases**: Detailed project pages with comprehensive descriptions and image collections
- **Contact Integration**: Functional contact form with EmailJS integration
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Performance Optimized**: Built with Next.js 15 for optimal performance and SEO

## 🚀 Live Demo

Visit the live website: [Priyansh Photography Portfolio](https://v0-photographer-portfolio.vercel.app)

## 📸 Photography Categories

- **Street Photography**: Documentary exploration of urban environments
- **Wildlife**: Birds, animals, and nature photography
- **Landscape**: Mountain ranges, scenic views, and natural beauty
- **Spiritual**: Religious architecture and spiritual practices
- **Celestial**: Astrophotography and moon phases
- **Abstract**: Creative compositions and artistic interpretations
- **Architecture**: Buildings, structures, and urban design
- **Travel**: Journey documentation and cultural exploration
- **Urban Life**: City life and human interactions
- **Night Photography**: Low-light and evening captures

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter, Playfair Display
- **Form Handling**: React Hook Form with Zod validation
- **Email Service**: EmailJS
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page with category filters
│   ├── projects/          # Projects listing and detail pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── contact-form.tsx  # Contact form with validation
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── lightbox-gallery.tsx # Advanced gallery component
│   └── project-detail.tsx # Project detail view
├── public/               # Static assets
│   └── images/          # Photography portfolio images
└── lib/                 # Utility functions
\`\`\`

## 🎨 Key Components

### Lightbox Gallery
- Masonry and grid layout options
- Keyboard navigation (arrow keys, escape)
- Touch/swipe support for mobile
- Image preloading and error handling
- Category filtering and search

### Project System
- Detailed project pages with metadata
- Equipment and technique information
- Location tagging with visual bubbles
- Image galleries with descriptions

### Contact Form
- Real-time validation with Zod
- EmailJS integration for form submissions
- Success/error state handling
- Responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/photography-portfolio.git
cd photography-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Set up environment variables:
Create a `.env.local` file and add your EmailJS configuration:
\`\`\`env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template with the following variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{timestamp}}`
4. Update the service ID and template ID in the contact form component

## 🎨 Customization

### Colors
The project uses a custom color scheme defined in `tailwind.config.ts`:
- **Brand Blue**: `#0A1E81`
- **Brand Orange**: `#FF6B0E`

### Adding New Images
1. Add images to the `public/images/` directory
2. Update the respective gallery arrays in the page components
3. Follow the naming convention: `category-description.jpeg`

### Adding New Projects
1. Add project data to the `getProjectById` function in `app/projects/[projectId]/page.tsx`
2. Include project metadata, descriptions, and image arrays
3. Add the project to the projects list in `app/projects/page.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Static Generation**: Pre-rendered pages for optimal performance
- **Font Optimization**: Google Fonts optimization
- **Bundle Analysis**: Built-in bundle analyzer

## 🔧 Development

### Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
\`\`\`

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (if configured)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Priyansh** - [@priyansh_h_](https://instagram.com/priyansh_h_) - officialpriyansh25@gmail.com

Project Link: [https://github.com/yourusername/photography-portfolio](https://github.com/yourusername/photography-portfolio)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon library
- [EmailJS](https://www.emailjs.com/) for email functionality
- [Vercel](https://vercel.com/) for hosting and deployment

---

Built with ❤️ by Priyansh
