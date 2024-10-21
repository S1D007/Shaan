import { useStore } from "@/store";
import React, { useEffect } from "react";
import Webcam from "react-webcam";

function Screen3() {
  const { setCurrentIndex, setDetails, submitDetails } = useStore();
  const webcamRef = React.useRef(null);
  const [file, setFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const capture = React.useCallback(() => {
    if (!webcamRef?.current) return;
    setLoading(true);
    const imageSrc = (webcamRef?.current as any).getScreenshot();
    setFile(imageSrc);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (file && !loading) {
      setDetails({ photo: file });
      submitDetails();
      setCurrentIndex(3);
    }
  }, [file, loading]);

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover flex-col space-y-5"
      style={{ backgroundImage: `url('/screen2.png')` }}
    >
      <div className="flex flex-col mb-10 justify-center items-center space-y-10">
        <img src="/Logo1.png" className="h-24" />
        <img src="/Logo2.png" className="h-32" />
      </div>

      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          facingMode: "user",
          width: 300,
          height: 300,
          autoGainControl: true,
        }}
        className="rounded-2xl w-[300px] h-[300px] bg-black object-cover"
      />
      <button
        onClick={() => {
          capture();
        }}
        className="w-48 sm:w-64 md:w-72 lg:w-80 h-12 sm:h-14 md:h-16 bg-blue-500 hover:bg-blue-600 text-white text-2xl sm:text-3xl md:text-4xl font-bold py-2 px-6 md:py-3 md:px-10 rounded-[40px]"
      >
        NEXT
      </button>
    </div>
  );
}

export default Screen3;
