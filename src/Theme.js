import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
///https://visme.co/blog/website-color-schemes/


//colour design tokens 
/* 
#272727 - black 
#747474 - grey 
#FF652F - orange 
#FFE400 - yellow
#14A76C - green
Tailwind Shade
ctrl k ctrl g
*/

export const tokens = (mode) => ({
...createContext(mode === 'dark'
? {
/// black colour 
black: {
    100: "#d4d4d4",
    200: "#a9a9a9",
    300: "#7d7d7d",
    400: "#525252",
    500: "#272727",
    600: "#1f1f1f",
    700: "#171717",
    800: "#101010",
    900: "#080808"
},
/// grey colour
grey: {
    100: "#e3e3e3",
    200: "#c7c7c7",
    300: "#acacac",
    400: "#909090",
    500: "#747474",
    600: "#5d5d5d",
    700: "#464646",
    800: "#2e2e2e",
    900: "#171717"
},
/// orange colour
orange: {
    100: "#ffe0d5",
    200: "#ffc1ac",
    300: "#ffa382",
    400: "#ff8459",
    500: "#ff652f",
    600: "#cc5126",
    700: "#993d1c",
    800: "#662813",
    900: "#331409"
},
/// yellow colour
yellow: {
    100: "#fffacc",
    200: "#fff499",
    300: "#ffef66",
    400: "#ffe933",
    500: "#ffe400",
    600: "#ccb600",
    700: "#998900",
    800: "#665b00",
    900: "#332e00"
},
/// green colour
green: {
    100: "#d0ede2",
    200: "#a1dcc4",
    300: "#72caa7",
    400: "#43b989",
    500: "#14a76c",
    600: "#108656",
    700: "#0c6441",
    800: "#08432b",
    900: "#042116"
},
  } : {
    /////light mode invert 
/// black colour 
black: {
    900: "#f5f5f5",
    800: "#a9a9a9",
    700: "#7d7d7d",
    600: "#525252",
    500: "#272727",
    400: "#1f1f1f",
    300: "#171717",
    200: "#101010",
    100: "#080808",
    /* 900: "#d4d4d4",* orginal 900 - changed to a lighter colour */
},
/// grey colour
grey: {
    100: "#171717",
    200: "#2e2e2e",
    300: "#464646",
    400: "#5d5d5d",
    500: "#747474",
    600: "#909090",
    700: "#acacac",
    800: "#c7c7c7",
    900: "#e3e3e3",
},
/// orange colour
orange: {
    100: "#ffe0d5",
    200: "#ffc1ac",
    300: "#ffa382",
    400: "#ff8459",
    500: "#ff652f",
    600: "#cc5126",
    700: "#993d1c",
    800: "#662813",
    900: "#331409",
},
/// yellow colour
yellow: {
    100: "#332e00",
    200: "#665b00",
    300: "#998900",
    400: "#ccb600",
    500: "#ffe400",
    600: "#ffe933",
    700: "#ffef66",
    800: "#fff499",
    900: "#fffacc",
},
/// green colour
green: {
    100: "#042116",
    200: "#08432b",
    300: "#0c6441",
    400: "#108656",
    500: "#14a76c",
    600: "#43b989",
    700: "#72caa7",
    800: "#a1dcc4",
    900: "#d0ede2",
},
  }),
})

// MUI Theme seetings 
export const SettingTheme = (mode) => {
    const colors = tokens(mode);
    return{
        palette: {
            mode: mode, ... (mode === 'dark' ? {
                // palette values for dark mode
              primary: {
                main: colors.black[500],
              },
              secondary: {
                main: colors.yellow[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.black[500],
              }, 
            } : {
                 // palette values for light mode
                    primary: {
                        main: colors.black[900],
                      },
                      secondary: {
                        main: colors.green[500],
                      },
                      neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                      },
                      background: {
                        default:  colors.black[900],
                      }, 
            }
            ),
        },

        typography: {
            fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
              fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
              fontSize: 40,
            },
            h2: {
                fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
                fontSize: 32,
              },
              h3: {
                fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
                fontSize: 24,
              },
              h4: {
                fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
                fontSize: 20,
              },
              h5: {
                fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
                fontSize: 16,
              },
              h6: {
                fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
                fontSize: 14,
              },
            },
    } 
}

// context for color mode
export const ColorContextMode = createContext({
    togglecolorMode: () => {},
});
export const useMode = () => {
    const [mode, setMode] = useState("dark");
     const colorMode = useMemo(
        () => ({
            togglecolorMode: () => 
            setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
     );

     const theme = useMemo(() => createTheme(SettingTheme(mode)), [mode]);
     return [theme, colorMode];
}