import React, { useState, useEffect } from "react";
import Checkboxes from "../Checkbox/Checkboxes"
import initialVim from "../../data/vim.json";
import "../../styles/vim.scss";
import _ from "lodash";

const initialDistinctCategories = _.uniqBy(initialVim, "category").map(
  (vimCommand) => vimCommand.category
);

const Vim = () => {
  const [searchText, setSearchText] = useState("");
  const [displayVimCommands, setDisplayVimCommands] = useState(initialVim);
  const [initialVimCommands] = useState(initialVim);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const searchTextIsOkay = (vimCommand) => {
      return (
        vimCommand.title.toLowerCase().includes(searchText.toLowerCase()) ||
        vimCommand.belt.toLowerCase().includes(searchText.toLowerCase()) ||
        vimCommand.category.toLowerCase().includes(searchText.toLowerCase()) ||
        vimCommand.command.toLowerCase().includes(searchText.toLowerCase())
      );
    };
    const currentCategoryIsOkay = (vimCommand) => {
      return vimCommand.category === currentCategory || currentCategory === "";
    };
    setDisplayVimCommands(
      initialVimCommands.filter(
        (vimCommand) =>
          searchTextIsOkay(vimCommand) && currentCategoryIsOkay(vimCommand)
      )
    );
  }, [searchText, initialVimCommands, currentCategory]);

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

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
      />

      <select className="selectBox" onChange={changeCurrentCategory}>
        <option value="">All Categories</option>
        {initialDistinctCategories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}{" "}
            </option>
          );
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
                  {vimCommand.title} - {vimCommand.category} 
                 <li> <Checkboxes /></li>
                </li>
                <li className="commands">{vimCommand.command}</li>
                <img
                  src={`gif/${vimCommand.tutorialgif}`}
                  alt="tutorial animation"
                />
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Vim;
