export function SiteFooter() {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Dipanjan. All rights reserved.
      </div>
    </footer>
  )
}
