const primaryColor = "#63223e";
const secondaryColor = "#f23d8b";

export const theme = {
    token: {
        colorPrimary: primaryColor,
        colorSecondary: secondaryColor,
        colorText: "#610c31",
        colorWhite: "#ffff",
        colorNeutral: '#806b6b',
        colorBg: "#692b46",
        // // Button-specific styles
        // buttonBgPrimary: "#63223e",   
        // buttonBgDefault: "#806b6b",   
        // buttonBgHoverPrimary: "#52202b", 
        // buttonBgHoverDefault: "#6e5a5a", 
        // buttonBgActivePrimary: "#7a303e",
        // buttonBgActiveDefault: "#6f5858", 
        // buttonBorderRadius: "8px",  
        // buttonFontSize: "14px",       
        // buttonPadding: "6px 15px",    

        // // Button border colors
        // buttonBorderPrimary: "#63223e", // Primary button border color
        // buttonBorderDefault: "#806b6b", // Default button border color
        // buttonBorderHoverPrimary: "#52202b", // Hover border color for primary buttons
        // buttonBorderHoverDefault: "#6e5a5a", // Hover border color for default buttons

        // // Text color for text and link buttons
        // buttonTextColorDefault: "#000",  // Default text color for buttons
        // buttonTextColorPrimary: "#fff", // Primary text color
        // buttonTextColorLink: "#63223e", // Link text color

        // // Link button styles
        // buttonLinkColor: "#63223e",   // Link button text color
        // buttonLinkHoverColor: "#52202b", // Link button hover color

        // // Additional button states
        // buttonShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",  // Button shadow for depth
        // buttonShadowHover: "0 4px 6px rgba(0, 0, 0, 0.2)", // Hover shadow
        // buttonBorderWidth: "1px", // Button border width
        // buttonActiveOpacity: "0.8", // Active state opacity
    },
    components: {
        Button: {
            colorPrimary: primaryColor,
            buttonBgHoverPrimary: "white",
            algorithm: true,
        },
        Input: {
            colorPrimary: '#eb2f96',
            algorithm: true, // Enable algorithm
        }
    },

};
