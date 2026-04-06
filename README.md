# 💼 DreamJob — Job Finding Dashboard

> **A production-grade Job Dashboard built with Next.js 14 (App Router) + Tailwind CSS v4.**

---

## 📁 Project Folder Structure

```
DREAMJOB/
├── 📦 node_modules/                  # npm packages (not included in git)
├── 🌐 public/                        # Static assets (images, logos, icons)
│
└── 📂 src/
    ├── 📂 app/                       # Next.js App Router — Pages & Layouts
    │   ├── 📂 (dashboard)/           # Route Group — not visible in URL
    │   │   ├── 📂 find-jobs/         # /find-jobs route
    │   │   │   └── 📄 page.tsx       # Find Jobs main page
    │   │   └── 📄 layout.tsx         # Dashboard layout (Navbar + Sidebar shared)
    │   ├── 📄 layout.tsx             # Root layout — HTML shell, fonts
    │   └── 📄 page.tsx               # Home page (/)
    │
    ├── 📂 components/                # Reusable React Components
    │   ├── 📂 dashboard/             # Dashboard-specific components
    │   │   ├── 📄 job-card.tsx       # Single job listing card
    │   │   ├── 📄 navbar.tsx         # Top navigation bar
    │   │   ├── 📄 profile-card.tsx   # User profile sidebar widget
    │   │   └── 📄 sidebar.tsx        # Left sidebar navigation
    │   └── 📂 ui/                    # Generic UI components (Button, Input, Badge)
    │
    ├── 📂 constants/                 # Static data & configuration
    │   ├── 📄 jobs.ts                # Mock job listings array
    │   └── 📄 navigation.ts          # Sidebar nav links array
    │
    ├── 📂 lib/                       # Utility/helper functions
    │   └── 📄 utils.ts               # cn() helper — clsx + tailwind-merge
    │
    └── 📂 types/                     # TypeScript type definitions
        └── 📄 index.ts               # Job, User, NavItem interfaces
│
├── 📄 next.config.ts                 # Next.js configuration
├── 📄 package-lock.json              # Exact dependency versions (lock file)
├── 📄 package.json                   # Project metadata & scripts
├── 📄 postcss.config.mjs             # PostCSS config (required for Tailwind)
└── 📄 README.md                      # This file! Project documentation
```

---

## 🗂️ Purpose of Each File (In Detail)

### `src/app/` — Pages & Routing

| File | Route | Purpose |
|------|-------|---------|
| `app/page.tsx` | `/` | Home page — redirects to dashboard |
| `app/layout.tsx` | Global | Root HTML shell, Google Fonts import, metadata |
| `app/(dashboard)/layout.tsx` | Dashboard | Shared Navbar + Sidebar layout — applied to every dashboard page |
| `app/(dashboard)/find-jobs/page.tsx` | `/find-jobs` | Job listings page — search, filter, featured/recommended jobs |

> **Note:** The `(dashboard)` folder name is in brackets, so it does **not** appear in the URL. `/find-jobs` works directly.

---

### `src/components/dashboard/` — Dashboard Components

#### `job-card.tsx`
A card component for a single job listing.
```tsx
<JobCard job={job} variant="featured" />
```
- Displays job title, company, and location
- "Apply Now" button
- Bookmark icon
- Job type badge (Remote / On-site / Hybrid)

#### `navbar.tsx`
Top navigation bar.
- Logo / Brand name
- User avatar + notifications

#### `profile-card.tsx`
User profile widget in the left sidebar.
- User photo, name, role
- Applied jobs count
- Saved jobs count

#### `sidebar.tsx`
Left sidebar navigation links.
- Navigation items are pulled from `constants/navigation.ts`
- Active link highlight

---

### `src/components/ui/` — Generic UI Components

Place generic, reusable components here that are used throughout the app:

```
ui/
├── button.tsx      # Primary, Secondary, Ghost variants
├── input.tsx       # Text input with label & error state
├── badge.tsx       # Remote / On-site / Hybrid tags
└── card.tsx        # Generic card wrapper
```

---

### `src/constants/` — Static Data

#### `jobs.ts`
```typescript
import { Job } from "@/types";

export const JOBS: Job[] = [
  {
    id: "1",
    title: "Senior UI Designer",
    company: "Google",
    location: "New York, USA",
    type: "Remote",
    salary: "$120k - $150k",
    postedAt: "2 days ago",
    applicants: 142,
    logo: "/logos/google.svg",
    featured: true,
  },
  // ... more jobs
];
```

#### `navigation.ts`
```typescript
import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Find Jobs",    href: "/find-jobs",    icon: "Search" },
  { label: "Saved Jobs",   href: "/saved-jobs",   icon: "Bookmark" },
  { label: "Applications", href: "/applications", icon: "FileText" },
  { label: "Profile",      href: "/profile",      icon: "User" },
  { label: "Settings",     href: "/settings",     icon: "Settings" },
];
```

---

### `src/lib/utils.ts` — Utility Functions

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Safely merges Tailwind classes — avoids conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**How to use:**
```tsx
<div className={cn(
  "p-4 rounded-xl border",
  isActive && "border-primary bg-primary-light",
  className
)} />
```

---

### `src/types/index.ts` — TypeScript Interfaces

```typescript
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Remote" | "On-site" | "Hybrid";
  salary: string;
  postedAt: string;
  applicants: number;
  logo: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface User {
  name: string;
  role: string;
  avatar: string;
  appliedCount: number;
  savedCount: number;
}
```

---

### Config Files (Root Level)

| File | Purpose |
|------|---------|
| `next.config.ts` | Next.js settings — image domains, redirects, env vars |
| `postcss.config.mjs` | PostCSS — required for Tailwind CSS v4 |
| `next-env.d.ts` | Auto-generated TypeScript declarations — do not modify |
| `package.json` | Dependencies and npm scripts |
| `package-lock.json` | Exact dependency lock — commit this to git |

---

## 🚀 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build

# 4. Start production server
npm start
```

---

## 🎨 Design System

### CSS Variables (`app/globals.css`)
```css
:root {
  --color-primary:       #4F6EF7;   /* Main blue — buttons, links */
  --color-primary-light: #EEF1FF;   /* Light blue — badges, backgrounds */
  --color-primary-dark:  #3B55D9;   /* Hover state */
  --color-bg-custom:     #F8F9FC;   /* Page background */
  --color-text-base:     #1A1D2E;   /* Headings */
  --color-text-mid:      #5E6278;   /* Body text */
  --color-text-muted:    #A1A5B7;   /* Placeholders, meta info */
  --color-border-custom: #E4E6EF;   /* Card borders */
}
```

### Font
**Plus Jakarta Sans** — imported from Google Fonts in `app/layout.tsx`.

---

## ✅ Development Checklist

- [x] Folder structure setup
- [x] TypeScript types (`types/index.ts`)
- [x] Mock data ready (`constants/jobs.ts`, `constants/navigation.ts`)
- [x] Dashboard layout — Navbar + Sidebar
- [x] Job Card component
- [x] Profile Card component
- [ ] Search & Filter functionality
- [ ] Saved Jobs page
- [ ] Applications tracking page
- [ ] Mobile responsive testing
- [ ] Real API integration

---

## 🔗 Useful npm Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Check ESLint errors
```

---

*DreamJob — Built with ❤️ using Next.js 14 + Tailwind CSS v4*
