import { useState, useEffect } from "react";
import { getPoems } from "../../services/poetry";
import { Poem } from "../../types/poems";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

interface DashboardProps {
  onViewPoem: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewPoem }) => {
  const [poems, setPoems] = useState<Poem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleNext = (id: string) => {
    navigate(`/Detail`);
    onViewPoem(id);
  };

  useEffect(() => {
    const fetchPoems = async () => {
      const data = await getPoems();
      if (data) {
        setPoems(data);
      }
      setLoading(false);
    };

    fetchPoems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        
        {poems?.map((poem) => (
          
          <div key={`${poem.title}-${poem.author}`} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.excerpt}...</p>
            <button className="poem-button" onClick={() => { handleNext(`/Detail`); onViewPoem(poem.id);
            }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
