import PropTypes from "prop-types";
import styles from "./Link.module.css";

console.log(styles);

export const Link = ({ path = "/", title, children }) => {
  return (
    // <a href={path || '/'} title={title}>
    <a
      className={`${styles.link} ${styles["custom-link"]}`}
      href={path}
      title={title}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// export const Link = (props) => {
//   return (
//     <a href={props.href} title={props.title}>
//       {props.children}
//     </a>
//   );
// };

// const number = 12;

// const str = `text ${number} text`;
