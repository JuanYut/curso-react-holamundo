import { ReactNode } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import styled from "styled-components";

type BtnProps = {
  isLoading?: boolean;
};

const Btn = styled.button<BtnProps>`
  background: ${(props) => (props.isLoading ? "gray" : "#fdfd96")};
  padding: 15px 30px;
  border-radius: 8px;
  border: solid 1px black;
`;

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  return (
    <Btn onClick={onClick} disabled={isLoading} isLoading={isLoading}>
      {isLoading ? "Cargando..." : children}
      {/* <FaRegThumbsUp color="white" size={20} /> */}
    </Btn>
  );
}

export default Button;
