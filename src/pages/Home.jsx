import React, { useEffect, useState } from "react";
import SampleComponent from "../components/SampleComponent";
import server from "../networking";
import { Button } from "@/components/ui/button";
import MenuDrawer from "@/components/menuDrawer";
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
      </main>
    </>
  );
}

export default Home;
