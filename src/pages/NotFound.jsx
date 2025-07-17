import React from "react";
import FuzzyText from "../components/FuzzyText";

function NotFound() {
  const hoverIntensity = 0.5;
  const enableHover = true;

  return (
    <div className="h-screen scroll-mb-0 flex justify-center items-center">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
      >
        404
      </FuzzyText>
    </div>
  );
}

export default NotFound;
