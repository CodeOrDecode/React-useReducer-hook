import React from "react";
import { useReducer } from "react";

const Count = () => {
  function reducer(state, actionType) {
    switch (actionType.type) {
      case "UPDATENAME": {
        return {
          ...state,
          ...actionType.payload,
        };
      }
      case "UPDATESTREET": {
        return {
          ...state,
          address: {
            ...state.address,
            ...actionType.payload,
          },
        };
      }
      default: {
        throw new Error("Action is invalid");
      }
    }
  }

  const initialState = {
    title: "",
    address: {
      street: "",
    },
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  //   const {
  //     title,
  //     address: { street },
  //   } = initialState;

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={count.title}
        name="title"
        onChange={(e) => {
          dispatch({
            type: "UPDATENAME",
            payload: { [e.target.name]: e.target.value },
          });
        }}
      />
      <input
        type="text"
        placeholder="address"
        value={count.address.street}
        name="street"
        onChange={(e) => {
          dispatch({
            type: "UPDATESTREET",
            payload: { [e.target.name]: e.target.value },
          });
        }}
      />
    </div>
  );
};

export default Count;
