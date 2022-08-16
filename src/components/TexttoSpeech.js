import React, { useState } from "react";
import "./TexttoSpeech.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import List from "./List";
import { Button, Stack } from "react-bootstrap";
function TexttoSpeech() {
  //   const [isRecording, setisRecording] = useState(false);
  //   const [note, setNote] = useState(null);
  const [notesStore, setnotesStore] = useState([]);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const start = () => {
    if (browserSupportsSpeechRecognition) {
      return SpeechRecognition.startListening({ continuous: true });
    }
  };
  const storeNote = () => {
    setnotesStore([
      ...notesStore,
      {
        title: `Note-${Math.round(Math.random() * 2009)}`,
        details: transcript,
      },
    ]);
    resetTranscript();
  };

  return (
    <>
      <div>
        <h1>Record Voice Notes</h1>
        <div>
          <p style={{ fontWeight: "bold", color: "blue" }}>
            Microphone: {listening ? "ON" : "OFF"}
          </p>
          <Stack
            style={{ justifyContent: "center" }}
            direction="horizontal"
            gap={2}
          >
            <Button className="button" onClick={start}>
              Start
            </Button>
            <Button
              className="button"
              onClick={SpeechRecognition.stopListening}
            >
              Stop
            </Button>
            <Button className="button" onClick={resetTranscript}>
              Reset
            </Button>
            <Button className="button" onClick={storeNote}>
              Save
            </Button>
          </Stack>
          <div className="noteContainer">{transcript}</div>
        </div>

        <div>
          <List note={notesStore} />
        </div>
      </div>
    </>
  );
}

export default TexttoSpeech;
