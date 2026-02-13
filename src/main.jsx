import React, { Suspense, lazy, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Lazy-loaded components
const Resume = lazy(() => import("./Resume"));
const Sidebar = lazy(() => import("./Sidebar"));
const Content = lazy(() => import("./Content"));
const Header = lazy(() => import("./Header"));

// Form component
function MyForm() {
  const [mytxt, setMytxt] = useState("");

  function handleChange(e) {
    setMytxt(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted: " + mytxt);
  }

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <label>
        Write here:
        <textarea
          className="my-textarea"
          value={mytxt}
          onChange={handleChange}
          placeholder="Type something..."
        />
      </label>
      <div className="form-footer">
        <button type="submit" className="submit-button">
          Submit
        </button>
       
      </div>
    </form>
  );
}

function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div>
     
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

     
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={() => setShowResume(!showResume)}
          
        >
          {showResume ? "Hide Resume" : "Show Resume"}
        </button>

    
      </div>

      
      {showResume && (
        <Suspense fallback={<div>Loading resume...</div>}>
          <Resume />
        </Suspense>
      )}

      
      <Suspense fallback={<div>Loading content...</div>}>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <Sidebar />
          <Content />
        </div>
      </Suspense>
    </div>
  );
}


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
