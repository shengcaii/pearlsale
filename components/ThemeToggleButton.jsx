"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative rounded-md p-5 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center"
            aria-label="Toggle theme"
        >
            <Sun className="absolute h-5 w-5 rotate-0 scale-100 transition-all text-black dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all text-black dark:rotate-0 dark:scale-100 dark:text-white" />
        </button>
    )
}