import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const AnswerCard = () => {
 
 
  return (
    <Stack
      p={"10px"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      bgColor={"white"}
      direction={"row"}
      gap={"20px"}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={"60px"}>
          <img
            style={{ width: "100%" }}
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
            alt="ss"
          />
        </Box>
        <Text fontSize={"11px"} fontWeight={500} lineHeight={"1"}>
          JohnDeo123
        </Text>
      </Stack>
      <Stack id="leftSide" textAlign={"left"}>
        <Text
          textAlign={"right"}
          order={"h4"}
          size={"sm"}
        >
          How to sort an array in JavaScript?
        </Text>
      </Stack>
    </Stack>
  );
};

export default AnswerCard;
