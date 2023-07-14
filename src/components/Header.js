import { Container } from "@mui/material";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./images/desktop/image-header.jpg)",
        backgroundPosition: "center",
        backgroundSize: "contain",
        height: "90vh",
      }}
    >
      <Container>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <li>sunnyside</li>
          <div style={{ display: "flex" }}>
            <li>About</li>
            <li style={{ marginLeft: "1rem" }}>Services</li>
            <li style={{ marginLeft: "1rem" }}>Projects</li>
            <li style={{ marginLeft: "1rem" }}>Contact</li>
          </div>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
