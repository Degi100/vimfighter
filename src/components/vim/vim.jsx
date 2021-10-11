import React, { useState, useEffect } from "react";
import initialVim from "../../data/vim.json";
import "../../styles/vim.scss";
import _ from "lodash";
import gif from './gif/replaceSingleChar.gif'
import gif1 from './gif/firstLine_gg.gif'


const initialDistinctCategories = _.uniqBy(initialVim, "category").map(
  (vimCommand) => vimCommand.category
);

const Vim = () => {
  const [searchText, setSearchText] = useState("");
  const [displayVimCommands, setDisplayVimCommands] = useState(initialVim);
  const [initialVimCommands] = useState(initialVim);
  const [currentCategory, setCurrentCategory] = useState("");

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

  useEffect(() => {
    setDisplayVimCommands(
      initialVimCommands.filter(
        (vimCommand) =>
          vimCommand.category === currentCategory || currentCategory === ""
      )
    );
  }, [currentCategory, initialVimCommands]);

  const changeCurrentCategory = (e) => {
    setCurrentCategory(e.target.value);
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

      <select className="selectBox" onChange={changeCurrentCategory}>
        <option value="">All Categories</option>
        {initialDistinctCategories.map((category) => {
          return <option value={category}>{category} </option>;
        })}
      </select>

      <div className="vimninjabelts">
        <p className="count-all">
          There are {initialVimCommands.length} commands and{" "}
          {displayVimCommands.filter((vimCommand) => vimCommand.title).length}{" "}
          are showing.
        </p>

        {displayVimCommands.map((vimCommand, index) => {
          return (
            <div className={`vimTitle`} key={index}>
              <ul>
                <li className="title_belt">
                  {vimCommand.title} - {vimCommand.category} - 
                </li>
                <li className="commands">{vimCommand.command}</li>
                <img src={gif} alt="dummy_gif"/>
                <li>{vimCommand.tutorial}</li>
                <img src={gif1} alt="dummy1_gif"/>
   
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Vim;
