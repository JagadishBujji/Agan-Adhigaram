import classes from "./values.module.css";

const Values = () => {
  return (
    <>
      <div className={classes.Values}>
        <div className={classes.valuesheading}>
          <h1 className={classes.valuetitle}>Values we stand for</h1>
          <p className={classes.subtitle}>
            Fostering early education and digital balance
            <br /> through interactive, high-quality books.
          </p>
        </div>
        <div className={`${classes.greenleaf} row container`}>
          <div className={`${classes.firsthalf1} col-md-6`}>
            <div className={classes.Learning}>
              <h4 className={classes.valuestitles}>Interactive Learning</h4>
              <p className={classes.valuessubcontent}>
                Our books aren't just pages to be turned; they're pathways to
                engagement. Each book is designed to encourage interaction,
                making learning a multisensory adventure.
              </p>
            </div>
          </div>
          <div className={`${classes.firsthalf2} col-md-6`}>
            <h4 className={classes.valuestitles}>Early Education</h4>
            <p className={classes.valuessubcontent}>
              We are passionate about empowering children with knowledge and
              skills right from the start. Our interactive board books are
              thoughtfully designed to stimulate young minds, encouraging
              language development, cognitive skills, and creativity.
            </p>
          </div>
          <div className={`${classes.firsthalf3} col-md-6`}>
            <h4 className={classes.valuestitles}>
              Balancing Tradition
              <br /> and Technology
            </h4>
            <p className={classes.valuessubcontent}>
              In a digital age, we recognise the importance of maintaining a
              healthy balance between technology and the real world. Our
              products are carefully crafted to provide tactile experiences that
              engage the senses, fostering a well-rounded approach to learning.
            </p>
          </div>
          <div className={`${classes.firsthalf4} col-md-6`}>
            <h4 className={classes.valuestitles}>
              Quality
              <br /> Craftsmanship
            </h4>
            <p className={classes.valuessubcontent}>
              We take pride in producing high-quality, durable, and safe
              products for children. Each book is a result of meticulous
              craftsmanship and dedication to providing the best learning tools
              for young learners.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
