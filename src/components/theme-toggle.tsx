"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="p-3 bg-gray-50 dark:bg-white/10 rounded-2xl w-12 h-12" />
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative p-3 bg-gray-50 dark:bg-white/10 rounded-2xl text-secondary dark:text-white hover:bg-primary hover:text-white transition-all duration-300 w-12 h-12 flex items-center justify-center group"
            aria-label="Toggle theme"
        >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-secondary dark:group-hover:text-white" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-secondary dark:group-hover:text-white" />
        </button>
    )
}
