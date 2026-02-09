import { useEffect, useLayoutEffect, useState } from 'react';

export default function useDarkMode() {
    // Initialize theme from localStorage on first mount only
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Use useLayoutEffect to apply theme before paint to prevent flicker
    useLayoutEffect(() => {
        const root = window.document.documentElement;
        const opposite = theme === 'dark' ? 'light' : 'dark';

        root.classList.remove(opposite);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Return the opposite theme (what we would switch TO) and the setter
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    return [colorTheme, setTheme];
}
