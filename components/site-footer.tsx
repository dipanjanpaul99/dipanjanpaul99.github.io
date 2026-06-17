import { personalInfo } from "@/data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground">
            {personalInfo.name}
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  )
}
