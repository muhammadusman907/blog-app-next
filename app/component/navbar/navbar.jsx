"use client";
import React from "react";
import { usePathname , useParams , useSearchParams , useRouter  } from 'next/navigation';
import Link from 'next/link'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {sweetAlert} from '@/app/helper/helper'
const Navbar = ({ dynamicId , btnName , ...prop }) => {
 const pathname = usePathname() ;
 const router = useRouter(); 

 const logOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    sweetAlert({icon : "success" , message : "logout successfully"})
    router.push("/pages/login")
  };
 
  const navItems = {
    [`/pages/blogs/${dynamicId}`]: {
      btnName: "Logout",
      icon: <ExitToAppIcon />,
      link : "/pages/blogs" ,
      linkName : "Home" 
    },
    [`/pages/blogs`]: {
      btnName: "Logout",
      icon: <ExitToAppIcon />,
    },
  };
  return (
     <>
     {/* {console.log(navItems[pathname])} */}
    <div className=" box-shadow h-[70px] flex items-center justify-between px-10">
    { navItems[pathname]?.link ? <Link href={  navItems[pathname]?.link}>
       <div>{navItems[pathname]?.linkName}</div></Link>:<div></div>}
      <div className="flex items-center cursor-pointer" onClick={navItems[pathname]?.btnName == "Logout" && logOut}>
        {navItems[pathname]?.btnName}{navItems[pathname]?.icon}
        </div>
    </div>
    </>
  );
};

export default Navbar;