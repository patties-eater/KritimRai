function AppLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-[32px] border border-[rgba(84,51,28,0.1)] bg-[rgba(255,255,255,0.72)] p-10 text-center shadow-[0_24px_60px_rgba(52,35,24,0.14)] backdrop-blur-md">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(199,138,82,0.24)] bg-[rgba(199,138,82,0.12)]">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[rgba(199,138,82,0.22)] border-t-[var(--color-accent-deep)]" />
        </div>
        <p className="mt-6 font-display text-3xl text-[var(--color-ink)]">Kritim Rai</p>
        <p className="mt-3 text-[var(--color-muted)]">Loading the portfolio...</p>
      </div>
    </div>
  )
}

export default AppLoader
