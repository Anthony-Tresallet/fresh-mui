import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";
import { Page } from "$fresh_layout/mod.ts";
import { PageProps } from "$fresh_layout/src/deps.ts";

export default function Layout(child: Page, props?: PageProps) {
    const theme = createTheme();

    return (
    <ThemeProvider theme={theme}>
        <body>
            <main><div id="blablal">{child(props)}</div></main>
        </body>
    </ThemeProvider>
    );
}
