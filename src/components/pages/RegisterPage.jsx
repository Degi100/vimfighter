import showVimCommands from "../../data/vim.json";
import ScrollToTop from '../layout/ScrollToTop'
import "../../styles/register.scss";

const Register = () => {
  const convertToClassName = (text) => {
      return text.replaceAll(" ", "").toLowerCase();
  }

  
  return (
    <div className="panel">
      <ul>
        {showVimCommands.map((vimCommand, index) => {
          return (
            <li className={`content ${convertToClassName(vimCommand.category)}`} key={index}>
            <p className="vim-commands">{vimCommand.command}</p>
            <p className="vim-title">{vimCommand.title}</p>
              <p className="vim-category">{vimCommand.category}</p>
            </li>
          );
        })}
      </ul>
      <ScrollToTop />
    </div>
  );
};

export default Register;
