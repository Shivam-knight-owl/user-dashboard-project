# User Dashboard Project

A modern, responsive user management dashboard built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features a multi-step form for user registration, dark/light theme switching, and persistent local storage.

## 🚀 Features

### Core Functionality
- **Multi-Step Form**: 3-step user registration (Basic Info → Address → Review)
- **Form Persistence**: Automatic localStorage backup during form navigation
- **User Management**: Add, view, and manage users with dual storage system
- **Theme System**: Toggle between light/dark themes with localStorage persistence
- **Responsive Design**: Mobile-first approach with clean, modern UI

### User Experience
- **Form Validation**: Real-time validation with error handling
- **Progress Tracking**: Visual step indicator with animated progress bar
- **Data Persistence**: Form data saved automatically between steps
- **Toast Notifications**: Success/error feedback using Sonner
- **Smooth Animations**: Framer Motion for page transitions and interactions

### Data Management
- **Dual Storage**: Combines external API data with local user storage
- **Auto-refresh**: Dashboard updates when users are added
- **Data Validation**: Zod schemas for type-safe form validation
- **Error Handling**: Comprehensive error handling throughout the application

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library with modern hooks

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Pre-built accessible components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Form & Validation
- **React Hook Form** - Performant form library
- **Zod** - Schema validation
- **Sonner** - Toast notifications

### Data & Storage
- **localStorage** - Client-side data persistence
- **JSONPlaceholder API** - External user data source

## 📁 Project Structure

```
project/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── dashboard/         # Dashboard routes
│       ├── page.tsx       # User dashboard
│       └── add/
│           └── page.tsx   # Add user form
│
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── StepForm.tsx       # Multi-step form orchestrator
│   ├── Step1.tsx          # Basic info form step
│   ├── Step2.tsx          # Address form step
│   ├── Step3.tsx          # Review form step
│   ├── UserCard.tsx       # User display card
│   ├── ThemeToggle.tsx    # Dark/light theme toggle
│   └── ui/                # shadcn/ui components
│
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme management
│
├── lib/                   # Utilities and configurations
│   ├── api.ts             # API functions
│   ├── localStorage.ts    # Local storage utilities
│   ├── validation.ts      # Zod schemas
│   └── utils.ts           # Helper functions
│
└── Configuration Files
    ├── tailwind.config.ts
    ├── next.config.js
    ├── tsconfig.json
    └── components.json
```

## 🎨 Design System

### Color Scheme
- **Primary**: Blue-purple gradient (`blue-600` → `purple-500` → `blue-700`)
- **Background**: Dynamic light/dark theme support
- **Text**: High contrast for accessibility
- **Cards**: Clean white/dark cards with subtle shadows

### Components
- **UserCard**: Gradient header with contact information
- **StepForm**: Animated progress indicator with step navigation
- **ThemeToggle**: Smooth sun/moon icon transitions
- **Forms**: Consistent styling with error states

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Shivam-knight-owl/user-dashboard-project
cd user-dashboard-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📱 Usage

### Adding Users
1. Navigate to "Add User" from dashboard
2. Fill out 3-step form:
   - **Step 1**: Name, email, phone
   - **Step 2**: Street, city, zipcode
   - **Step 3**: Review and submit
3. Form data persists between steps
4. User appears on dashboard after submission

### Theme Management
- Click theme toggle in header
- Preference saved to localStorage
- Respects system theme preference

### Data Persistence
- Form data auto-saved during navigation
- Users stored in localStorage
- Dashboard combines local + API users

## 🎯 Key Features Implementation

### Multi-Step Form
- **State Management**: React useState with localStorage backup
- **Validation**: Zod schemas with React Hook Form
- **Navigation**: Seamless step transitions with data persistence

### Theme System
- **Context**: React Context for global theme state
- **Persistence**: localStorage integration
- **CSS**: Tailwind dark mode classes

### User Storage
- **Dual System**: External API + localStorage
- **Type Safety**: TypeScript interfaces
- **Auto-refresh**: Dashboard updates on user addition

## 🔧 Configuration

### Environment Variables
No environment variables required - uses JSONPlaceholder API and localStorage.

### Customization
- **Colors**: Modify `tailwind.config.ts`
- **Components**: Update shadcn/ui theme in `components.json`
- **API**: Change endpoints in `lib/api.ts`

## 📈 Performance

- **Bundle Size**: Optimized with Next.js tree shaking
- **Loading States**: Skeleton screens and loading indicators
- **Animations**: Hardware-accelerated with Framer Motion
- **Responsive**: Mobile-first design approach

## 🛡️ Type Safety

- **TypeScript**: Full type coverage
- **Zod Validation**: Runtime type checking
- **Form Types**: Type-safe form handling
- **API Types**: Strongly typed API responses

---

**Built with ❤️ using modern web technologies**
