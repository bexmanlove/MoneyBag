import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components/native";
import BalanceCard from "./BalanceCard";

// types
import { BalanceCardProps } from "./types";

const BalanceCardSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  );
};

export default BalanceCardSection;
