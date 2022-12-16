import React, { useState } from "react";
import Layout from "./layout";
import { DataDisp } from "./DataDisp";
import { firestore, fapp } from "./firebase-config.js";
import { getFirestore, Timestamp } from "firebase/firestore";
import { stringify } from "querystring";

function App() {
  console.log("test firestore bp1");
  const dataStore = [
    {
      title: "제목",
      type: "text",
      //items: [{ item1: ["admin1"] }, { item2: ["admin2"] }],
      // items: new Map<string, string[]>() {{
      //   put("item1", "admin1");
      //   put("item2", "admin2");
      // }},
    },
    // deadline: "2022-12-31 00:00:00",
    // multiSelect: false,
    // closeYN: false,
    // ownerID: "Admin",
  ];

  interface dataType {
    title: string;
    type: string;
    // items: Map<string, string[]>;
    deadline: string;
    multiSelect: boolean;
    closeYN: boolean;
    ownerID: string;
  }
  //DB 데이터를 관리 할 변수 및 setter
  const [voteinfo, setVoteInfo] = useState<Array<dataType>>([
    {
      title: "제목1",
      type: "TEXT",
      // items: new Map([
      //   ["item1", ["admin1"]],
      //   ["item2", ["admin2"]],
      // ]),
      deadline: "2022-12-31 00:00:00",
      multiSelect: false,
      closeYN: false,
      ownerID: "Admin1",
    },
    {
      title: "제목2",
      type: "TEXT",
      // items: new Map([
      //   ["item1", ["admin1"]],
      //   ["item2", ["admin2"]],
      // ]),
      deadline: "2022-12-31 00:00:00",
      multiSelect: false,
      closeYN: true,
      ownerID: "Admin2",
    },
  ]);
  //setter 함수를 정의하여, 각 하위 Component에 전달함
  const handleCreate = (value: dataType) => {
    setVoteInfo(voteinfo.concat(value));
  };

  //console.log(firestore);
  return (
    <div>
      <Layout />
      <DataDisp setVoteInfo={handleCreate} dbData={voteinfo} />
      <div /*데이터 확인을 위해 임시 출력*/>
        {voteinfo.map((vote) => (
          <div>
            <>{console.log("After DataDisp")}</>
            <b>{vote.title}</b>
            <b>{vote.deadline}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
