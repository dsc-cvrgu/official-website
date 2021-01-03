import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ToggleButton from '@material-ui/lab/ToggleButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import $ from 'jquery'
const DARK_CLASS = "dark";

export const DarkToggle = () => {
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
            setIsDark(prefersDark);
        }
    );

    const [isDark, setIsDark] = useState(systemPrefersDark);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add(DARK_CLASS);
        } else {
            document.documentElement.classList.remove(DARK_CLASS);
        }
    }, [isDark]);

    return (
        <ToggleButton onChange={() => setIsDark(!isDark)}>
            {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </ToggleButton>
    );
};