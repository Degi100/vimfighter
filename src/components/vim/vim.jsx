import React, { useState, useEffect } from "react";
import initialVim from "../../data/vim.json";
// import ReactPlayer from "react-player";
import "../../styles/vim.scss";

const initialDistinctCategories = initialVim
  .filter((vimCommand) => true)
  .map((vimCommand) => vimCommand.category);
console.log(initialDistinctCategories);

const Vim = () => {
  const [searchText, setSearchText] = useState("");
  const [displayVimCommands, setDisplayVimCommands] = useState(initialVim);
  const [initialVimCommands] = useState(initialVim);

  useEffect(() => {
    setDisplayVimCommands(
      initialVimCommands.filter(
        (vimCommand) =>
          vimCommand.title.toLowerCase().includes(searchText.toLowerCase()) ||
          vimCommand.belt.toLowerCase().includes(searchText.toLowerCase()) ||
          vimCommand.category
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          vimCommand.command.toLowerCase().includes(searchText.toLowerCase()) ||
          vimCommand.tutorial.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, initialVimCommands]);

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        className="inputBox"
        type="text"
        placeholder="Search for Command"
        onChange={changeSearchText}
        autoFocus
      />

      <p className="count-all">
        There are {initialVimCommands.length} commands and{" "}
        {displayVimCommands.filter((vimCommand) => vimCommand.title).length} are
        showing.
      </p>

      <div className="vimninjabelts">
        {displayVimCommands.map((vimCommand, index) => {
          return (
            <div className={`vimTitle`} key={index}>
              <ul>
                <li className="title_belt">
                  {vimCommand.title} - {vimCommand.category}
                </li>
                <li className="commands">{vimCommand.command}</li>
                {/* <ReactPlayer url={vimCommand.tutorial} /> */}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Vim;
