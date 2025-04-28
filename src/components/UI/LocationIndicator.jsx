import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";

/**
 * @param {object} props
 * @param {string[]} props.currentPath
 * @param {(path: string) => void} props.onNavigate
 */
function LocationIndicator({ currentPath, onNavigate }) {
  if (!currentPath || currentPath.length <= 1) {
    return null;
  }

  const handleHomeClick = (event) => {
    event.preventDefault();
    onNavigate("Home");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      {" "}
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          color="inherit"
          href="#"
          onClick={handleHomeClick}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>

        {currentPath.slice(1, -1).map((item, index) => (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href="#"
            sx={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();

              onNavigate(currentPath.slice(1, index + 2).join(" > "));
            }}
          >
            {item}
          </Link>
        ))}

        <Typography color="text.primary">
          {currentPath[currentPath.length - 1]}
        </Typography>
      </Breadcrumbs>
    </Container>
  );
}

export default LocationIndicator;
