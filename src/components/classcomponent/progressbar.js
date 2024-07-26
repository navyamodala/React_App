import ProgressBar from 'react-bootstrap/ProgressBar';

function CustomProgressbar(prop) {
const{scale}=prop
  return <ProgressBar now={scale} />;
}

export default CustomProgressbar;