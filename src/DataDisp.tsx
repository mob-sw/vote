import React, { useEffect } from "react";
import { firestore, fapp } from "./firebase-config.js";
import {
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

function DataDisp() {
  useEffect(() => {
    let isMounted = true;
    console.log("useEffect called");

    const doFetch = async () => {
      console.log("doFetch called");

      const querySnapshot = await getDocs(collection(firestore, "voteinfo"));

      console.log("querySnapshot : ", querySnapshot);
      querySnapshot.forEach((doc) => {
        //console.log("info : ", `${doc.id} => ${doc.data()}`);
        console.log("info : ", doc.data());
      });
    };

    doFetch() // start the async work
      .catch((err) => {
        if (!isMounted) return; // unmounted, ignore.
        // TODO: Handle errors in your component
        console.error("failed to fetch data", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  //const voteinfo = collection(firestore, "voteinfo");
  //console.log("voteinfo : " + voteinfo);

  //collection(firestore, "voteinfo");

  //   const docRef = doc(firestore, "voteinfo");
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }

  return <div>datadisp</div>;
}

export { DataDisp };
