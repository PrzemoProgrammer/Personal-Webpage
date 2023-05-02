import InternalServerError from "../../components/error-500/Error_500";
import Navbar from "../../components/navbar/Navbar";

import "./Error_500.css";

function ERROR_500() {
  return (
    <div className="error_500">
      <Navbar />
      <InternalServerError />
    </div>
  );
}

export default ERROR_500;
