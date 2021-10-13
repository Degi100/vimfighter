import showVimCommands from "../../data/vim.json";
import "../../styles/register.scss";

const Register = () => {
  return (
    <div className="panel">
      <ul>
        {showVimCommands.map((vimCommand, index) => {
          return (
            <li className="content" key={index}>
              <p className="vim-category">{vimCommand.category}</p>
              <p className="vim-title">{vimCommand.title}</p>
              <p className="vim-commands">{vimCommand.command}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Register;
