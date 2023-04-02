import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useGetProductsByNameQuery } from "../Redux/productsApi";
import { red } from "@mui/material/colors";
import { Favorite, MoreVert, Share } from "@mui/icons-material";

export default function Home() {
  const { data, error, isLoading } = useGetProductsByNameQuery();
  if (isLoading) {
    return <Typography>loading .........</Typography>;
  }
  if (error) {
    return <Typography>error .........</Typography>;
  }
  if (data) {
    console.log(data);
    return (
      <Stack direction='row' sx={{justifyContent:"center",alignItems:"center",flexWrap:"wrap",}}>
        {data.map((item) => {
          return (
              <Card key={item.id} sx={{ maxWidth: {xs:220,sm:230,md:320} ,mx:2}}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVert />
                    </IconButton>
                  }
                  title={item.title}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.url}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Favorite />
                  </IconButton>
                  <IconButton aria-label="share">
                    <Share />
                  </IconButton>
                </CardActions>
              </Card>
          );
        })}
      </Stack>
    );
  }
}
