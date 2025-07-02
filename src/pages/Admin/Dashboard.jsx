import React from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { dashboardData } from "../../components/DashBoard/DashBoardData";

const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
        Dashboard
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 3,
          [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr",
          }
        }}
      >
        {dashboardData?.map((item) => (
          <Paper
            key={item.id}
            elevation={3}
            sx={{
              backgroundColor: item.color,
              color: "#fff",
              p: 3,
              borderRadius: "10px",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: theme.shadows[6],
              },
              display: "flex",
              flexDirection: "column",
              minHeight: "150px",
            }}
            onClick={() => navigate(item.route)}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "1.8rem" }}>
                {item.count}
              </Typography>
              {item.subtitle && (
                <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 1 }}>
                  {item.subtitle}
                </Typography>
              )}
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
                {item.title} {item.emoji}
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ opacity: 0.8, mt: 1 }}>
              Click for {item.title.toLowerCase()} {item.emoji}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;