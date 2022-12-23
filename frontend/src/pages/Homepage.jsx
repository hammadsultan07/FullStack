import { Link } from "react-router-dom";
import Caraousel from "../components/Caraousel";
function Home() {
  return (
    <div className="container-fluid">
      <Caraousel />
      <div className="container d-flex inline justify-content-center">
      <Link to="binge" className="btn btn-outline-success col-2 my-2 mx-2 py-3">Binge Eat</Link>
      <br />
      <Link to="shop" className="btn btn-outline-success col-2 my-2 mx-2 py-3">Shopping page</Link>
      </div>
    </div>
  );
}

export default Home;