import classes from "./BasicSelect.module.css";

const BasicSelect = ({ value, changeSortValue }) => {
  return (
    <>
      <form>
        <select
          className={`${classes.newselection}`}
          name="sort"
          value={value}
          onChange={(e) => changeSortValue(e.target.value)}
        >
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
