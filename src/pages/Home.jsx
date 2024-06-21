import React, { useEffect, useState } from "react";
import SampleComponent from "../components/SampleComponent";
import server from "../networking";
import { Button } from "@/components/ui/button";
import MenuDrawer from "@/components/menuDrawer";
import DetailsPopUp from "@/components/detailsPopUp";
function Home() {
  const [health, setHealth] = useState("Checking...");

  useEffect(() => {
    server
      .get("/api/health")
      .then((res) => {
        console.log("Health: ", res.data);
        setHealth(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MenuDrawer />
        {/* <DetailsPopUp
          imgName={
            "https://www.desicomments.com/wp-content/uploads/2017/02/Happy-Smiley-Image.jpg"
          }
          text={"Thank you so much for helping me to my work"}
          isAnonymus={true}
          from={"Keira"}
        /> */}
      </main>
    </>
  );
}

export default Home;
