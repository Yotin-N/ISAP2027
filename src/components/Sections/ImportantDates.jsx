import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import EventIcon from "@mui/icons-material/Event";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const importantDates = [
  {
    title: "Submission",
    date: "May 15, 2027",
    icon: <CalendarTodayIcon color="primary" />,
  },
  {
    title: "Acceptance",
    date: "July 23, 2027",
    icon: <CalendarTodayIcon color="primary" />,
  },
  {
    title: "Registration",
    date: "September 15, 2027",
    icon: <CalendarTodayIcon color="primary" />,
  },
  {
    title: "Conference",
    date: "November 9-12, 2027",
    icon: <EventIcon color="primary" />,
  },
];

/**
 * @param {object} props
 * @param {boolean} props.fullPage
 */
function ImportantDates({ fullPage = false }) {
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
          <EventIcon sx={{ mr: 1, fontSize: 30 }} />
          IMPORTANT DATES
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {importantDates.map((item, index) => (
            <Grid item xs={12} sm={6} md={fullPage ? 6 : 3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-4px)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {item.icon}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ ml: 1, fontWeight: "bold" }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: "auto", fontWeight: 500 }}
                >
                  {item.date}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {fullPage && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1">
              All deadlines are at 11:59 PM Anywhere on Earth (AoE) time on the
              specified date.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Please note that these dates are subject to change. Check back
              regularly for updates.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default ImportantDates;
