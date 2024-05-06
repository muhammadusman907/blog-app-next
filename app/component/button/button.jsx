"use client"
import React from 'react'
import { Button } from "@mui/material";
const MyButton = ({btnName , icon , ...prop }) => {
  return (
     
<>
<Button variant="contained"  {...prop}>{icon && icon} {btnName}</Button>

</>  )
}

export default MyButton ;