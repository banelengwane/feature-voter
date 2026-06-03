import { useEffect, useState } from "react";
import { api } from "./services/api";
import FeatureCard from "./components/FeatureCard";
import FeatureForm from "./components/FeatureForm";
import './App.css'

function App() {
  const [features, setFeatures] = useState([]);
  const [error, setError] = useState(null);

   const loadFeatures = () => {
    api.getAll()
      .then(setFeatures)
      .catch(err => setError(err.message));
  };

  useEffect(() => {
    loadFeatures();
  }, []);

  const handleCreateFeature = (newFeature) => {
    api.create(newFeature)
      .then(() => loadFeatures())
      .catch(() => setError('Could not save feature.'));
  };

  const handleUpVote = (id) => {
    api.upvote(id)
      .then(() => loadFeatures())
      .catch(() => setError('Could not register upvote.'));
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Product Feature Request Board</h1>
      </header>

      {error && <div className="error-banner">{error}</div>}

      <div className="main-layout">
        <aside>
          <FeatureForm onFeatureAdded={handleCreateFeature} />
        </aside>
        <main>
          <h3>Community Ideas ({features.length})</h3>
          <div className="features-list">
            {features.map(feature => (
              <FeatureCard 
                key={feature.id}
                feature={feature}
                onUpVote={handleUpVote}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;