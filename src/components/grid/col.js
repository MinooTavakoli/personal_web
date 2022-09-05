import React from "react";
import PropTypes from "prop-types";
import "./col.css";


function Col({
  children,
  position,
  span = "24",
  xs,
  sm,
  md,
  lg,
  xl,
  xsHidden,
  smHidden,
  smDownHidden,
  mdHidden,
  mdDownHidden,
  lgHidden,
  lgDownHidden,
  xlHidden,
  xlDownHidden,
  dir,
  padding,
  style = {},
  className = "",
  ...rest
}) {
  return (
    <div
      className={`col-${span} ${xs && `col-xs-${xs} `}${sm && `col-sm-${sm} `}${
        md && `col-md-${md} `
      }${lg && `col-lg-${lg} `}${xl && `col-xl-${xl} `}${
        xsHidden && `col-xs-hidden `
      }${smHidden && `col-sm-hidden `}${mdHidden && `col-md-hidden `}${
        lgHidden && `col-lg-hidden `
      }${xlHidden && `col-xl-hidden `}${smDownHidden && `col-sm-down-hidden `}${
        mdDownHidden && `col-md-down-hidden `
      }${lgDownHidden && `col-lg-down-hidden `}${
        xlDownHidden && `col-xl-down-hidden `
      }position-${position} ${className}`}
      style={{ direction: dir, padding, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

Col.propTypes = {
  className: PropTypes.string,
  span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xsHidden: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  smHidden: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  smDownHidden: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  mdHidden: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  mdDownHidden: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  lgHidden: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  lgDownHidden: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  xlHidden: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  xlDownHidden: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  position: PropTypes.string,
  style: PropTypes.object,
  dir: PropTypes.string,
};

Col.defaultProps = {
  span: "24",
  xs: "",
  sm: "",
  md: "",
  lg: "",
  xl: "",
  xsHidden: "",
  smHidden: "",
  smDownHidden: "",
  mdHidden: "",
  mdDownHidden: "",
  lgHidden: "",
  lgDownHidden: "",
  xlHidden: "",
  xlDownHidden: "",
  position: "fixed",
  style: {},
  dir: "rtl",
  className: "",
};

export default Col;
