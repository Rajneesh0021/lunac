import React from 'react';

const GalleryBox = () => {
  return (
    <div style={styles.box}>
      {/* Icon */}
      <div style={styles.iconContainer}>
        <img src="./Vector.png" alt="" style={styles.Image} />
      </div>

      {/* Image in the middle */}
      <div style={styles.imageContainer}>
        <img src="./frame.png" alt="Placeholder" style={styles.Image} />
      </div>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Gallery</button>
       
        <div style={styles.arrowContainer}>
        <button style={styles.Ibutton}>+ Add Photo</button>
        <button style={styles.arrowButton}>←</button>
        <button style={styles.arrowButton}>→</button>
      </div>
      </div>

     

      <div style={styles.scrollableImageContainer}>
        <img src="./image.png" alt=" 1" style={styles.scrollableImage} />
        <img src="./image.png" alt="2" style={styles.scrollableImage} />
        <img src="./image.png" alt=" 3" style={styles.scrollableImage} />
      </div>
    </div>
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
  buttonContainer: {
   
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    height: '3em',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    // border: '1px solid white',
   
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius:'10px',

    
  },
  Ibutton: {
    backgroundColor: '#1f1f1f',
    color: 'white',
    // border: '1px solid white',
   
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius:'30px',
    background: 'linear-gradient(225deg, #2b2c32, #24252a)',
    boxShadow:  '-33px 33px 65px #161619,  33px -33px 65px #3a3c45',
  },
  arrowContainer: {
   
    display: 'flex',
    justifyContent: 'space-between',
   width:'45%',
  },
  arrowButton: {
    backgroundColor: '#1f1f1f',
    color: 'white',
    height:'3em',
    width:'3em',
    // border: '1px solid white',
    borderRadius: '50%',
    padding: '5px',
    cursor: 'pointer',
    
    background: 'linear-gradient(225deg, #2b2c32, #24252a)',
    boxShadow:  '-33px 33px 65px #161619,  33px -33px 65px #3a3c45',
  },
  scrollableImageContainer: {
    display: 'flex',
    overflowX: 'auto',
    padding: '10px',
    width: '90%',
    height: '90%',
    justifyContent:'space-between',
    marginTop: '20px',
    marginBottom: '10px',
  
    whiteSpace: 'nowrap',
  },
  scrollableImage: {
   
    marginRight: '10px',
    objectFit: 'cover',
  },
};

export default GalleryBox;
