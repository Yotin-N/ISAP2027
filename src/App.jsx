import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import NavBar from "./components/Layout/NavBar.jsx";
import Footer from "./components/Layout/Footer.jsx";
import LocationIndicator from "./components/UI/LocationIndicator.jsx";
import HeroSection from "./components/UI/HeroSection.jsx";
import ImportantDates from "./components/Sections/ImportantDates.jsx";
import ConferenceTopics from "./components/Sections/ConferenceTopics.jsx";
import VenueInfo from "./components/Sections/VenueInfo.jsx";
import OrganizingCommittee from "./components/Sections/OrganizingCommittee.jsx";
import TechnicalSponsors from "./components/Sections/TechnicalSponsors.jsx";

import pattayaBg from "./assets/pattaya-bg.jpg";
import submenuBg from "./assets/submenu-bg.jpg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      dark: "#115293",
      light: "#4791db",
    },
    secondary: {
      main: "#f5b518",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

function App() {
  const [currentPath, setCurrentPath] = useState(["Home"]);
  const [currentContent, setCurrentContent] = useState("home");

  const handleNavigate = (pathString) => {
    if (pathString === "Home") {
      setCurrentPath(["Home"]);
      setCurrentContent("home");
    } else {
      const pathParts = pathString.split(" > ");
      setCurrentPath(["Home", ...pathParts]);

      const section = pathParts[0].toLowerCase().replace(/\s+/g, "-");
      setCurrentContent(section);
    }
  };

  const isHomePage = currentPath.length === 1 && currentPath[0] === "Home";
  const pageTitle = currentPath[currentPath.length - 1];

  const renderContent = () => {
    if (isHomePage) {
      return (
        <>
          <ImportantDates />
          <ConferenceTopics />
          <VenueInfo />
          <OrganizingCommittee />
          <TechnicalSponsors />
        </>
      );
    }

    switch (currentContent) {
      case "important-dates":
        return <ImportantDates fullPage />;
      case "organizing-committee":
        return <OrganizingCommittee fullPage />;
      case "technical-co-sponsors":
        return <TechnicalSponsors fullPage />;
      case "conference-topics":
        return <ConferenceTopics fullPage />;
      case "about-isap":
        return (
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <h2>About ISAP</h2>
            <p>
              The International Symposium on Antennas and Propagation (ISAP) is
              a premier forum for sharing the latest research and innovation in
              antennas, propagation, and electromagnetic theory.
            </p>
          </Container>
        );
      default:
        return (
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <h2>{pageTitle}</h2>
            <p>Content for {pageTitle} will be updated soon.</p>
          </Container>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavBar onNavigate={handleNavigate} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <LocationIndicator
            currentPath={currentPath}
            onNavigate={handleNavigate}
          />
          <HeroSection
            isHomePage={isHomePage}
            title={
              isHomePage
                ? "2027 INTERNATIONAL SYMPOSIUM ON ANTENNAS AND PROPAGATION"
                : pageTitle
            }
            subtitle={
              isHomePage
                ? "NOV. 9 (TUESDAY) - 12 (FRIDAY), 2027 • PATTAYA, THAILAND"
                : null
            }
            backgroundImageUrl={isHomePage ? pattayaBg : submenuBg}
          />
          {renderContent()}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
