import useAppStore from "../store/AppStore";
import DataTableSmall from "./DataTableSmall";
import DataTableBig from "./DataTableBig";
import useWindowWidth from "../utils/useWindowWidth";

const DataTable = () => {
  const screenWidthMatched = useWindowWidth("sm") //screen is at least or greater than  sm[640px];
  const transactions = useAppStore((state) => state.transactions);
  const selMonth = useAppStore((state) => state.selectedMonth);
  const currency = useAppStore((state) => state.currency);
  const trxList = transactions[selMonth] || [];
  return (
    <>
      {screenWidthMatched ? (
        <DataTableBig trxList={trxList} currency={currency}/>
      ) : (
        <DataTableSmall trxList={trxList} currency={currency} />
      )}
    </>
  );
};

export default DataTable;

