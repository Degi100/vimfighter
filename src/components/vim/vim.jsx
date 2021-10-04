import React, { useState, useEffect } from "react";
import initialVim from "../../data/vim.json";
// import ReactPlayer from "react-player";
import "../../styles/vim.scss";

const Vim = () => {
  const [searchText, setSearchText] = useState("");
  const [displayVimCommands, setDisplayVimCommands] = useState(initialVim);
  const [initialVimCommands] = useState(initialVim);
  useEffect(() => {
    setDisplayVimCommands(
      initialVimCommands.filter((vimCommand) =>
        vimCommand.title.toLowerCase().includes(searchText.toLowerCase()) ||
        vimCommand.belt.toLowerCase().includes(searchText.toLowerCase()) ||
        vimCommand.category.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="inputBox"
        placeholder="Search for Command"
        onChange={changeSearchText}
        autoFocus
      />

      <p className="count-all">
        There are {displayVimCommands.length} commands and{" "}
        {displayVimCommands.filter((vimCommand) => vimCommand.title).length} are
        showing.
      </p>

      <div className="vimninjabelts">
        {displayVimCommands.map((e) => {
          return (
            <div className={`vimTitle`}>
              <ul>
                <li className="title_belt">
                  {e.title} - {e.belt} - {e.category}
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
