import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import Paypal from "./Paypal";
import { Close } from "@mui/icons-material";
export default function CheckOut() {
  const [mycheckout, setMycheckout] = useState(false);
  return (
    <Box sx={{display:'flex',justifyContent:"center",flexDirection:"column"}}>


      {mycheckout && <IconButton sx={{width:'20px'}} onClick={()=>{
          setMycheckout(false)
        }} >
          <Close/>
        </IconButton>
        }


      {mycheckout ? (
      <Box>
        <Paypal/>
      </Box>)

      :
      (<Button variant="outlined"
        onClick={() => {
          setMycheckout(true);
        }}
      >
        checkout
      </Button>)
      }
    </Box>
  );
}
