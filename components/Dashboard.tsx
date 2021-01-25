import React, { useContext } from "react";
import {
  Box,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { AppContext } from "../pages/_app";
import TransactionType from "../models/TransactionType";
import Transaction from "../models/Transaction";
type DashboardProp = {};
const Dashboard: React.FC<DashboardProp> = (props) => {
  const {
    state: { selectedMonth, currency, transactions },
  } = useContext(AppContext);
  const { totalIncome, totalExpenditure } = calculateTotal(
    transactions[selectedMonth] || []
  );
  return (
    <Box minH="250px" bgColor="white" boxShadow="md" rounded="md" p={10}>
      <Heading mb={4}>{selectedMonth}</Heading>
      <HStack>
        <Box width="70%">
          <StatGroup>
            <Stat>
              <StatLabel textTransform="uppercase"> Total Income</StatLabel>
              <StatNumber color="green.500">+ {currency} {totalIncome}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel textTransform="uppercase">Total Expense</StatLabel>
              <StatNumber color="red.500"> - {currency} {totalExpenditure}</StatNumber>
            </Stat>
          </StatGroup>
        </Box>
        <Box>Testing</Box>
      </HStack>
    </Box>
  );
};

export default Dashboard;

function calculateTotal(trxList: Transaction[]) {
  const result = {
    totalIncome: 0,
    totalExpenditure: 0,
  };
  if (trxList.length !== 0) {
    const incomes = trxList.filter(
      (trx) => trx.type === TransactionType.Income
    );
    const expenditures = trxList.filter(
      (trx) => trx.type === TransactionType.Expense
    );
    result.totalIncome = incomes.reduce((acc, trx) => acc + trx.amount, 0);
    result.totalExpenditure = expenditures.reduce(
      (acc, trx) => acc + trx.amount,
      0
    );
  }

  return result;
}
/**
 * function calculateTotal(trxList) {
  const result = {
    totalIncome: 0,
    totalExpenditure: 0,
  };
  if (trxList.length !== 0) {
    const incomes = trxList.filter(
      (trx) => trx.type === TransactionType.INCOME
    );
    const expenditures = trxList.filter(
      (trx) => trx.type === TransactionType.EXPENDITURE
    );
    result.totalIncome = incomes.reduce((acc, trx) => acc + trx.amount, 0);
    result.totalExpenditure = expenditures.reduce(
      (acc, trx) => acc + trx.amount,
      0
    );
  }

  return result;
}
 */
