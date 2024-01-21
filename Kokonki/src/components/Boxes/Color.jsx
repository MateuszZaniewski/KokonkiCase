export default function Color({ color }) {
  const containerStyle = {
    width: "29px",
    height: "29px",
    borderRadius: "50%",
    border: "1px solid lightgray", // Add your border styles
    backgroundColor: color || "transparent", // Fallback to transparent if color is not provided
  };
  if (color) {
    return <div style={containerStyle}></div>;
  }
}
