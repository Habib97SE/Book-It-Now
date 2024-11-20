import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primaryColor: "#d63384",
                primaryColorHover: "#c02673",
                lightPink: "#ffe6f7",
                pinkTint: "#FFF4FA",
                howItWorksIcon: "#FF008A",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light"],
    },
};
export default config;
