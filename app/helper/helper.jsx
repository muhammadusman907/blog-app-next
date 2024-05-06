
"use client"
import Swal from "sweetalert2";
const sweetAlert = ({icon , message , button}) =>{
  Swal.fire({
  position: "top-end",
  icon: icon,
  title: message,
  showConfirmButton: button,
  timer: 1500
});
}
export {sweetAlert}


