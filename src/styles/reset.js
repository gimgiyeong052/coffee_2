// reset.js

const reset = {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    a: {
      color: '#222',
      textDecoration: 'none',
    },
    img: {
      width: '100%',
      height: '100%',
      border: 'none',
      verticalAlign: 'middle',
      objectFit: 'cover',
    },
    ul: {
      listStyle: 'none',
    },
    ol: {
      listStyle: 'none',
    },
    html: {
      overflow: 'hidden',
      overflowY: 'scroll',
    },
    body: {
      padding: 0,
      margin: 0,
      width: '100%',
      fontFamily: 'Pretendard',
      fontWeight: 400,
      wordBreak: 'break-all',
      color: '#222222',
      WebkitTextSizeAdjust: 'none',
      msTextSizeAdjust: 'none',
      MozTextSizeAdjust: 'none',
      OTextSizeAdjust: 'none',
    },
    'html, body > *': {
      letterSpacing: '-0.03em !important',
    },
    'body.no_scroll': {
      overflow: 'hidden',
    },
    button: {
      cursor: 'pointer',
      border: '1px solid transparent',
      fontFamily: 'Pretendard',
      color: 'inherit',
      backgroundColor: 'transparent',
    },
    input: {
      fontFamily: 'Pretendard',
    },
    select: {
      fontFamily: 'Pretendard',
    },
    textarea: {
      fontFamily: 'Pretendard',
    },
    caption: {
      position: 'absolute',
      width: '0px',
      height: '0px',
      overflow: 'hidden',
    },
    table: {
      width: '100%',
      tableLayout: 'fixed',
      wordBreak: 'break-all',
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
    i: {
      fontStyle: 'normal',
    },
    '*::after': {
      boxSizing: 'border-box',
    },
    '*::before': {
      boxSizing: 'border-box',
    },
  };
  
  export default reset;
  