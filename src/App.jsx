
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
        workshops: "",
        staff:"",
        referraltraining:"",
        confidence:"",
        practice:"",
        delivered:"",
        training:"",
        materials:"",
        advocacy:"",
        policy:"",
        workshops:"",
        participantconfidence:"",
        fundraising:"",
        campaigns:"",
        materialsproduced:"",
        proposals:"",
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
              <option value="training">Capacity Building & Training (Ottawa Food Bank)</option>
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

                  <label>Professional Dev Sessions/Workshops Delivered</label>
                  <input
                    type="number"
                    name="workshops"
                    value={formData.workshops || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>WAS Staff Hired, Trained & Embedded</label>
                  <input
                    type="number"
                    name="staff"
                    value={formData.staff || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>WAS Staff Trained in Promising Referral Practices</label>
                  <input
                    type="number"
                    name="referraltraining"
                    value={formData.referraltraining || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Staff Reporting Increased Confidence (%)</label>
                  <input
                    type="number"
                    name="confidence"
                    value={formData.confidence || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Food Banks and WAS Staff Community of Practice</label>
                  <input
                    type="number"
                    name="practice"
                    value={formData.practice || ""}
                    onChange={handleChange}
                    required
                  />
                  
                </div>
              )}

              {reportType === "training" && (
                <div className="form-fields-group">
                  <label>Training Sessions Delivered (Comms/Fundraising/Advocacy)</label>
                  <input
                    type="number"
                    name="delivered"
                    value={formData.delivered || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Food Bank Leaders Participating in Training</label>
                  <input
                    type="number"
                    name="training"
                    value={formData.training || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Training Materials or Toolkits Developed</label>
                  <input
                    type="number"
                    name="datasharing"
                    value={formData.datasharing || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Food Banks Participating in Advocacy Events</label>
                  <input
                    type="number"
                    name="advocacy"
                    value={formData.advocacy || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Policymakers or Partners Engaged</label>
                  <input
                    type="number"
                    name="policy"
                    value={formData.policy || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>CEFB Workshops / Cross-Training Offered</label>
                  <input
                    type="number"
                    name="workshops"
                    value={formData.workshops || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Participants Reporting Increased Confidence (%)</label>
                  <input
                    type="number"
                    name="participantconfidence"
                    value={formData.participantconfidence || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Food Banks Developing / Refining Fundraising Plans</label>
                  <input
                    type="number"
                    name="fundraising"
                    value={formData.fundraising || ""}
                    onChange={handleChange}
                    required
                  />
                  
                  <label>Advocacy Campaigns Launched</label>
                  <input
                    type="number"
                    name="campaigns"
                    value={formData.campaigns || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Advocacy Materials Produced (Briefs, Releases)</label>
                  <input
                    type="number"
                    name="materialsproduced"
                    value={formData.materialsproduced || ""}
                    onChange={handleChange}
                    required
                  />

                  <label>Policy or Funding Proposals Submitted</label>
                  <input
                    type="number"
                    name="proposals"
                    value={formData.proposals || ""}
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
