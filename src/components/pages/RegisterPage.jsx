import showVimCommands from "../../data/vim.json";
import "../../styles/register.scss";

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <div className="panel">
        {showVimCommands.map((vimCommand, index) => {
          return (
            <ul >
              <div className="content" key={index} >
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

export default Register;
