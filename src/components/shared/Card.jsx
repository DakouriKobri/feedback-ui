import PropTypes from "prop-types";

export default function Card({ children, reverse }) {
  /* 
  This is a conditional style class:
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
  */
  // Below is a conditional style property.
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0, 0, 0, 0.4)" : "#fff",
        color: reverse ? "#fff" : "#333",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
