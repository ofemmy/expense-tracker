import Header from "../components/Header";
import Navbar from "../components/Navbar";
function Income(params) {
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
export default Income;
