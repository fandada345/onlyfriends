type PageShellProps = {
  children: React.ReactNode;
  accent?: React.ReactNode;
};

export function PageShell({ children, accent }: PageShellProps) {
  return (
    <main className="min-h-screen px-4 py-4 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-md flex-col justify-center">
        {accent}
        {children}
      </div>
    </main>
  );
}
