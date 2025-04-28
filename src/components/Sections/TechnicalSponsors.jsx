import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import HandshakeIcon from "@mui/icons-material/Handshake";

// Technical co-sponsors data from the conference info
const technicalSponsors = [
  {
    name: "IEEE",
    fullName: "Institute of Electrical and Electronics Engineers",
    description:
      "IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
    sections: [
      "IEEE Thailand Section",
      "IEEE Antennas and Propagation Society",
      "IEEE MTT/AP/ED Thailand Chapter",
    ],
  },
  {
    name: "IEICE",
    fullName:
      "Institute of Electronics, Information and Communication Engineers",
    description:
      "IEICE is an academic organization established with the aim of advancing the science and technology of electronics, information, and communication.",
    sections: ["IEICE Bangkok Section"],
  },
  {
    name: "ECTI",
    fullName:
      "Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology Association",
    description:
      "ECTI Association Thailand is a non-profit organization related to Electrical Engineering, Electronics, Computer, Telecommunications and Information Technology.",
    sections: [],
  },
  {
    name: "URSI",
    fullName: "International Union of Radio Science",
    description:
      "URSI is responsible for stimulating and coordinating international studies, research, applications, scientific exchange, and communication in the fields of radio science.",
    sections: [],
  },
];

/**
 * @param {object} props
 * @param {boolean} props.fullPage
 */
function TechnicalSponsors({ fullPage = false }) {
  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: fullPage ? "background.default" : "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            borderBottom: fullPage ? "2px solid" : "none",
            borderColor: "primary.main",
            pb: fullPage ? 1 : 0,
          }}
        >
          <HandshakeIcon sx={{ mr: 1, fontSize: 30 }} />
          TECHNICAL CO-SPONSORS
        </Typography>

        {!fullPage && (
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            {technicalSponsors.map((sponsor, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "background.paper",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "primary.main",
                    textAlign: "center",
                    transition:
                      "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 3,
                    },
                  }}
                >
                  {sponsor.name}
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        {fullPage && (
          <>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              ISAP2027 is proud to be technically co-sponsored by the following
              prestigious organizations:
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              {technicalSponsors.map((sponsor, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ height: "100%" }}>
                    <CardMedia
                      component="div"
                      sx={{
                        height: 0,
                        paddingTop: "40%",
                        backgroundColor: "grey.200",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "primary.main",
                      }}
                    >
                      {sponsor.name}
                    </CardMedia>
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {sponsor.fullName}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {sponsor.description}
                      </Typography>

                      {sponsor.sections.length > 0 && (
                        <>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: "bold", mt: 2 }}
                          >
                            Participating Sections:
                          </Typography>
                          <ul style={{ marginTop: 8 }}>
                            {sponsor.sections.map((section, sectionIndex) => (
                              <li key={sectionIndex}>
                                <Typography variant="body2">
                                  {section}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Sponsorship Opportunities
              </Typography>
              <Typography variant="body1" paragraph>
                ISAP2027 offers various sponsorship packages for companies and
                organizations interested in showcasing their products and
                services to the international antennas and propagation
                community.
              </Typography>
              <Typography variant="body1" paragraph>
                For more information about sponsorship opportunities, please
                contact the Exhibition & Sponsorship Chair at{" "}
                <strong>sponsors@isap2027.org</strong>.
              </Typography>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default TechnicalSponsors;
