import React from "react";
import Button from "../Button/Button";
import FormItem from "./FormItem";

const AddMovie: React.FC = () => (
  <div>
    <h2>ADD MOVIE</h2>
    <form>
      <div>
        <FormItem />
        <FormItem />
        <FormItem />
      </div>
      <div>
        <FormItem />
        <FormItem />
        <FormItem />
      </div>
      <FormItem />
    </form>
    <Button />
    <Button />
  </div>
);

export default AddMovie;
