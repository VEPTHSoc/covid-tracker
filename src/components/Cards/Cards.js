import React from "react";
import "./Cards.css";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return "Loading ...";
  }
  return (
    <div className="card-container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of active className</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of recovereies</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of deaths </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
