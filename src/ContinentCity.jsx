import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "./Tripdata";

export const ContinentCity = () => {
  const { id } = useParams();
  const findData = data.continents.find((ele) => ele.name === id);
  console.log(
    "🚀 ~ file: ContinentCity.jsx:17 ~ ContinentCity ~ findData:",
    findData
  );
  const navigate = useNavigate();

  return (
    <>
      <div>Top Contries in {id} for you next holiday</div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} style={{ margin: "20px" }}>
          {findData &&
            findData?.countries?.map((ele) => (
              <Grid
                xs={6}
                md={3}
                spacing={2}
                key={ele.name}
                onClick={() =>
                  navigate(`/continent/${findData?.name}/${ele?.name}`)
                }
              >
                {/* <Item> */}
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={ele.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {ele.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {/* </Item> */}
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};
