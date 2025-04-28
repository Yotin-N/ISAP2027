import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import GroupsIcon from "@mui/icons-material/Groups";
import Avatar from "@mui/material/Avatar";

const committeeGroups = [
  {
    title: "Honorary Chairs",
    members: [
      { name: "Monai Krairiksh", affiliation: "(KMITL)" },
      { name: "Prayoot Akkaraekthalin", affiliation: "(KMUTNB)" },
    ],
  },
  {
    title: "General Co-Chairs",
    members: [
      { name: "Danai Torrungrueng", affiliation: "(KMUTNB)" },
      { name: "Chuwong Phongcharoenpanich", affiliation: "(KMITL)" },
    ],
  },
  {
    title: "Technical Program Committee Co-Chairs",
    members: [
      { name: "Mitchai Chongcheawchamnan", affiliation: "(PSU)" },
      { name: "Titipong Lertwiriyaprapa", affiliation: "(KMUTNB)" },
      { name: "Sarawuth Chaimool", affiliation: "(KKU)" },
    ],
  },
  {
    title: "Special Session Committee Chair",
    members: [{ name: "Monthipa Uthansakul", affiliation: "(SUT)" }],
  },
  {
    title: "Workshop/Tutorial Committee Chairs",
    members: [
      { name: "Peerapong Uthansakul", affiliation: "(SUT)" },
      { name: "Kittisak Phaebua", affiliation: "(KMUTNB)" },
    ],
  },
  {
    title: "Local Arrangement Committee Chairs",
    members: [
      { name: "Sanchai Eadprab", affiliation: "(BUU)" },
      { name: "Akkarat Boonpoonga", affiliation: "(KMUTNB)" },
    ],
  },
  {
    title: "Exhibition & Sponsorship Chair",
    members: [{ name: "Suramate Chalermwisutkul", affiliation: "(KMUTNB)" }],
  },
  {
    title: "Publication Committee Chairs",
    members: [
      { name: "Denchai Worasawate", affiliation: "(KU)" },
      { name: "Ekasit Nugoolcharoenlap", affiliation: "(RMUTR)" },
    ],
  },
  {
    title: "Publicity Chair",
    members: [{ name: "Paridhcharawalee Silpunt", affiliation: "(KMUTT)" }],
  },
  {
    title: "Finance Chair",
    members: [{ name: "Nonchanutt Chudpooti", affiliation: "(KMUTNB)" }],
  },
  {
    title: "Registration Chair",
    members: [{ name: "Tanawut Tantisopharak", affiliation: "(KKU)" }],
  },
  {
    title: "Secretaries",
    members: [
      { name: "Panuwat Janpugdee", affiliation: "(CU)" },
      { name: "Supakit Kawdungta", affiliation: "(RMUTL)" },
    ],
  },
];

/**
 
 * @param {object} props 
 * @param {boolean} props.fullPage 
 */
function OrganizingCommittee({ fullPage = false }) {
  const displayGroups = fullPage
    ? committeeGroups
    : committeeGroups.slice(0, 4);

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
          <GroupsIcon sx={{ mr: 1, fontSize: 30 }} />
          ORGANIZING COMMITTEE
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {displayGroups.map((group, groupIndex) => (
            <Grid item xs={12} md={fullPage ? 6 : 3} key={groupIndex}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 3,
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
                      pb: 1,
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    {group.title}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    {group.members.map((member, memberIndex) => (
                      <Box
                        key={memberIndex}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: "primary.main",
                            width: 36,
                            height: 36,
                            mr: 2,
                            fontSize: "0.8rem",
                          }}
                        >
                          {member.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </Avatar>
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "medium" }}
                          >
                            {member.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {member.affiliation}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {!fullPage && (
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography
              variant="body1"
              color="primary"
              sx={{ fontStyle: "italic" }}
            >
              Additional committee members are listed on the full committee
              page.
            </Typography>
          </Box>
        )}

        {fullPage && (
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ color: "primary.main" }}
            >
              International Advisory Committee
            </Typography>
            <Typography variant="body1" paragraph>
              The International Advisory Committee membership will be announced
              soon.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="body1" paragraph>
              The Organizing Committee is responsible for all aspects of the
              ISAP2027 conference, from technical content to logistics and
              operations.
            </Typography>
            <Typography variant="body1">
              For any inquiries related to the conference organization, please
              contact the ISAP2027 Secretariat at:{" "}
              <strong>isap2027@isap2027.org</strong>
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default OrganizingCommittee;
