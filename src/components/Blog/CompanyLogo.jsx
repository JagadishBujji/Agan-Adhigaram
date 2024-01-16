import React from "react";
import classes from "./CompanyLogo.module.css";

const CompanyLogo = ({ name }) => {
  return (
    <div className={classes.Logo}>
      <h1 className={classes.LogoText}>{name}</h1>
    </div>
  );
};

export default CompanyLogo;
