import React from 'react'
import { Button } from "@mui/material";
const MyButton = ({btnName , ...prop}) => {
  return (
     
<>
<Button variant="contained"  {...prop}>{btnName}</Button>

</>  )
}

export default MyButton ;