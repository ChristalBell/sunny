import { Button } from "@mui/material";

const TextSquare = (heading, description) => {
  return (
    <div
      style={{
        padding: "0 10rem",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "left",
        height: "100%",
      }}
    >
      <h2 style={{ fontWeight: 800, fontSize: "2.5rem" }}>
        Transform your brand
      </h2>
      <p style={{ lineHeight: 1.8, margin: "2rem 0" }}>
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </p>
      <Button sx={{ width: "8rem" }}>Learn More</Button>
    </div>
  );
};

export default TextSquare;
