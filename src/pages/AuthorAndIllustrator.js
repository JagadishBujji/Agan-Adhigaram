import Author from "../components/Author";

import classes from "./AuthorAndIllustrator.module.css";

const AuthorAndIllustrator = () => {
  return (
    <>
      <div className={classes.Authorbooksmain}>
        <Author />
        <a href="#" id="scroll" style={{ display: "none" }}>
          <span></span>
        </a>
      </div>
    </>
  );
};

export default AuthorAndIllustrator;
