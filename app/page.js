import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();


  useEffect(()=>{
      router.push("/login", { scroll: false });
  } , [])
  return (
    <>
    hello
    </>
  );
}
