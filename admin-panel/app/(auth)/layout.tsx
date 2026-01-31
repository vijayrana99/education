import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({
  children,
}: {
    children: React.ReactNode;
  }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">School CMS</h1>
          <p className="text-slate-600 dark:text-slate-400">Content Management System</p>
        </div>
        <div className={inter.variable + " bg-white dark:bg-slate-900 rounded-lg shadow-xl p-8 border border-slate-200 dark:border-slate-800"}>
          {children}
        </div>
      </div>
    </div>
  );
}
