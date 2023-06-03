import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const QuestionSection = () => {
  const [flag, setFlag] = useState(false);

  const handleDisplay = () => {
    setFlag((prev) => !prev);
  };

  return (
    <Stack
      p={"20px"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      bgColor={"white"}
      w={"60%"}
      m={"auto"}
      direction={"row"}
      // justifyContent={"space-between"}
      gap={"10px"}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={"80px"}>
          <img
            style={{ width: "100%" }}
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
            alt="ss"
          />
        </Box>
        <Text fontSize={"12px"} fontWeight={500} lineHeight={"1"}>
          karan
        </Text>
      </Stack>
      <Stack id="leftSide" textAlign={"left"}>
        <Flex>
          <Text
            fontSize={"12px"}
            fontWeight={500}
            bgColor={"#eeeeee"}
            margin={"0 5px"}
            p={"1px 3px"}
          >
            JAVASCRIPT
          </Text>
          <Text
            fontSize={"12px"}
            fontWeight={500}
            bgColor={"#eeeeee"}
            margin={"0 5px"}
            p={"1px 3px"}
          >
            2023-05-30
          </Text>
          <Text
            fontSize={"12px"}
            fontWeight={500}
            bgColor={"#eeeeee"}
            margin={"0 5px"}
            p={"1px 3px"}
          >
            3 ANSWERS
          </Text>
        </Flex>
        <Heading
          onClick={handleDisplay}
          textAlign={"left"}
          order={"h4"}
          size={"sm"}
          minW={'600px'}
        >
          How to sort an array in JavaScript?
        </Heading>
        <Text display={!flag ? "none" : "block"} textAlign={"left"}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          vero laboriosam commodi nam te .
        </Text>
      </Stack>

      <Stack>
        <Box w={"80px"}>
          <img
            style={{ width: "100%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/330px-Facebook_Thumb_icon.svg.png"
            alt="like"
          />
        </Box>
        <Text>10 votes </Text>
      </Stack>
    </Stack>
  );
};

export default QuestionSection;
