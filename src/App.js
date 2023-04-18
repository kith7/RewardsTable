import { Suspense, lazy } from "react";
import "./App.css";
const TableClients = lazy(() => import("./components/TableClients"));
function App() {
  return (
    <div className='App'>
      <Suspense fallback={<p>Loading...</p>}>
        <TableClients />
      </Suspense>
    </div>
  );
}

export default App;
