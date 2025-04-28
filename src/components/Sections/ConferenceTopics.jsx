import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import TopicIcon from "@mui/icons-material/Topic";

const topics = [
  {
    category: "A. ANTENNAS",
    items: [
      "Antenna Theory and Design",
      "Small Antennas and RF Sensors",
      "Antennas for Mobile and V2X Applications",
      "Broadband and Multi-band Antennas",
      "Active, In-package, and On-Chip Antennas",
      "Adaptive and Reconfigurable Antennas",
      "Additive Manufacturing",
      "Array Antennas",
      "Reflectarrays and Transmitarrays",
      "Antenna Measurements",
      "Millimeter-wave, THz, and Optical Antennas",
      "HF/VHF Antennas",
      "Reflector, Lens, and Radomes",
      "Antennas with Periodic Structures",
      "Other Antenna-related Topics",
    ],
  },
  {
    category: "B. PROPAGATION",
    items: [
      "Propagation Theory and Models",
      "Millimeter-Wave, THz, and Optical Propagation",
      "Machine-to-machine/Infrastructure Propagation",
      "Channel Sounding and Channel Estimation",
      "Radar, DOA, Localization, and Sensing",
      "Propagation for Vehicular Communications",
      "Terrestrial, Earth-space, and Ionospheric Propagation",
      "Propagation Measurement Techniques",
      "Other Propagation-related Topics",
    ],
  },
  {
    category: "C. ELECTROMAGNETIC",
    items: [
      "Electromagnetic Theory",
      "Computational and Numerical Techniques",
      "Scattering, Diffraction, and RCS",
      "Inverse and Imaging Techniques",
      "Metamaterials, Metasurfaces, and Artificial Materials",
      "Periodic Structures",
      "Nano-electromagnetics",
      "Other EM Wave Theory-related Topics",
    ],
  },
  {
    category: "D. AP-RELATED TOPICS",
    items: [
      "Passive and Active Components",
      "Reconfigurable Intelligent Surfaces",
      "Antenna Systems for Mobile (5G, B5G, and 6G) Communications",
      "MIMO, Diversity, and Their Applications",
      "Broadcasting and Receiving Technologies",
      "Wireless Power Transfer Technologies",
      "Wearable Device Networks and Medical Applications",
      "Sensor Networks and Ad-hoc Systems",
      "RFID and Applications",
      "EMC/EMI Technologies",
      "Satellite and Military Applications",
      "Machine Learning and Artificial Intelligence",
      "Other AP-related Topics",
    ],
  },
];

/**
 * @param {object} props
 * @param {boolean} props.fullPage
 */
function ConferenceTopics({ fullPage = false }) {
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
          <TopicIcon sx={{ mr: 1, fontSize: 30 }} />
          CONFERENCE TOPICS
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {topics.map((topic, index) => (
            <Grid item xs={12} md={fullPage ? 6 : 3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      color: "primary.main",
                      fontWeight: "bold",
                      borderBottom: "2px solid",
                      borderColor: "primary.light",
                      pb: 1,
                    }}
                  >
                    {topic.category}
                  </Typography>
                  <List dense={!fullPage}>
                    {topic.items
                      .slice(0, fullPage ? topic.items.length : 5)
                      .map((item, itemIndex) => (
                        <ListItem key={itemIndex} disableGutters>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <FiberManualRecordIcon
                              sx={{ fontSize: 10 }}
                              color="primary"
                            />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    {!fullPage && topic.items.length > 5 && (
                      <ListItem disableGutters>
                        <ListItemText
                          primary="And more..."
                          sx={{
                            color: "primary.main",
                            fontStyle: "italic",
                          }}
                        />
                      </ListItem>
                    )}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {fullPage && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1">
              This is a comprehensive but not exhaustive list of topics.
              Researchers are encouraged to submit papers in related fields not
              explicitly mentioned above.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default ConferenceTopics;
