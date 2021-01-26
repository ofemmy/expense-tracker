import Header from "../components/Header";
import Navbar from "../components/Navbar";
export default function Expense(params) {
  return (
    <div>
      <Navbar />
      <main
        className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        tabIndex={0}
      >
        <Header />
      </main>
    </div>
  );
}
