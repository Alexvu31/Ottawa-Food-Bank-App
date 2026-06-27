
import { useState } from "react";
import "./App.css";
import brandLogo from "./assets/OttawaFoodBankLogo.png";

function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [reportType, setReportType] = useState("client");

  const [formData, setFormData] = useState({
    interactions: "",
    applications: "",
    followups: "",
    referrals: "",
    personalizedplans: "",
    clientprogress: "",
    engaged: "",
    datasharing: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reportType,
          ...formData,
        }),
      });

      const result = await response.text();
      alert(result);

      setFormData({
        interactions: "",
        applications: "",
        followups: "",
        referrals: "",
        personalizedplans: "",
        clientprogress: "",
        engaged: "",
        datasharing: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit report.");
    }
  };

  return (
    <div className="App">
      <nav className="navbar-fixed">
        <div className="navbar-logo-container" onClick={() => setCurrentTab("home")} style={{cursor: "pointer"}}>
          <img src={brandLogo} alt="Ottawa Food Bank Logo" className="navbar-logo-img" />
          <div className="navbar-logo">Ottawa Food Bank</div>
        </div>
        <ul className="nav-links-row">
          <li>
            <button 
              type="button" 
              className={currentTab === "home" ? "active-tab" : ""} 
              onClick={() => setCurrentTab("home")}
            >Home</button>
          </li>
          <li>
            <button 
              type="button" 
              className={currentTab === "submit-forms" ? "active-tab" : ""} 
              onClick={() => setCurrentTab("submit-forms")}
            >Submit Forms</button>
          </li>
          <li>
            <button 
              type="button" 
              className={currentTab === "success-stories" ? "active-tab" : ""} 
              onClick={() => setCurrentTab("success-stories")}
            >Success Stories</button>
          </li>
          <li>
            <button 
              type="button" 
              className={currentTab === "audit-logs" ? "active-tab" : ""} 
              onClick={() => setCurrentTab("audit-logs")}
            >Audit Logs</button>
          </li>
        </ul>
      </nav>

      {/* RENDER SECTIONS DIRECTLY */}
      <main className="content-area">
        {currentTab === "home" && (
          <div className="card">
            <h1>Welcome to the Application</h1>
            <p>Select "Submit Forms" from the menu bar to fill out the report panels.</p>
          </div>
        )}

        {currentTab === "submit-forms" && (
          <div className="form-container">
            <h2>Ottawa Food Bank Form Submission</h2>

            <label className="field-label">Select Report Type</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="form-select"
            >
              <option value="client">Client Engagement and Assessment</option>
              <option value="staffing">Engagement, Staffing, & Training</option>
            </select>

            <form onSubmit={handleSubmit} className="report-form">
              {reportType === "client" && (
                <div className="form-fields-group">
                  <label>Clients Engaged through 1-on-1 Interactions</label>
                  <input
                    type="number"
                    name="interactions"
                    value={formData.interactions || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Clients Assisted with Forms and Applications</label>
                  <input
                    type="number"
                    name="applications"
                    value={formData.applications || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Follow-up Sessions Held With Clients</label>
                  <input
                    type="number"
                    name="followups"
                    value={formData.followups || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Referrals Made to Community Partners</label>
                  <input
                    type="number"
                    name="referrals"
                    value={formData.referrals || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Personalized Support Plans Developed</label>
                  <input
                    type="number"
                    name="personalizedplans"
                    value={formData.personalizedplans || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Clients Reporting Progress on Support Plans</label>
                  <input
                    type="number"
                    name="clientprogress"
                    value={formData.clientprogress || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              {reportType === "staffing" && (
                <div className="form-fields-group">
                  <label>Food Banks Engaged</label>
                  <input
                    type="number"
                    name="engaged"
                    value={formData.engaged || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Food Banks Participating in Data-Sharing</label>
                  <input
                    type="number"
                    name="datasharing"
                    value={formData.datasharing || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <button type="submit" className="submit-btn">
                Submit Report
              </button>
            </form>
          </div>
        )}

        {currentTab === "success-stories" && (
          <div className="card">
            <h2>Success Stories</h2>
            <p>Content panel coming soon.</p>
          </div>
        )}

        {currentTab === "audit-logs" && (
          <div className="card">
            <h2>Audit Logs And Summaries</h2>
            <p>Content panel coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
