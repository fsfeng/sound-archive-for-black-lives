import React, { Component, useEffect, useState, useForm } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Input,
  FormControl
} from "@chakra-ui/core";
// import dotenv from "dotenv";
import Airtable from "airtable";
import AudioCard from "./AudioCard";

// Initialize airtable
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyG3kULvc1nh0AtL"
});
var base = new Airtable({ apiKey: "keyG3kULvc1nh0AtL" }).base(
  "appmMXulBAo4bt8JR"
);

function ArchiveTable() {
  // Initialize data, data.records
  const [data, setData] = useState({ records: [] });
  // Initialize query to filter on
  const [query, setQuery] = useState("");

  // Fetch airtable data inside useEffect
  useEffect(() => {
    // List of fields to return from airtable
    const returnFields = [
      "YourName",
      "TypeOfSubmission",
      "Location",
      "SubjectMatter",
      "DescriptionOfAudio",
      "Date",
      "LinkToSource",
      "LinkToAudio"
    ];
    // const query = "New";
    // Create the query string for airtable
    const airtableFilterSearch =
      "OR(" +
      returnFields
        .map((i) => "FIND('" + query.toLowerCase() + "', LOWER({" + i + "}))>0")
        .join(", ") +
      ")";

    // console.log(airtableFilterSearch);
    // function lists all records
    function listRecords() {
      const list = base("TestSubmissions")
        .select({
          filterByFormula: airtableFilterSearch,
          fields: returnFields
        })
        .all()
        .then((records) => {
          return records;
        })
        .catch((err) => {
          if (err) {
            console.error(err);
            return null;
          }
        });
      return list;
    }
    // Promise retrieves list of records and sets data.records
    Promise.all([listRecords()]).then((v) => {
      setData((s) => ({ ...s, records: v[0] }));
    });
  }, [query]);

  // console.log(data.records[0]);

  return (
    <Stack align="center" spacing={4}>
      <FormControl>
        <Input
          isInvalid
          type="search"
          variant="outline"
          placeholder="Filter..."
          errorBorderColor="orange.200"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* <Input variant="filled" placeholder="Filter..." /> */}
      </FormControl>

      {data.records.length > 0 ? (
        data.records.map((record, index) => <AudioCard {...record.fields} />)
      ) : (
        <p>Loading...</p>
      )}
    </Stack>
  );
}

export default ArchiveTable;

// const AudioCard = (fields) => (
//   <Box p={5} shadow="md" borderWidth="1px">
//     {/* <Heading>{i}</Heading> */}
//     <Text>{fields.YourName}</Text>
//     <Text>{fields.TypeOfSubmission}</Text>
//     <Text>{fields.Location}</Text>
//     <Text>{fields.SubjectMatter}</Text>
//     <Text>{fields.LinkToAudio}</Text>
//   </Box>
// );
