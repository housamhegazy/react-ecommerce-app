import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Errorpage() {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Typography color='red'>error in loading page ..... </Typography>
  </Box>
  )
}
