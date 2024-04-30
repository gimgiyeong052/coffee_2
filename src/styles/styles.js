// styles.js

const styles = {
    layoutMax: {
      maxWidth: '767px',
      margin: '0 auto',
      paddingLeft: '15px',
      paddingRight: '15px',
    },
    header: {
      maxWidth: '767px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      borderBottom: '1px solid #000',
      padding: '12px 15px',
    },
    backBtn: {
      position: 'absolute',
      top: '50%',
      left: '15px',
      transform: 'translateY(-50%)',
      border: '1px solid red',
      width: '35px',
      height: '35px',
      backgroundSize: 'contain',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      h1: {
        fontSize: '18px',
      },
    },
    popupLayer: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '1',
      width: '85%',
      minWidth: '330px',
      display: 'flex',
      flexDirection: 'column',
      padding: '15px',
      paddingTop: '50px',
      paddingBottom: '30px',
      background: '#fff',
      borderRadius: '15px',
      display: 'none',
    },
    bgBlack: {
      width: '100%',
      height: '100%',
      backgroundColor: '#0000009e',
      display: 'none',
      zIndex: '0',
      position: 'fixed',
      top: '0',
      left: '0',
    },
    popupLayerImgArea: {
      width: '130px',
      height: '130px',
      margin: '0 auto',
    },
    popupLayerImg: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    popupLayerP: {
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: '700',
      marginTop: '30px',
    },
    popupLayerButton: {
      width: '100%',
      height: '50px',
      backgroundColor: 'orange',
      color: '#fff',
      marginTop: '45px',
      borderRadius: '10px',
    },
  };
  
  export default styles;
  