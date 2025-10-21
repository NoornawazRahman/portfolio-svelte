# Md Noornawaz Rahman - Portfolio

Modern portfolio website built with SvelteKit 5, TypeScript & Tailwind CSS. Features dark mode, project showcase, coding stats integration, and responsive design.



## ✨ Features

- **Modern Tech Stack**: Built with SvelteKit 5, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Interactive Components**: 
  - Skill carousel on homepage
  - Searchable projects, skills, and experience
  - Filterable project gallery
  - Animated skill badges
- **Markdown Support**: Content rendered from markdown with syntax highlighting
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **GitHub Integration**: Fetch and display README files from GitHub repositories
- **Coding Profiles Integration**: Display stats from LeetCode, GeeksForGeeks, Codeforces, and CodeChef

## 🚀 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) 5
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/)
  - [UnoCSS](https://unocss.dev/) for fonts and icons
  - [shadcn-svelte](https://www.shadcn-svelte.com/) for UI components
- **Language**: TypeScript
- **Icons**: Carbon Icons via UnoCSS
- **Markdown**: Marked with syntax highlighting (Prism.js)
- **Theme**: mode-watcher for dark/light mode
- **Deployment**: Optimized for static site generation

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/NoornawazRahman/slick-portfolio-svelte-5.git
   cd slick-portfolio-svelte-5
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Configuration

### Personal Information

Update the following files in `src/lib/data/`:

- **`base.ts`**: Your name and basic info
- **`home.ts`**: Homepage hero section and social links
- **`nav-bar.ts`**: Navigation menu items
- **`skills.ts`**: Your technical skills
- **`projects.ts`**: Your projects
- **`experience.ts`**: Work experience
- **`education.ts`**: Educational background

### Base Path Configuration

If deploying to a subdirectory (e.g., GitHub Pages), update `svelte.config.js`:

```javascript
const base = '/your-repo-name';
```

For root domain deployment, set:

```javascript
const base = '';
```

### Assets

- Add logos to `static/logos/`
- Update `src/lib/data/assets.ts` with your asset paths
- Replace `static/favicon.png` with your own favicon

### Styling

- Global styles: `src/app.css`
- Markdown styles: `src/markdown.css`
- Tailwind config: `tailwind.config.ts`
- Theme colors: Update CSS variables in `src/app.css`

## 📝 Adding Content

### Adding a New Project

Edit `src/lib/data/projects.ts`:

```typescript
{
  slug: 'project-slug',
  color: 'blue',
  name: 'Project Name',
  shortDescription: 'Brief description',
  description: 'Detailed description in markdown',
  githubReadme: 'https://raw.githubusercontent.com/user/repo/main/README.md',
  links: [
    { to: 'https://github.com/user/repo', label: 'GitHub' }
  ],
  logo: Assets.YourLogo,
  period: {
    from: new Date('2024-01-01'),
    to: new Date('2024-06-01')
  },
  skills: getSkills('typescript', 'react'),
  type: 'Web Application'
}
```

### Adding a New Skill

Edit `src/lib/data/skills.ts`:

```typescript
defineSkill({
  slug: 'skill-slug',
  color: 'blue',
  description: 'Skill description in markdown',
  logo: Assets.SkillLogo,
  name: 'Skill Name',
  category: 'framework'
})
```

### Adding Experience

Edit `src/lib/data/experience.ts`:

```typescript
{
  slug: 'job-slug',
  company: 'Company Name',
  description: 'Job description',
  contract: ContractType.FullTime,
  type: 'Software Development',
  location: 'City, Country',
  period: { from: new Date(2023, 0, 1), to: new Date(2024, 0, 1) },
  skills: getSkills('typescript', 'react'),
  name: 'Job Title',
  color: 'blue',
  links: [],
  logo: Assets.CompanyLogo,
  shortDescription: 'Brief description'
}
```

## 🚀 Deployment

### GitHub Pages

1. Update `svelte.config.js` with your repository name
2. Push to GitHub
3. Enable GitHub Actions (if not already enabled)
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy

### Other Platforms

Build the static site:

```bash
npm run build
```

The output will be in the `build/` directory. Deploy this to:
- **Vercel**: Connect your repository
- **Netlify**: Drag and drop the build folder
- **Custom Server**: Serve the build directory with any static file server

## 🎨 Customization

### Colors

Update theme colors in `src/app.css`:

```css
:root {
  --primary: 243 0% 4%;
  --secondary: 243 10% 90%;
  /* ... other colors */
}
```

### Fonts

Update fonts in `uno.config.ts`:

```typescript
fonts: {
  sans: {
    name: 'Your Font',
    weights: [400, 700],
    provider: 'google'
  }
}
```

### Components

All reusable components are in `src/lib/components/`:
- `common/`: Shared components
- `ui/`: UI library components (shadcn-svelte)
- Custom components for projects, skills, etc.

## 📄 License

This project uses a dual MIT License:

- **Original template** by [Riadh Adrani](https://github.com/RiadhAdrani) (2024)
- **Modifications** by Md Noornawaz Rahman (2025)

Both are licensed under the MIT License. See the [LICENSE](./LICENSE) file for full details.

## 🙏 Acknowledgments

- Original template: [slick-portfolio-svelte](https://github.com/RiadhAdrani/slick-portfolio-svelte-5)
- UI Components: [shadcn-svelte](https://www.shadcn-svelte.com/)
- Icons: [Carbon Design System](https://carbondesignsystem.com/)

## 📞 Contact

- **GitHub**: [@NoornawazRahman](https://github.com/NoornawazRahman)
- **LinkedIn**: [Md Noornawaz Rahman](https://www.linkedin.com/in/md-noornawaz-rahman/)
- **Email**: mdnoornawazrahman@gmail.com

## 🐛 Known Issues

- Svelte no longer supports Node 14; use Node 18 or higher
- Browser storage APIs (localStorage/sessionStorage) are not used per best practices

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

---

**Made with ❤️ using SvelteKit**