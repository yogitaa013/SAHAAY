import { useEffect, useState } from "react";
import API from "../api/api";
import ResourceCard from "../components/ResourceCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import dashboardImage from "../assets/dashboard-banner.jpg"; 

function Dashboard() {
  const [resources, setResources] = useState([]);
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );
  const [category, setCategory] = useState("All");
  const [state, setState] = useState("All");

  useEffect(() => {
    API.get("/resources").then(res => setResources(res.data));
  }, []);

  // Filter resources
  const filteredResources = resources.filter(r =>
    (category === "All" || r.category === category) &&
    (state === "All" || r.state === state)
  );

  const addBookmark = (resource) => {
    if (!bookmarks.find(b => b._id === resource._id)) {
      const updated = [...bookmarks, resource];
      setBookmarks(updated);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">

        {/* Banner */}
        <div className="dashboard-banner">
          <img src={dashboardImage} alt="Sahaay Banner" />
          <div className="banner-text">
            <h1>Welcome to Sahaay 🎉</h1>
            <p>Access legal & healthcare support easily</p>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        {/* Filters */}
        <div className="filters">
          <select onChange={e => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Legal">Legal</option>
            <option value="Healthcare">Healthcare</option>
          </select>

          <select onChange={e => setState(e.target.value)}>
            <option value="All">All States</option>
            <option value="Delhi">Delhi</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
          </select>
        </div>

        {/* Each resource in its own block */}
        <div className="all-resources">
          {filteredResources.length > 0 ? 
            filteredResources.map(r => (
              <div key={r._id} className="resource-block">
                <ResourceCard 
                  resource={r} 
                  onBookmark={() => addBookmark(r)} 
                />
              </div>
            )) : <p>No resources found</p>
          }
        </div>
{bookmarks.length > 0 && (
  <div className="bookmarks-block">
    <h2>⭐ Bookmarked Resources</h2>
    {bookmarks.map(b => (
      <div key={b._id} className="resource-block">
        <ResourceCard resource={b} onBookmark={() => {}} />
        <button
          className="remove-bookmark-btn"
          onClick={() => {
            const updated = bookmarks.filter(item => item._id !== b._id);
            setBookmarks(updated);
            localStorage.setItem("bookmarks", JSON.stringify(updated));
          }}
        >
          Remove
        </button>
      </div>
    ))}
  </div>
)}

      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
