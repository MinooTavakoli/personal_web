import React from "react";
import PropTypes from "prop-types";
import { Loading, Disabled } from "../tools";
import "./card.css";


function Card({
  children,
  title,
  footer,
  extra,
  icon,
  loading,
  className,
  tabs = false,
  disabled = false,
  contentStyle = {},
  titleStyle = {},
  ...rest
}) {
  return (
    <div className={`card${tabs ? " card-tabs " : " "}${className}`} {...rest}>
      {loading && <Loading />}
      {disabled && <Disabled />}
      {(title || icon || extra) && (
        <div className="card-header">
          {icon && <div className="card-icon">{icon}</div>}
          {title && (
            <div className="card-title" style={titleStyle}>
              {title}
            </div>
          )}
          <div className="card-space" />
          {extra && <div className="card-extra">{extra}</div>}
        </div>
      )}
      {children && (
        <div className="card-content" style={contentStyle}>
          {children}
        </div>
      )}
      {/* {cardContent && <div>{cardContent}</div>} */}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.any,
  footer: PropTypes.any,
  extra: PropTypes.any,
  className: PropTypes.string,
  tabs: PropTypes.bool,
  loading: PropTypes.bool,
  contentStyle: PropTypes.object,
};

Card.defaultProps = {
  icon: undefined,
  title: undefined,
  footer: undefined,
  extra: undefined,
  className: "",
  tabs: false,
  loading: false,
  contentStyle: {},
};

export default Card;
