import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";

// card logos
import logo1 from "./../assets/cards/visa_white.png";
import logo2 from "./../assets/cards/mc.png";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`

const Home: FunctionComponent = () => {
  const cardData = [
    {
      id: 1,
      accountNo: "3845757744",
      balance: 20000.15,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2, 
      accountNo: "3845730203",
      balance: 12000.01,
      alias: "Personal Prepaid",
      logo: logo2,
    },
    {
      id: 3, 
      accountNo: "3845238847",
      balance: 5600.83,
      alias: "School Prepaid",
      logo: logo1,
    }
  ]

  const transactionData = [
    {
      id: 1,
      amount: "-$86.00",
      date: "14 Sept 2021",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$286.00",
      date: "14 Sept 2021",
      title: "Shopping",
      subtitle: "Ali express",
      art: {
        background: colors.tertiary,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount: "-$586.00",
      date: "14 Aug 2021",
      title: "Travel",
      subtitle: "Emirates",
      art: {
        background: colors.accent,
        icon: "airplane",
      },
    }
  ]
    return (
      <HomeContainer>
          <StatusBar style="dark" />
          <CardSection data={cardData} />
          <TransactionSection data={transactionData} />
      </HomeContainer>
    );
};

export default Home;