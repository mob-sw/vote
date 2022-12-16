import React from "react";
import Layout from "./layout";
import { DataDisp } from "./DataDisp";
import { firestore, fapp } from "./firebase-config.js";
import { getFirestore } from "firebase/firestore";
import MakePollScene from "./Scene/MakePollScene";

function App() {
  console.log("test firestore bp1");
  //console.log(firestore);
  return (
    <div>
      <Layout />
      <DataDisp />
    </div>
  );
}

export default App;
