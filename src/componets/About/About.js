import * as React from "react";
import { useState } from "react";
import "./index.css";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import oldPortfolio from "./../../assets/images/protofolio.png";
import generator from "./../../assets/images/generator.png";
import wds from "./../../assets/images/wds.png";
import pokewar from "./../../assets/images/pokewar.png";
import offload from "./../../assets/images/offload.png";
import portfolio from "./../../assets/images/portfolio3.0.png";
// material
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

const About = () => {
  const [letterClass] = useState("text-animate");
  return (
    <>
      <Grid className="text-zone" item xs={12} md={4}>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
            idx={15}
          />
        </h1>
        <p>
          {" "}
          My name is Michael Harris I'm 34 and I’m from the San Francisco Bay
          Area. I have been coding for 6 months
        </p>
        <p>
          Currently, I am studying at UC Berkeley Extension to gain more
          experience in the world of developing and designing websites.
        </p>
        <p>
          I love learning new things, writing code that works, solving problems
          with creative solutions and taking vacations. If you are interested in
          talking more about my resume please email me directly
        </p>
      </Grid>
      <Box
        className="box"
        xs={12}
        md={4}
        style={{ textAlign: "-webkit-center" }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="Pokemon card battle"
            height="14"
            image={pokewar}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pokemon War
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faHtml5} />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="green iguana"
            height="140"
            image={wds}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Work Day Scheduler
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faHtml5} />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="green iguana"
            height="140"
            image={oldPortfolio}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              First Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faHtml5} />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="green iguana"
            height="140"
            image={generator}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Password Generator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faHtml5} />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="green iguana"
            height="140"
            image={offload}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              OFFload
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faHtml5} />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="green iguana"
            height="14"
            image={portfolio}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Updated Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
            <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faHtml5} />
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default About;
