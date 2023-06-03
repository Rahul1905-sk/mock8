import { ANS_POST, GET_REQ_QUESTION, POST_REQ_QUESTION } from "./actiontypes";

const initstate = {
  questions: [],
  answers: [],
};

export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case POST_REQ_QUESTION: {
      return {
        ...state,
        questions: payload,
      };
    }

    case GET_REQ_QUESTION: {
      return {
        ...state,
        questions: payload,
      };
    }
    case ANS_POST: {
      return {
        ...state,
        answers: payload,
      };
    }
    default: {
      return state;
    }
  }
};
