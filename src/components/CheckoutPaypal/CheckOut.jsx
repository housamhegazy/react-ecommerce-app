import { useState } from "react";
import { Box, Button } from "@mui/material";
import Paypal from "./Paypal";
export default function CheckOut({price}) {
  const [mycheckout, setMycheckout] = useState(false);
  return (
    <Box sx={{display:'flex',justifyContent:"center",mx:"auto",mt:"20px"}}>
      {mycheckout ? (
        <Paypal {...{price}}/>
      )

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
