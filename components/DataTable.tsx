import dynamic from "next/dynamic";
import { Transaction } from "../db/Transaction";
import useAppStore from "../store/AppStore";
import useWindowWidth from "../utils/useWindowWidth";
import { apiResult } from "../types/ApiResult";
const DataTableBig = dynamic(() => import("./DataTableBig"));
const DataTableSmall = dynamic(() => import("./DataTableSmall"));
type DataTablePropTypes = {
  data: apiResult;
  setPage: Function;
  page: number;
};
const DataTable: React.FC<DataTablePropTypes> = ({ data, setPage, page }) => {
  const screenWidthMatched = useWindowWidth("sm"); //screen is at least or greater than  sm[640px];
  //const transactions = useAppStore((state) => state.transactions);
  const selMonth = useAppStore((state) => state.selectedMonth);
  const currency = useAppStore((state) => state.currency);
  //const trxList = transactions[selMonth] || [];
  return (
    <div className="pb-5">
      {screenWidthMatched ? (
        <DataTableBig
          data={data.data}
          currency={currency}
          setPage={setPage}
          page={page}
        />
      ) : (
        <DataTableSmall
          data={data.data}
          currency={currency}
          setPage={setPage}
          page={page}
        />
      )}
    </div>
  );
};

export default DataTable;
