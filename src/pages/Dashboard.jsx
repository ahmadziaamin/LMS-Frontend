import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { dashboardData } from "../components/DashBoard/DashBoardData";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {dashboardData.map((item) => (
          <Box
            key={item.id}
            sx={{
              minWidth: "300px",
              flex: "1 1 calc(25% - 16px)", // 4 in a row with spacing
              maxWidth: "calc(25% - 16px)",
            }}
          >
            <Paper
              sx={{
                backgroundColor: item.color,
                color: "#fff",
                p: 2,
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "10px",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => navigate(item.route)}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {item.count}
              </Typography>
              <Typography sx={{ textAlign: "center", mt: 1 }}>
                {item.title}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
