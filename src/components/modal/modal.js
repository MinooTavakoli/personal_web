import React from "react";
import { Icon } from "../../../layout/default/image/icon";
import Loading from "../../components/tools/Loading";
import useWindowSize from "../../customHooks/useWindowSize";
import "./modal.css";

function Modal({
  children,
  title,
  footer,
  extra,
  onClose,
  show = false,
  showShadow = true,
  outSideClick = undefined,
  width = undefined,
  height = undefined,
  loading = false,
  style = {},
  styleContent = {},
  size = "lg",
  maxSize = "md",
  maxSizeNumber = 3,
}) {
  let _size = size;
  if (size === "auto") {
    const win = useWindowSize();
    _size = win.sizeNumber > maxSizeNumber ? maxSize : win.size;
  }
  if (!show) return null;
  return (
    <>
      <div className={`modal-component`}>
        <div
          className={`modal-wrapper modal-wrapper-size-${_size}`}
          style={{
            width,
            height,
            ...style,
            boxShadow: showShadow ? "0 0 1px 10000px rgba(0,0,0,0.3)" : "none",
          }}
        >
          {loading && <Loading />}
          {(title || extra || onClose) && (
            <div className="modal-header">
              {title && <div className="modal-title">{title}</div>}
              {(extra || onClose) && (
                <div className="modal-extra">
                  {extra}
                  {onClose && (
                    <div onClick={() => onClose()} className="modal-onclose">
                      <Icon className="icon-danger-fill-h">
                        <Icon.Close />
                      </Icon>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          {children && (
            <div className="modal-content" style={styleContent}>
              {children}
            </div>
          )}
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
      {show && (showShadow || outSideClick) && (
        <div
          className="modal-show-shadow-wrapper"
          onClick={() => outSideClick && outSideClick()}
        />
      )}
    </>
  );
}

export default Modal;
