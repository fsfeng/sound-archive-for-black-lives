import React from "react";
import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";
import { createClient } from "contentful";
// import * as contentful from "contentful";

// const client = require("contentful").createClient({
//   space: "jm1v8d9gwzzo",
//   accessToken: "BfPwj4m630OxWB9SKM_CX5jKJuPpMnqbxOvYSxB2O5o"
// });

// const client = require("contentful").createClient({
//   space: "cuaq03l2zpaa",
//   accessToken: "m2e_oubaIZOedUJIU_VrRFxd7jp1l9fgAqRLYLB2xwU"
// });

const client = createClient({
  space: "cuaq03l2zpaa",
  accessToken: "m2e_oubaIZOedUJIU_VrRFxd7jp1l9fgAqRLYLB2xwU"
});

// export async function getStaticProps() {
//   const data = await client.getEntries({
//     content_type: "archiveRecording"
//   });
//   return {
//     props: {
//       archiveRecordings: data.items
//     }
//   };
// }

export const getStaticProps = async () => {
  const data = await client.getEntries().then((response) => response.items);
  return {
    props: {
      archiveRecordings: data.items
    }
  };
};

export default function ArchiveList({ archiveRecordings }) {
  console.log(archiveRecordings);
  return <Text>{`Hello World`}</Text>;
}

// export default ArchiveList;
//
