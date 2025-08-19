import React from 'react';

import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import { supabase } from '../../client';
import CreatorForm from '../../components/creatorform/CreatorForm';
import './EditCreator.css';

function EditCreator() {
  const { id } = useParams(); // to get Creator ID
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    // fetch creator details when component mounts
    fetchCreator();
  }, [id]);

  async function fetchCreator() {
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
      console.error("Error fetching creator", error);
      alert("Error loading creator data");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(formData) {
    setUpdating(true);
    try {
      const { data, error } = await supabase
        .from('creators')
        .update({
          name: formData.name.trim(),
          url: formData.url.trim(),
          description: formData.description.trim(),
          imageURL: formData.imageURL.trim(),
          
        })
        .eq('id', id)
        .select();

      if (error) throw error;

      // Show success alert
      alert(`Successfully updated "${formData.name}"!`);
      
      // Navigate back to creator page
      setTimeout(() => {
        navigate(`/creator/${id}`);
      }, 500);
    } catch (error) {
      console.error("Error updating creator:", error);
      alert(`Failed to update creator: ${error.message || 'Unknown error'}`);
    } finally {
      setUpdating(false);
    }
  }
  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading creator data...</p>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="error-container">
        <p>Creator not found</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="edit-creator-page">
      <div className="edit-creator-container">
        <Link to={`/creator/${id}`} className="back-link">
          ← Back to creator
        </Link>
        
        <h1>Edit Creator</h1>
        
        <CreatorForm
          initialData={creator} // Pass existing data to pre-fill form
          onSubmit={handleUpdate}
          submitText="UPDATE"
          loading={updating}
        />
      </div>
    </div>
  );
}

export default EditCreator;