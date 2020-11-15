import React, { useState, useEffect, Fragment } from "react";
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/core";
import dotenv from "dotenv";

dotenv.config();

function ArchiveTable() {
  const process_api_key = "keyG3kULvc1nh0AtL";
  const airtable_api_url = "https://api.airtable.com/v0";
  const airtable_table = "appmMXulBAo4bt8JR";
  const airtable_base = "TestSubmissions";
  const base_url =
    airtable_api_url +
    "/" +
    airtable_table +
    "/" +
    airtable_base +
    "?api_key=" +
    process_api_key;

  // const process_api_key = process.env.REACT_APP_AIRTABLE_API_KEY;
  // const airtable_api_url = process.env.REACT_APP_AIRTABLE_API_URL;
  // const airtable_table = process.env.REACT_APP_AIRTABLE_TABLE;
  // const airtable_base = process.env.REACT_APP_AIRTABLE_BASE;

  const [airtableData, setAirtableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appmMXulBAo4bt8JR/TestSubmissions?api_key=keyG3kULvc1nh0AtL"
    )
      .then(res => res.json())
      .then(data => {
        setAirtableData(data.records);
      });
    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   fetch(
  //     // "https://api.airtable.com/v0/appmMXulBAo4bt8JR/TestSubmissions?filterByFormula=OR(SEARCH(%22York%22%2C+%7BLocation%7D)%2CSEARCH(%22York%22%2C+%7BDescriptionOfAudio%7D)%2C%0A)?api_key=keyG3kULvc1nh0AtL"
  //     `https://api.airtable.com/v0/appmMXulBAo4bt8JR/TestSubmissions?filterByFormula=SEARCH%28%22York%22%2C+%7BLocation%7D%29?api_key=keyG3kULvc1nh0AtL`
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       setAirtableData(data.records);
  //     });
  //   setIsLoading(false);
  // }, []);

  return (
    <Stack align="center">
      {airtableData !== undefined &&
        airtableData.map(entry => <AudioCard {...entry.fields} />)}
    </Stack>
  );
}

export default ArchiveTable;

const AudioCard = fields => (
  <Box p={5} shadow="md" borderWidth="1px">
    {/* <Heading>{i}</Heading> */}
    <Text>{fields.YourName}</Text>
    <Text>{fields.TypeOfSubmission}</Text>
    <Text>{fields.Location}</Text>
    <Text>{fields.LinkToAudio}</Text>
    <Text>{fields.ConsentOfSpeakers}</Text>
  </Box>
);
