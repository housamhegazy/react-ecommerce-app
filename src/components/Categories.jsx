import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import Errorpage from "pages/Errorpage";
import Loading from "pages/LoadingPage";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetproductCategoryApiByNameQuery } from "Redux/productsApi";
export default function Categories({ handleDrawerToggle }) {
  const { data, error, isLoading } = useGetproductCategoryApiByNameQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Errorpage />;
  }
  if (data) {
    return (
      <List>
        
        {data.map((cate) => {
          return (
            <ListItem
              onClick={() => {
                navigate(`products/categories/${cate}`);
                handleDrawerToggle();
              }}
              sx={{
                // backgroundColor: location.pathname === item.path && teal[900],
                
                color: "#fff",
                "&:hover": { backgroundColor: teal[900] },
              }}
              key={cate}
              disablePadding
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                {/* <ListItemIcon>{"mmmm"}</ListItemIcon> */}
                <ListItemText
                  sx={{ textAlign: "start", ml: 2 ,borderBottom:"1px solid white",pl:1}}
                  primary={cate}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }
}
