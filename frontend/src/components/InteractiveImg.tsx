import React, { useRef, useEffect } from 'react';
import './InteractiveImage.css'; // Import the CSS file for styling
import img from "../../src/assets/logo.scg.png"

const InteractiveImage: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const imageWidth = imageRef.current.offsetWidth;
      const imageHeight = imageRef.current.offsetHeight;

      // Calculate the center of the container
      const centerX = rect.left + imageWidth / 2;
      const centerY = rect.top + imageHeight / 2;

      // Calculate mouse position relative to the center of the image
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate the movement values
      const moveX = (mouseX - centerX) / 20; // Adjust divisor to control sensitivity
      const moveY = (mouseY - centerY) / 20; // Adjust divisor to control sensitivity

      // Apply the transformation
      imageRef.current.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="image-container">
      <img
        src={img}
        alt="Interactive"
        ref={imageRef}
        className="interactive-image"
      />
    </div>
  );
};

export default InteractiveImage;
