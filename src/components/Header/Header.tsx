import React from "react";
import SearchForm from "./Search/SearchForm";
import Button from "../Button/Button";

const Header: React.FC = () => (
  <div>
    <div>
      <label>netflix</label>
      <Button />
    </div>
    <h2>FIND YOUR MOVIE</h2>
    <SearchForm />
  </div>
);

export default Header;
