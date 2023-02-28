import './styles.scss'

function Footer() {
  return (
    <>
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <button className="button_top">
          Mentions légales
          </button>
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
