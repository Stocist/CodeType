## Installation Guide

### Prerequisites
- Node.js (v16.8.0 or newer)
- npm (v8.0.0 or newer)

### Complete Setup Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/codetype.git
   cd codetype
   ```

2. Create a fresh project with Next.js
   ```bash
   # Initialize npm
   npm init -y
   
   # Install Next.js and React
   npm install next@latest react@latest react-dom@latest
   
   # Install TypeScript and types
   npm install typescript @types/react @types/node @types/react-dom --save-dev
   
   # Install Tailwind CSS and its dependencies
   npm install tailwindcss@latest postcss@latest autoprefixer@latest --save-dev
   npx tailwindcss init -p
   
   # Install additional dependencies for our code editor
   npm install prismjs react-simple-code-editor
   npm install @types/prismjs --save-dev
   ```

3. Configure package.json scripts
   ```bash
   # Add Next.js scripts to package.json
   npm pkg set scripts.dev="next dev"
   npm pkg set scripts.build="next build"
   npm pkg set scripts.start="next start"
   npm pkg set scripts.lint="next lint"
   ```

4. Create required Next.js directories and config files
   ```bash
   # Create essential directories
   mkdir -p src/app src/components src/lib
   
   # Create a basic Next.js config file
   echo "/** @type {import('next').NextConfig} */
   const nextConfig = {
     reactStrictMode: true,
   }
   
   module.exports = nextConfig" > next.config.js
   
   # Configure TypeScript
   echo '{
     "compilerOptions": {
       "target": "es5",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "skipLibCheck": true,
       "strict": true,
       "forceConsistentCasingInFileNames": true,
       "noEmit": true,
       "esModuleInterop": true,
       "module": "esnext",
       "moduleResolution": "node",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "jsx": "preserve",
       "incremental": true,
       "plugins": [
         {
           "name": "next"
         }
       ],
       "paths": {
         "@/*": ["./src/*"]
       }
     },
     "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
     "exclude": ["node_modules"]
   }' > tsconfig.json
   
   # Set up Tailwind CSS
   echo 'module.exports = {
     content: [
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }' > tailwind.config.js
   
   # Create CSS file
   echo '@tailwind base;
   @tailwind components;
   @tailwind utilities;
   
   :root {
     --foreground-rgb: 0, 0, 0;
     --background-rgb: 240, 240, 240;
   }
   
   @media (prefers-color-scheme: dark) {
     :root {
       --foreground-rgb: 255, 255, 255;
       --background-rgb: 15, 23, 42;
     }
   }
   
   body {
     color: rgb(var(--foreground-rgb));
     background: rgb(var(--background-rgb));
   }' > src/app/globals.css
   ```

5. Create minimal required files for Next.js
   ```bash
   # Create the layout file
   echo 'import "./globals.css";
   import type { Metadata } from "next";
   import { Inter } from "next/font/google";
   
   const inter = Inter({ subsets: ["latin"] });
   
   export const metadata: Metadata = {
     title: "CodeType - Typing Practice for Developers",
     description: "Improve your typing speed and accuracy while learning programming documentation",
   };
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <html lang="en">
         <body className={inter.className}>{children}</body>
       </html>
     );
   }' > src/app/layout.tsx
   
   # Create a basic page
   echo 'export default function Home() {
     return (
       <main className="flex min-h-screen flex-col items-center justify-center p-24">
         <h1 className="text-4xl font-bold">CodeType</h1>
         <p className="mt-4">Typing practice for developers</p>
       </main>
     );
   }' > src/app/page.tsx
   ```

6. Start the development server
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

### Troubleshooting

If you still encounter the "'next' is not recognized" error:

1. Make sure Next.js is installed properly:
   ```bash
   # Check if Next.js is in node_modules
   ls node_modules/next
   
   # If it's not there, reinstall
   npm install next@latest
   ```

2. Try using npx to run Next.js directly:
   ```bash
   npx next dev
   ```

3. Check if your PATH environment includes node_modules/.bin:
   ```bash
   # For Windows
   set PATH=%PATH%;%cd%\node_modules\.bin
   
   # For Mac/Linux
   export PATH=$PATH:./node_modules/.bin
   ```

4. As a last resort, try a global installation:
   ```bash
   npm install -g next
   ```