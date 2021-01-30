import dynamic from "next/dynamic"
import useAppStore from "../store/AppStore";
import useWindowWidth from "../utils/useWindowWidth";

const DataTableBig = dynamic(()=>import("./DataTableBig"));
const DataTableSmall = dynamic(()=>import("./DataTableSmall"));

const DataTable = () => {
  const screenWidthMatched = useWindowWidth("sm") //screen is at least or greater than  sm[640px];
  const transactions = useAppStore((state) => state.transactions);
  const selMonth = useAppStore((state) => state.selectedMonth);
  const currency = useAppStore((state) => state.currency);
  const trxList = transactions[selMonth] || [];
  return (
    <div className="pb-5">
      {screenWidthMatched ? (
        <DataTableBig trxList={trxList} currency={currency}/>
      ) : (
        <DataTableSmall trxList={trxList} currency={currency} />
      )}
    </div>
  );
};

export default DataTable;

