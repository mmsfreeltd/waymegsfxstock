import { ModeToggle } from "@/components/theme-toggle";
import { SITE_NAME } from "@/global/constants";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 md:p-8">
      <div className="absolute right-4 top-4 flex items-center gap-4">
        <ModeToggle />
      </div>

      <div className="flex w-full max-w-[400px] flex-col items-center">
        {children}
      </div>

      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>© 2025 {SITE_NAME}.</p>
      </footer>
    </div>
  );
}
