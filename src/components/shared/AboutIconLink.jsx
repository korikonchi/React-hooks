import { FaQuestion } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export function AboutIconLink() {
  return (
    <div className="about-link">
      <NavLink to="/about">
        <FaQuestion size={30} />
        About
      </NavLink>
    </div>
  );
}

export default AboutIconLink;
