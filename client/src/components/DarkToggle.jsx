import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ToggleButton from '@material-ui/lab/ToggleButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
const DARK_CLASS = "dark";

export const DarkToggle = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove(DARK_CLASS);
            window.localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.classList.add(DARK_CLASS);
            window.localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    }
    if (theme === 'dark') {
        document.documentElement.classList.add(DARK_CLASS);
    } else if (theme === 'light') {
        document.documentElement.classList.remove(DARK_CLASS);
    }
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        setTheme(localTheme);
    }, []);

    return (
        <ToggleButton onChange={toggleTheme}>
            {theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </ToggleButton>
    );
};