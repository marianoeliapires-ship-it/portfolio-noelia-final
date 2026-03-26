import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const [theme, setTheme] = useState("dark");

    useEffect(() => {

        const savedTheme = localStorage.getItem("theme") || "dark";

        setTheme(savedTheme);

        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(savedTheme);

    }, []);

    const toggleTheme = () => {

        const newTheme = theme === "dark" ? "light" : "dark";

        setTheme(newTheme);

        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(newTheme);

        localStorage.setItem("theme", newTheme);

    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                position: "fixed",
                top: "20px",
                left: "20px",   // 🔥 SOLO ESTE CAMBIO
                zIndex: 9999,
                padding: "10px 16px",
                borderRadius: "20px",
                background: "rgba(0,0,0,0.4)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer"
            }}
        >
            {theme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
    );
}