import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary.main" gutterBottom>
              ISAP 2027
            </Typography>
            <Typography variant="body2" color="text.secondary">
              32nd International Symposium on Antennas and Propagation
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              November 9-12, 2027
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pattaya, Thailand
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary.main" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon
                fontSize="small"
                sx={{ mr: 1, color: "primary.main" }}
              />
              <Typography variant="body2" color="text.secondary">
                isap2027@isap2027.org
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LanguageIcon
                fontSize="small"
                sx={{ mr: 1, color: "primary.main" }}
              />
              <Link href="http://www.isap2027.org" color="inherit">
                <Typography variant="body2" color="text.secondary">
                  www.isap2027.org
                </Typography>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary.main" gutterBottom>
              Organized By
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Electrical Engineering/Electronics, Computer, Telecommunications
              and Information Technology Association (ECTI), Thailand
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {"Copyright © "}
            <Link color="inherit" href="https://www.isap2027.org/">
              ISAP2027 Organizing Committee
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Link color="inherit" href="#">
              <Typography variant="body2" color="text.secondary">
                Privacy Policy
              </Typography>
            </Link>
            <Link color="inherit" href="#">
              <Typography variant="body2" color="text.secondary">
                Terms of Use
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
