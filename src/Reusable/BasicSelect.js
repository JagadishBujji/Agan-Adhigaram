import classes from "./BasicSelect.module.css";

const BasicSelect = () => {
  return (
    <>
      <form>
        <select className={`${classes.newselection}`} name="cars" id="cars">
          <option className={classes.option} value="volvo">
            Newest
          </option>

          <option className={classes.option} value="saab">
            oldest
          </option>

          {/* <option className={classes.option} value="opel">
            Opel
          </option>

          <option className={classes.option} value="audi">
            Audi
          </option> */}
        </select>
      </form>
    </>
  );
};

export default BasicSelect;
