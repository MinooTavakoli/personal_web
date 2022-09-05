import React from "react";
import PropTypes from "prop-types";
import "./row.css";

export default function Row({
  children,
  justify,
  align,
  grep,
  dir,
  className,
  style,
  ...rest
}) {
  return (
    <div
      className={`d-flex justify-${justify} align-${align} ${className}`}
      style={{
        margin: `${grep}px auto`,
        width: ` calc(100% - ${grep * 2}px)`,
        direction: dir,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

Row.propTypes = {
  className: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  dir: PropTypes.string,
};
Row.defaultProps = {
  className: "",
  style: {},
  justify: "right",
  align: "right",
  grep: "0",
  dir: "rtl",
};
