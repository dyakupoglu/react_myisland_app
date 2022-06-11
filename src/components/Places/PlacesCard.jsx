import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Collapse } from "@material-ui/core";

const style = {
  fontFamily: "Nunito",
  fontWeight: "bold",
  fontSize: "2rem",
  color: "#fff",
};
const desc = {
  fontFamily: "Nunito",
  fontSize: "1.1rem",
  color: "#ddd",
};

export default function MultiActionAreaCard({ place, checked }) {
  return (
    <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
      <Card
        sx={{ maxWidth: 645, background: "rgba(0, 0, 0, 0.5)", margin: "20px" }}
      >
        <CardMedia component="img" height="440" image={place.imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" sx={style}>
            {place.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={desc}>
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
