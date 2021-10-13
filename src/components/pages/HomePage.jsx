import Vim from "../vim/Vim";
import ScrollToTop from "../layout/ScrollToTop";
import "../../styles/main.scss";
const HomePage = () => {
  return (
    <div>
      <div className="container-full">
        <div className="scroll">
          <ScrollToTop />
        </div>
        <div className="container">
          <Vim />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
