function generateAvatar(
  text,
  foregroundColor = "white",
  backgroundColor = "black"
) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 200;
  canvas.height = 200;

  // Draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  context.font = "bold 100px Assistant";
  context.fillStyle = foregroundColor;
  context.textAlign = "center"; // Align Horizontally
  context.textBaseline = "middle"; // Align Vertically
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL("image/png");
}

const imgElement = document.getElementById("avatar");

const getFirstCharacters = (name) => {
  return name
    .split(" ")
    .map((i) => i[0])
    .join("");
};

imgElement.src = generateAvatar(
  getFirstCharacters("Jane Doe"),
  "white",
  "#009578"
);

// Note: The HTMLCanvasElement.toDataURL() method returns a data URI containing a representation of the image in the format specified by the type parameter (defaults to PNG). The returned image is in a resolution of 96 dpi.
