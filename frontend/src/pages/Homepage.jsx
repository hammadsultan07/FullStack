import { Link } from "react-router-dom";
import Caraousel from "../components/Caraousel";
function Home() {
  return (
    <div>
      <Caraousel />
      <Link to="binge" className="btn btn-outline-success">Binge Eat</Link>
      <br />
      <Link to="shop" className="btn btn-outline-success">Shopping page</Link>
    </div>
  );
}

export default Home;