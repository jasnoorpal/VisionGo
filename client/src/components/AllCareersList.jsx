import React, { useState, useEffect } from "react";
import API from "../services/api.js";
import CareerBrief from "./ui/CareerBrief.jsx";
import { useNavigate } from "react-router-dom";

const AllCareersList = ({ only }) => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await API.get("/careers");
        setCareers(res.data.data);
      } catch (err) {
        console.error("Error fetching careers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const navigate = useNavigate();
  const displayedCareers = only ? careers.slice(0, only) : careers;

  if (loading) {
    return <div className="text-center py-8">Loading careers...</div>;
  }

  if (displayedCareers.length === 0) {
    return <div className="text-center py-8">No careers available.</div>;
  }

  return (
    <>
      {displayedCareers.map((career) => (
        <CareerBrief
          key={career._id}
          thumbnail={career.thumbnail}
          heading={career.title}
          description={career.description}
          onClick={() => navigate(`/careers/${career._id}`)}
        />
      ))}
    </>
  );
};

export default AllCareersList;
