import showVimCommands from "../../data/vim.json";
import "../../styles/register.scss";

const RegisterPage = () => {
  return (
    <div>
      <h2>Register</h2>
      <div className="panel">
        {showVimCommands.map((vimCommand, index) => {
          return (
            <ul>
              <div className="content">
                <li className="vim-Category">{vimCommand.category}</li>
                <li className="vim-title">{vimCommand.title}</li>
                <li className="vim-commands">{vimCommand.command}</li>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default RegisterPage;
