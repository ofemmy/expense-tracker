import { Table, Tbody, Td, Th, Thead, Tr,Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import Transaction from "../models/Transaction";
import TransactionType from "../models/TransactionType";
import useAppStore from "../store/AppStore"
type TransactionListProps = {
  trxList: Transaction[];
};
const TransactionList: React.FC<TransactionListProps> = ({ trxList }) => {
  const currency = useAppStore(state=>state.currency)
  return (
    <Table variant="striped" colorScheme="blue">
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Amount</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tbody>
          {
              trxList.map(trx=>(
                  <Tr key={trx.id}>
                      <Td>
                        <Text>{trx.title}</Text>
                      </Td>
                      <Td><Text
                        color={
                          trx.type==TransactionType.Expense?"red.500":"green.500"
                        }
                        >
                          {trx.type==TransactionType.Expense?"-":"+"} {trx.amount} {currency}
                        </Text></Td>
                      <Td>{trx.date.toUTCString()}</Td>
                  </Tr>
              ))
          }
      </Tbody>
    </Table>
  );
};
export default TransactionList;
/**
 * 
 * {trxList.map((trx) => (
          <Tr key={trx.id}>
            <Td>{trx.title}</Td>
            <Td isNumeric>
              <Text
                color={
                  trx.type === TransactionType.EXPENDITURE
                    ? "red.500"
                    : "green.500"
                }
              >
                {trx.type == TransactionType.EXPENDITURE ? "-" : "+"}
                {trx.amount} {UserSettings.currency.symbol}
              </Text>
            </Td>
            <Td>{new Date(trx.date).toLocaleDateString()}</Td>
          </Tr>
        ))}
 */