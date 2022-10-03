import React, { Suspense, lazy } from "react";
import DotLoader from "react-spinners/DotLoader";
import "./App.css";

const spinnerColor = "#fff";
const LazyComponent = lazy(() => import("./components/LazyComponent"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<DotLoader color={spinnerColor} />}>
          <LazyComponent />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
