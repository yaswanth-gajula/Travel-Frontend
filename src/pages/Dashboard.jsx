import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const modules = {
  Destinations: {
    description: "Discover and manage your most popular travel destinations.",
    action: "Add destination",
    items: ["Bali, Indonesia", "Kyoto, Japan", "Amalfi Coast, Italy"],
  },
  Bookings: {
    description: "Review upcoming trips and keep every reservation on track.",
    action: "New booking",
    items: ["BK-1042 · Bali escape · Confirmed", "BK-1041 · Kyoto discovery · Pending", "BK-1038 · Amalfi retreat · Confirmed"],
  },
  Customers: {
    description: "Keep your traveler profiles organized and up to date.",
    action: "Add customer",
    items: ["Aarav Sharma · 4 bookings", "Mia Wilson · 2 bookings", "Noah Garcia · 3 bookings"],
  },
  Payments: {
    description: "Monitor payments, invoices, and outstanding balances.",
    action: "Create invoice",
    items: ["INV-2048 · ₹84,500 · Paid", "INV-2047 · ₹52,300 · Pending", "INV-2046 · ₹1,12,000 · Paid"],
  },
  Reports: {
    description: "Track performance trends across your travel business.",
    action: "Export report",
    items: ["Monthly revenue · +18.4%", "Booking conversion · 76%", "Customer retention · 84%"],
  },
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [activeModule, setActiveModule] = useState("Destinations");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const uname = localStorage.getItem("username");
    if (!token) navigate("/");
    else setUsername(uname);
  }, []);

  return (
    <div className="dashboard-grid">
      <header className="header">✈️ Welcome to TravelEase Dashboard</header>
      <aside className="sidebar">
        <h3>Menu</h3>
        <ul>
          {Object.keys(modules).map((module) => (
            <li key={module}>
              <button
                className={activeModule === module ? "active" : ""}
                onClick={() => setActiveModule(module)}
                type="button"
              >
                {module}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="content">
        <h2>Hello, {username}</h2>
        <p>Manage tours, bookings, and payments in one place.</p>
        <div className="cards">
          <div className="card">🌍 Available Tours : 12</div>
          <div className="card">🧳 Active Bookings : 34</div>
          <div className="card">👥 Customers : 250</div>
          <div className="card">💰 Revenue : ₹7.4 L</div>
        </div>
        <section className="module-panel">
          <div className="module-heading">
            <div>
              <span className="eyebrow">Workspace</span>
              <h3>{activeModule}</h3>
              <p>{modules[activeModule].description}</p>
            </div>
            <button className="module-action" type="button">
              + {modules[activeModule].action}
            </button>
          </div>
          <div className="module-list">
            {modules[activeModule].items.map((item) => (
              <div className="module-item" key={item}>
                <span className="module-dot" />
                <span>{item}</span>
                <span className="module-arrow">→</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
