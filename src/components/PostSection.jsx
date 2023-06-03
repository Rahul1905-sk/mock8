import { Button, Stack, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postanswer } from "../redux/forumredux/action";

const PostSection = () => {

  let [value, setValue] = React.useState("");
 
  const search = useParams()
console.log(search);
  const dispatch = useDispatch()


  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const handlePostAnswer = () => {
    dispatch(postanswer())
  }


  return (
    <Stack
      p={"20px"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      bgColor={"white"}
      w={"60%"}
      m={"auto"}
      textAlign={'left'}
       
      
    >
      <Text mb="8px" fontSize={'18px'} textAlign={"left"}>
        Your Answer
      </Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
      <Button
        w={"130px"}
        
        fontSize={"14px"}
        color={"white"}
        bgColor={"#3175ffed"}
        onClick={handlePostAnswer}
      >
        Post Your Anwser
      </Button>
    </Stack>
  );
};

export default PostSection;
