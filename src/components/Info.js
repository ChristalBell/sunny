import { Grid } from "@mui/material";
import TextSquare from "./TextSquare";

const Info = () => {
  const infoText = [
    {
      heading: "transform your brand",
      description:
        "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    },
    {
      heading: "Stand out to the right audience",
      description:
        "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
    },
  ];
  return (
    <div>
      <Grid container wrap="no-wrap">
        <Grid lg={6} item>
          <TextSquare
            heading={infoText[0].heading}
            description={infoText[0].description}
          />
        </Grid>
        <Grid lg={6} item>
          <img
            src="./images/desktop/image-transform.jpg"
            alt="egg"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
