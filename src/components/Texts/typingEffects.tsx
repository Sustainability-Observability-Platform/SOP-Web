"use client"
// import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  fontFamily: "monospace",
  position: "relative", // Ensures the cursor can be positioned relative to the text

  "&.typewriter-effect": {
    display: "flex",
    justifyContent: "center",
    fontFamily: "monospace",
    overflow: "hidden", // Ensures the content is hidden initially
    whiteSpace: "nowrap",
  },

  "&.typewriter-effect > .text": {
    maxWidth: 0,
    animation: "typing 3s steps(var(--characters)) forwards, deleting 1.5s steps(var(--characters)) forwards 3s, blink-cursor 1s step-end infinite",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },

  "&.typewriter-effect:after": {
    content: '" |"', // Cursor symbol
    right: "-20px", // Adjust the position of the cursor
    animation: "blink 1s infinite",
  },

  "@keyframes typing": {
    "0%": {
      maxWidth: 0,
    },
    "100%": {
      maxWidth: "calc(var(--characters) * 1ch)",
    },
  },

  "@keyframes deleting": {
    "0%": {
      maxWidth: "calc(var(--characters) * 1ch)",
    },
    "100%": {
      maxWidth: 0,
    },
  },

  "@keyframes blink": {
    "0%, 75%, 100%": {
      opacity: 1,
    },
    "25%": {
      opacity: 0,
    },
  },
}));


interface CustomStyles extends React.CSSProperties {
  "--characters": number | string;
}

export default function Typewriter() {
  const text = "manufactuers.";

  const styles: CustomStyles = {
    "--characters": text.length
  };

  return (
    <StyledBox className="typewriter-effect">
      <Box style={styles} className="text" id="typewriter-text">
        <strong>{text}.</strong>
      </Box>
    </StyledBox>
  );
}
