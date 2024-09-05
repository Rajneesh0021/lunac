import React, { useState } from 'react';

const IntroBox = () => {
  const loremText = {
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a eros non orci sagittis vehicula at eget nulla.",
    experience: "Donec pulvinar, nibh id ultrices placerat, ligula elit ultricies nisi, a dictum velit orci nec leo.",
    recommended: "Curabitur interdum felis ut mi dapibus, at pellentesque odio pretium. Phasellus at lorem purus."
  };

  const [activeButton, setActiveButton] = useState('about'); // Set 'about' as the default active button
  const [content, setContent] = useState(loremText.about); // Default content

  // Content for the different buttons
 
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Set the active button when clicked
    setContent(loremText[buttonName]); // Update the content when a button is clicked
  };

  return (
    <>
      <div style={styles.box}>
        {/* Question Mark Icon in Circle */}
        <div style={styles.iconContainer}>
          <img src="./Vector.png" alt="" style={styles.Image} />
        </div>

        {/* Image in the middle */}
        <div style={styles.imageContainer}>
          <img src="./frame.png" alt="Placeholder" style={styles.Image} />
        </div>

        {/* Buttons for About, Experience, Recommended */}
        <div style={styles.buttonGroup}>
          <button
            onClick={() => handleButtonClick('about')}
            style={activeButton === 'about' ? { ...styles.button, ...styles.activeButton } : styles.button}
          >
            About
          </button>
          <button
            onClick={() => handleButtonClick('experience')}
            style={activeButton === 'experience' ? { ...styles.button, ...styles.activeButton } : styles.button}
          >
            Experience
          </button>
          <button
            onClick={() => handleButtonClick('recommended')}
            style={activeButton === 'recommended' ? { ...styles.button, ...styles.activeButton } : styles.button}
          >
            Recommended
          </button>
        </div>

        {/* Scrollable Div */}
        <div style={styles.scrollableDiv}>
          {content}
        </div>
      </div>
    </>
  );
};

const styles = {
  box: {
    backgroundColor: '#363C43',
    height: '40%', // Full height of the parent
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px',
    position: 'relative',
    padding: '20px',
    color: 'white',
  },
  iconContainer: {
    position: 'absolute',
    top: '1em',
    left: '0.5em',
    borderRadius: '50%',
  },
  imageContainer: {
    position: 'absolute',
    top: '50%',
    left: '0.5em',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '90%',
    height: '3em',
    backgroundColor: 'black',
    borderRadius: '0.5em',
    padding: '0.5em',
  },
  button: {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    width: '60%',
    padding: '10px',
    background: 'black',
  },
  activeButton: {
    borderRadius: '22px',
    background: '#28292F',
    boxShadow:  '24px 24px 33px #151518, -24px -24px 33px #3b3d46',
  },
  scrollableDiv: {
    backgroundColor: '#363C43',
    color: 'white',
    width: '90%',
    height: '90%',
    borderRadius: '8px',
    marginTop: '20px',
    marginBottom: '10px',
    padding: '10px',
    overflowY: 'scroll', // Scrollable vertically
    whiteSpace: 'pre-wrap', // Maintain text formatting

  },
  
};

export default IntroBox;
