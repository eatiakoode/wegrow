import { useState } from "react";
import PropertyTable from './PropertyTable';
propertylisttrends
// Dummy components for demo


const TabDetailsContent = () => {
  const [mainTab, setMainTab] = useState("residential");
  const [residentialTab, setResidentialTab] = useState("high");
  const [commercialTab, setCommercialTab] = useState("retail");

  return (
    <div>
      {/* Main Tabs */}
     <div className="text-center">
       <ul className="nav nav-pills mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${mainTab === "residential" ? "active" : ""}`}
            onClick={() => setMainTab("residential")}
          >
            Residential
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${mainTab === "commercial" ? "active" : ""}`}
            onClick={() => setMainTab("commercial")}
          >
            Commercial
          </button>
        </li>
      </ul>
     </div>

      {/* Sub Tabs */}
      {mainTab === "residential" && (
        <>
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button className={`nav-link ${residentialTab === "high" ? "active" : ""}`} onClick={() => setResidentialTab("high")}>
                High-Rise
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${residentialTab === "low" ? "active" : ""}`} onClick={() => setResidentialTab("low")}>
                Low-Rise
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${residentialTab === "plots" ? "active" : ""}`} onClick={() => setResidentialTab("plots")}>
                Plots
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${residentialTab === "villas" ? "active" : ""}`} onClick={() => setResidentialTab("villas")}>
                Villas
              </button>
            </li>
          </ul>
          <ResidentialTabContent activeTab={residentialTab} />
        </>
      )}

      {mainTab === "commercial" && (
        <>
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button className={`nav-link ${commercialTab === "retail" ? "active" : ""}`} onClick={() => setCommercialTab("retail")}>
                Retail Shops
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${commercialTab === "office" ? "active" : ""}`} onClick={() => setCommercialTab("office")}>
                Office Space
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${commercialTab === "studio" ? "active" : ""}`} onClick={() => setCommercialTab("studio")}>
                Studios
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${commercialTab === "sco" ? "active" : ""}`} onClick={() => setCommercialTab("sco")}>
                SCO Plots
              </button>
            </li>
          </ul>
          <CommercialTabContent activeTab={commercialTab} />
        </>
      )}
    </div>
  );
};
const CommercialTabContent = ({ activeTab }) => {
  return (
    <div className="tab-pane-content">
      {activeTab === "retail" && <p>Retail Shops Content</p>}
      {activeTab === "office" && <p>Office Space Content</p>}
      {activeTab === "studio" && <p>Studios Content</p>}
      {activeTab === "sco" && <p>SCO Plots Content</p>}
    </div>
  );
};

const ResidentialTabContent = ({ activeTab }) => {
  return (
    <div className="tab-pane-content">
      {activeTab === "high" && <PropertyTable />}
      {activeTab === "low" && <p>Low-Rise Content</p>}
      {activeTab === "plots" && <p>Plots Content</p>}
      {activeTab === "villas" && <p>Villas Content</p>}
    </div>
  );
};

export default TabDetailsContent;
