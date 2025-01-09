import React, { useEffect, useRef, useState } from 'react';
import './SecurityCamera.css';

const SecurityCameras = () => {
  const [isCameraOn, setIsCameraOn] = useState(false); // State to track camera feed
  const videoRef = useRef(null); // Reference to the video element
  const streamRef = useRef(null); // Reference to hold the video stream

  useEffect(() => {
    // Clean up video stream when the component unmounts or the camera is turned off
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleToggleCamera = () => {
    if (!isCameraOn) {
      // Start the camera feed
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          streamRef.current = stream; // Store the stream so we can stop it later
          if (videoRef.current) {
            videoRef.current.srcObject = stream; // Set video element source to webcam stream
          }
          setIsCameraOn(true); // Update state to reflect camera is on
        })
        .catch((error) => {
          console.error("Error accessing webcam:", error);
        });
    } else {
      // Stop the camera feed
      streamRef.current.getTracks().forEach(track => track.stop()); // Stop all video tracks
      streamRef.current = null;
      setIsCameraOn(false); // Update state to reflect camera is off
    }
  };

  return (
    <section className="cameras">
      <h2>Security Cameras</h2>
      <div className="camera-list">
        <div className="camera">
          <img src="https://img.freepik.com/premium-photo/ultra-realistic-living-room-medium-shot-hyper-detail_1077802-14556.jpg" alt="Living Room" />
          <p>Living Room</p>
        </div>
        <div className="camera">
          {/* Video element that displays live feed */}
          <video ref={videoRef} autoPlay playsInline muted width="100%" style={{ borderRadius: '8px', display: isCameraOn ? 'block' : 'none' }}></video>
          <p>Bedroom</p>
          {/* Button to toggle camera feed */}
          <button onClick={handleToggleCamera}>
            {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecurityCameras;
