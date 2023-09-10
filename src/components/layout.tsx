import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/components/theme';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Layout;