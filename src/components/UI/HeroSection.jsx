import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string | null} props.backgroundImageUrl
 * @param {boolean} props.isHomePage
 */
function HeroSection({ title, subtitle, backgroundImageUrl, isHomePage }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: isHomePage ? "60vh" : "25vh",
        minHeight: isHomePage ? 300 : 150,
        backgroundColor: isHomePage ? "primary.dark" : "primary.main",
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",

        "&::before": isHomePage
          ? {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }
          : {},
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {" "}
        <Typography
          variant={isHomePage ? "h1" : "h3"}
          component="h1"
          gutterBottom
          sx={{
            fontWeight: isHomePage ? 700 : 500,
            textTransform: isHomePage ? "uppercase" : "none",
            letterSpacing: isHomePage ? "0.05em" : "normal",
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="h5"
            component="p"
            sx={{
              mt: 2,
              fontWeight: 500,
              color: isHomePage ? "secondary.main" : "inherit",
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default HeroSection;
