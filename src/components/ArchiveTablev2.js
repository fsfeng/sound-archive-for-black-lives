import React, { useState, useEffect, Fragment } from "react";
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/core";
import dotenv from "dotenv";
import airtable from "airtable";

dotenv.config();

function ArchiveTable2() {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: "keyG3kULvc1nh0AtL" }).base(
    "appmMXulBAo4bt8JR"
  );
  base("TestSubmissions")
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: "Grid view"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(AudioCard);

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );

  return (
    <Stack align="center">
      {airtableData !== undefined &&
        airtableData.map(entry => <AudioCard {...entry.fields} />)}
    </Stack>
  );
}

export default ArchiveTable2;

function AudioCard(record) {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      {/* <Heading>{i}</Heading> */}
      <Text>{record.get("YourName")}</Text>
      <Text>{record.get("TypeOfSubmission")}</Text>
      <Text>{record.get("Location")}</Text>
      <Text>{record.get("LinkToAudio")}</Text>
      <Text>{record.get("ConsentOfSpeakers")}</Text>
    </Box>
  );
}
