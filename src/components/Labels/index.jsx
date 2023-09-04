import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const LabelWrapper = styled("span")(
  () => `
      background-color: #eeeeee;
      padding: 4px;
      font-size: 15px;
      border-radius: 5px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-height: 24px;
      margin-bottom: 10px;
      
      &.MuiLabel {
        
        &-success {
          background-color: #b2dfdb;
          color: #00695c;
        }
        
        &-warning {
          background-color: #ffe0b2;
          color: #ef6c00
        }
              
        &-error {
          background-color: #ffcdd2;
          color: #c62828
        }
      }
`
);

const Label = ({ color = "secondary", children, ...rest }) => {
  return (
    <LabelWrapper className={`MuiLabel-${color}`} {...rest}>
      {children}
    </LabelWrapper>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(["error", "warning", "success"]),
};

export default Label;
