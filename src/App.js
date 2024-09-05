import React from 'react';
import GalleryBox from './components/GalleryBox';
import IntroBox from './components/IntroBox';

const App = () => {
  return (
    <div style={styles.appContainer}>
      <div style={styles.leftSide}></div>
      <div style={styles.rightSide}>
        <IntroBox/>
        <div style={styles.Hr}></div>
        <GalleryBox/>
        <div style={styles.Hr}></div>
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
    
  },
  leftSide: {
    flex: 1,
   
  },
  rightSide: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '3em',
    gap:'1em',
    width:'50%'
  },
  Hr:{
    width:'70%',
    height:'2px',
    border:'1px solid ',
    margin: 'auto',
    borderRadius: '5em',
   },
};

export default App;
