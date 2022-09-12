import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionAvi from "./TransactionAvi";

// types
import { TransactionProps } from "./types";

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
    return (
      <TransactionRow>
          <LeftView>
            <TransactionAvi
              background={props.art.background}
              icon={props.art.icon}
            />
            <View style={{ marginLeft: 10 }} >
              <RegularText 
                textStyles={{ 
                  color: colors.secondary, 
                  textAlign: "left", 
                  marginBottom: 5,
                }}
              >
                {props.title}
              </RegularText>
              <SmallText
                textStyles={{ 
                  color: colors.graydark, 
                  textAlign: "left", 
                }}
              >
                {props.subtitle}
              </SmallText>
            </View>
          </LeftView>
          <RightView>
            <RegularText 
              textStyles={{ 
                color: colors.secondary, 
                textAlign: "right", 
                marginBottom: 5,
              }}
            >
              {props.amount}
            </RegularText>
            <SmallText
              textStyles={{ 
                color: colors.graydark, 
                textAlign: "right", 
              }}
            >
              {props.date}
            </SmallText>
          </RightView>
      </TransactionRow>
    );
};

export default TransactionItem;
