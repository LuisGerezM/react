import styled from "styled-components";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { Button } from "Components/CustomButton/styled-components/Button.styled";
import { dropShadow, inputTextCssStyle } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";
import { Form } from "react-bootstrap";
import { fadeIn } from "styled-components/animation.styled";

export const TextArea = styled(InputForm)`
  border-radius: 6px;
  padding: 10px;
  resize: none;
  min-height: 200px;
`;

export const ContainerInputError = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const ButtonConfirm = styled(Button)`
  border: 1px solid #0038ff;
  &:hover {
    background-color: #f5f5f5 !important;
    color: #0038ff !important;
  }
`;

export const Errors = styled.span`
  color: red;
  font-size: 15px;
  padding-left: 10px;
`;

export const UserFormSelect = styled(Form.Select)`
  ${inputTextCssStyle}
  background-color: ${themeColors.white};
  color: ${themeColors.black}!important;
  border: 1px solid ${themeColors.black};
  border-radius: 8px;
  padding: 10px;
  transition: 0.5s;
  height: ${({ height }) => height};

  ${dropShadow};

  ${fadeIn};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${themeColors.grayBorder}!important;
  }
  :-ms-input-placeholder {
    color: ${themeColors.grayBorder}!important;
  }
`;
