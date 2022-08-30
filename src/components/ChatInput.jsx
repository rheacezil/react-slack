import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

export default function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(channelId).collection("message").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Rhea Lamurin",
      userImage: "https://assets.puzzlefactory.com/puzzle/254/191/original.jpg",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button hidden type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </ChatInputContainer>
  );
}

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 75%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;
