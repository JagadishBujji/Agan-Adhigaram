import Subscribe from "../Reusable/Subscribe";
import BlogBackMove from "../components/Blog/BlogBackMove";
import Profile from "../components/Profile/Profile";
import classes from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <>
      <div className={classes.profile}>
        <BlogBackMove move="Profile" />
        <Profile />
        <Subscribe
          circleimg="./images/circleElement (1).svg"
          circle1="./images/circleElement.svg"
        />
      </div>
    </>
  );
};

export default ProfilePage;
