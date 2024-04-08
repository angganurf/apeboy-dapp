import React, { useRef } from 'react';

const CopyText: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  const handleCopy = () => {
    if (textRef.current) {
      const textToCopy = textRef.current.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log('Text copied to clipboard:', textToCopy);
          alert('Copied');
          // You can also show a success message or perform any other action here
        })
        .catch((error) => {
          console.error('Error copying text:', error);
          // You can handle errors here, like showing an error message to the user
        });
    }
  };

  return (
    <div>
      <span ref={textRef} onClick={handleCopy}>
        {textToCopy}
      </span>
    </div>
  );
};

export default CopyText;
