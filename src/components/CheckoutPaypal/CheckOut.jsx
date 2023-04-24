import { useState } from "react";
import { Box, Button } from "@mui/material";
import Paypal from "./Paypal";
export default function CheckOut({price}) {
  const [mycheckout, setMycheckout] = useState(false);
  return (
    <Box sx={{display:'flex',justifyContent:"center",flexDirection:"column",mx:"auto"}}>
      {mycheckout ? (
      <Box sx={{display:'flex',justifyContent:"center",mx:"auto"}}>
        <Paypal {...{price}}/>
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
