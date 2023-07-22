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
    {
      heading: "Graphic Design",
      description:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
    },
    {
      heading: "Photography",
      description:
        "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <TextSquare
          heading={infoText[0].heading}
          description={infoText[0].description}
        />

        <img
          src="./images/desktop/image-transform.jpg"
          alt="egg"
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <img
          src="./images/desktop/image-stand-out.jpg"
          alt="cup"
          style={{ width: "100%" }}
        />

        <TextSquare
          heading={infoText[1].heading}
          description={infoText[1].description}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <div>
          <img
            src="./images/desktop/image-graphic-design.jpg"
            alt="cherry"
            style={{ width: "100%" }}
          />
          <h2>{infoText[2].heading}</h2>
          <p>{infoText[2].description}</p>
        </div>

        <div>
          <img
            src="./images/desktop/image-photography.jpg"
            alt="small orange"
            style={{ width: "100%" }}
          />
          <h3>{infoText[3].heading}</h3>
          <p>{infoText[3].description}</p>
        </div>
      </div>
    </div>
  );
};
export default Info;
