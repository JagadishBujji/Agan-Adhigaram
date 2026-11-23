import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="text-center p-5">
    <h2>Page not found</h2>
    <p>The page you are looking for does not exist or has moved.</p>
    <Link to="/books" className="btn btn-warning text-white">
      Browse books
    </Link>
  </section>
);

export default NotFound;
