// src/pages/ViewCreator.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DeleteButton from '../../components/deletebutton/DeleteButton'
import { supabase } from '../../client';
import './ViewCreator.css';

function ViewCreator() {
  const { id } = useParams(); // to get Creator ID
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch creator details when component mounts
    fetchCreatorDetails();
  }, [id]);

  async function fetchCreatorDetails() {
    try {
      setLoading(true);
      // Fetch creator by ID from Supabase
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single(); // Get single record
      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    try {
      const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);

      if (error) throw error
      // navigate("/")
      // Show success message
      alert(`Successfully deleted "${creator.name}"!`);
      
      // Navigate to home after short delay
      setTimeout(() => {
        navigate("/?view=all");
      }, 500);
      
    } catch (error) {
      console.error("Error deleting creator:", error);
      alert("Failed to delete creator. Please try again.");
      
    }
  }
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading creator...</h2>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="error-state">
        <h2>Creator not found</h2>
        <Link to="/">Back to all creators</Link>
      </div>
    );
  }

  return (
    <div className='view-creator'>
      <Link to="/?view=all" className='back-link'>← Back to all creators</Link>
      <div className='creator-detail'>
        {creator.imageURL && (
          <img
          src={creator.imageURL}
          alt={creator.name}
          className='creator-detail-image'
          />
        )}
        <h1 className='creator-detail-name'>{creator.name}</h1>

        {creator.description && (
          <div className="creator-detail-description">
            <h3>About</h3>
            <p>{creator.description}</p>
          </div>
        )}

          <div className="creator-actions">
            {creator.url && (
              <a 
                href={creator.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="visit-channel-button"
              >
                Visit Channel →
              </a>
            )}

            <Link
              to={`/creator/${id}/edit`}
              className='edit-button'
            >
              Edit Creator
            </Link>

            <DeleteButton 
              creatorName={creator.name}
              onDelete={handleDelete}
            />
          </div>
      </div>

    </div>
  )
}

export default ViewCreator;