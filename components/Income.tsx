import Header from "./Header";
import Navbar from "./Navbar";
function Income(params) {
  return (
    <div>
      <Navbar />
      <main
        className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        tabIndex={0}
      >
        <Header />
        INCOME COMPONENT
      </main>
    </div>
  );
}
export default Income;
