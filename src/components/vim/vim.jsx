import React, { useState } from "react";
import initialVim from "../../data/vim.json";
// import ReactPlayer from "react-player";
import "../../styles/vim.scss";

const Vim = () => {
  const [searchText, setSearchText] = useState("");
  const [vimCommands, setVimCommands] = useState(initialVim);

  const searchCommands = (userSearchText) => {
    setSearchText(userSearchText);
  };

  const toggleDescription = (index) => {
    vimCommands[index].show = !vimCommands[index].show;
    setVimCommands([...vimCommands]);
  };

  const vimCommandContainsSearchText = (vimCommand) => {
    return vimCommand.title.toLowerCase().includes(searchText.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        className="inputBox"
        placeholder="Search for Command"
      />

      <p className="count-all">
        There are {vimCommands.length} commands and{" "}
        {vimCommands.filter((vimCommand) => vimCommand.title).length} are
        showing.
      </p>

      <div className="vimninjabelts">
        {initialVim.map((e) => {
          return (
            <div className={`vimTitle`}>
              <ul>
                <li className="title_belt">
                  {e.title} - {e.belt}
                </li>
                <li className="commands">{e.command}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Vim;
