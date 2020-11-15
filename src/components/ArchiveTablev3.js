import React, { Component } from "react";
import { Box, Flex, Heading, Text, Stack, Input } from "@chakra-ui/core";
import dotenv from "dotenv";
import Airtable from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyG3kULvc1nh0AtL"
});
var base = new Airtable({ apiKey: "keyG3kULvc1nh0AtL" }).base(
  "appmMXulBAo4bt8JR"
);

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

function useFilterSearch() {
  var searchTerm = "";
  var s =
    "OR(" +
    returnFields
      .map(
        (i) => "FIND('" + searchTerm.toLowerCase() + "', LOWER({" + i + "}))>0"
      )
      .join(", ") +
    ")";
  return s;
}

class ArchiveTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }

  componentDidMount() {
    base("TestSubmissions")
      .select({
        filterByFormula: useFilterSearch(),
        fields: returnFields
      })
      .eachPage((records, fetchNextPage) => {
        this.setState({
          records
        });
        console.log(records);
        fetchNextPage();
      });
  }
  render() {
    return (
      <Stack align="center" spacing={4}>
        <Box>
          <Input variant="filled" placeholder="Filter..." />
        </Box>
        {this.state.records.length > 0 ? (
          this.state.records.map((record, index) => (
            <AudioCard {...record.fields} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Stack>
    );
  }
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
