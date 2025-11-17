import { IconCloud } from "@/components/ui/icon-cloud"
import { useEffect, useState } from "react"

const slugs = [
  "html5",
  "css",
  "javascript",
  "typescript",
  "react",
  "nodedotjs",
  "nextdotjs",
  "php",
  "laravel",
  "wordpress",
  "angular",
  "dotnet",
  "githubcopilot",
  "postgresql",
  "supabase",
  "strapi",
  "git",
  "jira",
  "github",
  "gitlab",
  "figma",
  "docker",
  "tailwindcss",
  "astro",
  "cloudflare",
]

export function IconCloudProfile() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Detectar el tema inicial
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    
    checkTheme()

    // Observar cambios en el tema
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  // Iconos blancos para modo oscuro, negros para modo claro
  const iconColor = isDark ? "white" : "black"
  
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${iconColor}`
  )

  return (
    <div className="flex items-center justify-center">
      <IconCloud images={images} />
    </div>
  )
}
