import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import "./style.scss";

function SOS({ setSos }) {
  const mimeType = "audio/mpeg";

  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    console.log("recorgind");
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { type: mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    console.log("stop");
    setRecordingStatus("inactive");
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      // const audioUrl = URL.createObjectURL(audioBlob);
      const formData = new FormData();
      formData.append("audio", audioBlob, "recorded_audio.wav");
      fetch("http://192.168.137.169:5000/sos/vo", {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: formData,
      })
        .then((response) => response.json())
        .then(console.log);

      setAudio(audioBlob);
      setAudioChunks([]);
    };
  };

  const handleMicrophoneClick = () => {
    if (!permission) {
      getMicrophonePermission();
      return;
    } else if (permission && recordingStatus === "inactive") {
      startRecording();
      return;
    } else if (recordingStatus === "recording") {
      stopRecording();
      return;
    }
  };

  const sendAudio = () => {
    const formData = new FormData();
    formData.append("audio", audio, "recorded_audio.mp3");
    const response = fetch("URL_DE_VOTRE_API", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <motion.div initial={{ x: "-50%", y: "-50%" }} className="sos">
      <label htmlFor="sos-text-area">Describe your problem</label>
      <div onClick={handleMicrophoneClick} className="sos-record-btn">
        <CiMicrophoneOn />
      </div>
      {/* <textarea rows={5} id="sos-text-area" placeholder="Someone is attacking me" /> */}
      <button onClick={sendAudio} className="sos-btn">
        Send
      </button>

      {/* {!permission ? (
        <button onClick={getMicrophonePermission} type="button">
          Get Microphone
        </button>
      ) : null}
      {permission && recordingStatus === "inactive" ? (
        <button onClick={startRecording} type="button">
          Start Recording
        </button>
      ) : null}
      {recordingStatus === "recording" ? (
        <button onClick={stopRecording} type="button">
          Stop Recording
        </button>
      ) : null} */}
    </motion.div>
  );
}

export default SOS;
