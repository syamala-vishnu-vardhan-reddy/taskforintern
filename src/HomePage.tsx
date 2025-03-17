// HomePage.tsx
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Shopping App</h1>
      <Button variant="contained" onClick={() => navigate("/login")}>
        Go to Login
      </Button>
    </div>
  );
};

export default HomePage;
