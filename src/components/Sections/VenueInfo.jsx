import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlaceIcon from "@mui/icons-material/Place";
import dusitThaniImg from "../../assets/dusit-thabni.jpg";

/**
 * @param {object} props
 * @param {boolean} props.fullPage
 */
function VenueInfo({ fullPage = false }) {
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
          <LocationOnIcon sx={{ mr: 1, fontSize: 30 }} />
          VENUE
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  DUSIT THANI PATTAYA
                </Typography>
                <Typography variant="body1" paragraph>
                  Gracious Thai hospitality and luxury beach resorts in Pattaya
                  combine in one of Thailand's most prominent resort
                  destinations.
                </Typography>
                <Typography variant="body1" paragraph>
                  Conveniently located near the shopping and dining hotspots of
                  Pattaya City, Dusit Thani Pattaya enjoys an enviable location
                  on the Northern end of the majestically curving Gulf of
                  Thailand, with direct access to two beachfronts.
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{ color: "primary.main" }}
                  >
                    <PlaceIcon
                      sx={{ mr: 1, fontSize: 20, verticalAlign: "text-bottom" }}
                    />
                    About Pattaya
                  </Typography>
                  <Typography variant="body1" paragraph>
                    It is Asia's premier beach destination attracting over 6 M
                    visitors a year. Along Beach Road are restaurants, shopping
                    areas, and night attractions. Famous for Sensational Lights
                    & Nights, Entertainment, Spa, Sports, Beach & Nightlife.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="div"
                sx={{
                  height: 0,
                  paddingTop: "56.25%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "grey.300",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                image={dusitThaniImg}
                title="Dusit Thani Pattaya"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontStyle: "italic", textAlign: "center" }}
                >
                  The beautiful Dusit Thani Pattaya resort, venue for ISAP 2027
                </Typography>

                {fullPage && (
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" component="h4" gutterBottom>
                      Address
                    </Typography>
                    <Typography variant="body1">
                      240/2 Pattaya Beach Road, Pattaya City, Chonburi 20150,
                      Thailand
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      Tel: +66 (0) 3842 5611
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {fullPage && (
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ color: "primary.main" }}
            >
              How to Get There
            </Typography>
            <Typography variant="body1" paragraph>
              Pattaya is located approximately 150 kilometers southeast of
              Bangkok. Attendees can reach Pattaya via Suvarnabhumi
              International Airport (BKK) or Don Mueang International Airport
              (DMK).
            </Typography>
            <Typography variant="body1">
              Transportation options from Bangkok to Pattaya include:
            </Typography>
            <ul>
              <li>Airport shuttle services (approximately 2 hours)</li>
              <li>Taxi services</li>
              <li>Public bus transportation</li>
              <li>Private car rental</li>
            </ul>
            <Typography variant="body1" sx={{ mt: 2 }}>
              More detailed transportation information will be provided closer
              to the conference date.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default VenueInfo;
