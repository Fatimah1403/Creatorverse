import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CreatorForm from '../../components/creatorform/CreatorForm';
import { supabase } from '../../client';
import './AddCreator.css';


function AddCreator() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData) {
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('creators')
        .insert([{
          name: formData.name.trim(),
          url: formData.url.trim(),
          description: formData.description.trim(),
          imageURL: formData.imageURL.trim(),
          
        }])
        .select();
      if (error) throw error;

      // Navigate to the new creator's detail page
      if (data && data[0]) {
        navigate(`/creator/${data[0].id}`);
      }

    } catch (error) {
      console.error("Error adding creator:", error);
      alert("Failed to add creator. Please try again.");
      throw error;

    } finally {
      setLoading(false);

    }

  }
  return (
    <div className="add-creator-page">
      <div className='add-creator-container'>
        <Link to="/" className='back-link'>← Back to Creators</Link>

        <h1>Add New Creator</h1>

        <CreatorForm
          onSubmit={handleSubmit}
          submitText="SUBMIT"
          loading={loading}
          initialData={{}}
        />

      </div>

    </div>
  )
}

export default AddCreator;