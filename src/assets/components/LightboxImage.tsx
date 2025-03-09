import React from "react";

interface LightboxImageProps {
  imagePath: string;
  handleLightboxClose: () => void;
}

const LightboxImage: React.FC<LightboxImageProps> = ({
  imagePath,
  handleLightboxClose,
}) => {
  return (
    <div className="lightbox" onClick={handleLightboxClose}>
      <span className="lightbox-close" onClick={handleLightboxClose}>
        &times;
      </span>
      <img src={imagePath} alt="Enlarged" />
    </div>
  );
};

export default LightboxImage;
