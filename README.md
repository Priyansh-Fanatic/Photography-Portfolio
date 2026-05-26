# Priyansh — Creator Portfolio

This repository contains a modern, responsive portfolio site built with Next.js (App Router) to showcase photography, design and video work. It focuses on fast performance, accessibility, and a polished visual experience.

Key features include an interactive lightbox gallery with a masonry layout, detailed project pages, a contact form (EmailJS integration), theme support (dark/light), and responsive layouts across devices.

## 🌟 Features

- **Modern Design**: Clean, minimal aesthetic with elegant typography and smooth animations
- **Responsive Layout**: Works across phones, tablets, and desktop
- **Interactive Gallery**: Masonry lightbox with keyboard navigation and touch support
- **Project Showcases**: Rich project pages with metadata and equipment info
- **Contact Integration**: EmailJS-powered contact form (configurable via env)
- **Theme Support**: Dark / Light mode with system preference
- **Performance**: Optimized with Next.js and Tailwind CSS

## 🚀 Live Demo

Visit the live website: https://priyansh-creator-portfolio.vercel.app/

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter, Syne
- **Form Handling**: React Hook Form with Zod validation
- **Email Service**: EmailJS
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image component

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
- Node.js 18+ (LTS recommended)
- A package manager: `pnpm` is recommended (project includes `pnpm-lock.yaml`), but `npm` or `yarn` also work.

### Install & run (recommended)

1. Clone the repository:

```bash
git clone https://github.com/Priyansh-Fanatic/Photography-Portfolio.git
cd Photography-Portfolio
```

2. Install dependencies (recommended with Corepack/pnpm):

```bash
corepack enable
corepack pnpm install
# or if you prefer npm/yarn (lockfile may diverge):
# npm install
# yarn install
```

3. Configure environment variables (optional but recommended for contact form):

Create a `.env.local` file with your EmailJS settings or other secrets:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the dev server:

```bash
pnpm dev
# or
npm run dev
```

5. Open http://localhost:3000 to view the site locally.

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Priyansh** - [@thepriyansh.raw](https://www.instagram.com/thepriyansh.raw) - officialpriyansh25@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon library
- [EmailJS](https://www.emailjs.com/) for email functionality
- [Vercel](https://vercel.com/) for hosting and deployment

---

Built with ❤️ by Priyansh
