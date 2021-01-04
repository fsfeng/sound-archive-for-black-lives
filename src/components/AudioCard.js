import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AudioCard = (fields) => {
  return (
    <>
      <Box
        p={4}
        borderWidth="1px"
        borderColor="orange.300"
        borderStyle="solid"
        width={["full", "xl"]}
        color="orange.500"
        fontFamily="text"
        lineHeight="200%"
        // fontSize={["sm", "md", "lg"
        fontSize="sm"
      >
        <b>{fields.DescriptionOfAudio}</b>
        <br />
        {fields.YourName}
        <br />
        {fields.TypeOfSubmission}
        <br />
        {fields.Location}
        <br />
        {fields.SubjectMatter}
        <br />
        {fields.LinkToAudio}
      </Box>
      <br />
    </>
  );
};

export default AudioCard;
