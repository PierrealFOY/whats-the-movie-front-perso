import './styles.scss'
import { Button } from 'react-bootstrap';

function Footer() {
  return (
    <>
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <Button
            className='btn_legalMentions'
            variant="success"
            size="md"
          >
          Mentions légales
          </Button>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Copyright: 
        <a className="text-white" href="#">
          What's the movie ?
        </a>
      </div>
    </footer>
  </>
  
  );
}

export default Footer;
