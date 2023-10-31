import Author from "../components/Author";

import classes from "./AuthorAndIllustrator.module.css";

const AuthorAndIllustrator = () => {
  return (
    <>
      <div className={classes.Authorbooksmain}>
        <Author />
      </div>
    </>
  );
};

export default AuthorAndIllustrator;
