import { Button } from "@mui/material";
import Hero from "./Hero";

const Header = () => {
  const marginLeft = "2rem";
  return (
    <div
      style={{
        backgroundImage: "url(./images/desktop/image-header.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "90vh",
      }}
    >
      <div style={{ color: "white" }}>
        <ul
          style={{
            alignItems: "center",
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-between",
            padding: "2rem",
          }}
        >
          <li style={{ fontSize: "3rem", fontWeight: "700" }}>sunnyside</li>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: "1.5rem",
            }}
          >
            <li>About</li>
            <li style={{ marginLeft: marginLeft }}>Services</li>
            <li style={{ marginLeft: marginLeft }}>Projects</li>
            <li style={{ marginLeft: marginLeft }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "4rem",
                }}
              >
                Contact
              </Button>
            </li>
          </div>
        </ul>
      </div>
      <Hero />
    </div>
  );
};

export default Header;
