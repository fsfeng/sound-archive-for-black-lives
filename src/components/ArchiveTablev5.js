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
// import { initializeBlock, useBase, useRecords } from "@airtable/blocks/ui";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyG3kULvc1nh0AtL"
});
var base = new Airtable({ apiKey: "keyG3kULvc1nh0AtL" }).base(
  "appmMXulBAo4bt8JR"
);

function ArchiveTable() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
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

      const airtableFilterSearch =
        "OR(" +
        returnFields
          .map(
            (i) => "FIND('" + query.toLowerCase() + "', LOWER({" + i + "}))>0"
          )
          .join(", ") +
        ")";

      const result = base("TestSubmissions").select({
        filterByFormula: airtableFilterSearch,
        fields: returnFields
      });

      setData(result.data);
    };

    fetchData();
  }, [query]);

  return (
    <Stack align="center" spacing={4}>
      <FormControl>
        <Input
          type="search"
          variant="filled"
          placeholder="Filter..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* <Input variant="filled" placeholder="Filter..." /> */}
      </FormControl>

      {data !== undefined &&
        data.map((record) => <AudioCard {...record.fields} />)}
    </Stack>
  );
}

export default ArchiveTable;

const AudioCard = (fields) => (
  <Box p={5} shadow="md" borderWidth="1px">
    {/* <Heading>{i}</Heading> */}
    <Text>{fields.YourName}</Text>
    <Text>{fields.TypeOfSubmission}</Text>
    <Text>{fields.Location}</Text>
    <Text>{fields.SubjectMatter}</Text>
    <Text>{fields.LinkToAudio}</Text>
  </Box>
);
