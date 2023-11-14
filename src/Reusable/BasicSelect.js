import classes from "./BasicSelect.module.css";

const BasicSelect = () => {
  return (
    <>
      <form>
        <select className={`${classes.newselection}`} name="cars" id="cars">
          <option className={classes.option} value="new">
            Newest
          </option>

          <option className={classes.option} value="old">
            oldest
          </option>
        </select>
      </form>
    </>
  );
};

export default BasicSelect;
