import React from "react";
import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";

const client = require("contentful").createClient({
  space: "jm1v8d9gwzzo",
  accessToken: "BfPwj4m630OxWB9SKM_CX5jKJuPpMnqbxOvYSxB2O5o"
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
  const data = await client.getEntries();
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
