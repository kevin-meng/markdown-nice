import React from "react";
import "./index.css";

export default ({fill = "#1890ff", style = {}, className = "icon", viewBox = "0 0 1024 1024"}) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M509.49688889 792.91733333c51.76888889 0.11377778 93.52533333 41.87022222 93.41155556 93.75288889-0.11377778 51.65511111-42.09777778 93.63911111-93.86666667 93.52533333-51.54133333 0-93.52533333-42.21155554-93.41155556-93.98044444 0.11377778-51.65511111 41.984-93.29777778 93.86666667-93.29777778z m-93.75288889-656.49777778c0-51.76888889 41.87022222-93.86666667 93.52533333-93.86666665 51.65511111-0.11377778 93.75288889 41.87022222 93.75288889 93.63911111 0 51.88266667-41.64266667 93.75288889-93.52533333 93.75288889s-93.75288889-41.64266667-93.75288889-93.52533335zM603.02222222 511.54488889c0 51.65511111-42.43911111 93.98044445-93.75288889 93.75288889-51.76888889-0.34133333-93.52533333-42.21155554-93.52533333-93.98044445 0-51.65511111 42.21155554-93.86666667 93.75288889-93.63911111 51.65511111 0.11377778 93.52533333 42.09777778 93.52533333 93.86666667z" />
  </svg>
);
