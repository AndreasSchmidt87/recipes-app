import Image from "next/image";

export default function Home() {
  return (
  <>
    <h1>Startseite</h1>
    <Image 
    alt="" 
    src="https://images.unsplash.com/photo-1617470703128-26a0fc9af10f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" 
    layout="responsive" 
    width={2400} 
    height={1599} />
  </>
  )
}
