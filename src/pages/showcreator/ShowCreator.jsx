import './ShowCreator.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreatorCard from '../../components/creatorcard/CreatorCard';
import CreatorForm from '../../components/creatorform/CreatorForm';
import { supabase } from '../../client';

function ShowCreator() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showHero, setShowHero] = useState(true); // Change to true to show hero first
  const [showAddForm, setShowAddForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showCreatorsList, setShowCreatorsList] = useState(false);


  useEffect(() => {
    fetchCreators();

    // Check if we should show creators list directly
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('view') === 'all') {
      setShowHero(false);
      setShowCreatorsList(true);
    }
  }, []);

  async function fetchCreators() {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .order('id', { ascending: false });

      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddCreator(formData) {
    setSubmitting(true);
    
    try {
      const dataToInsert = {
        name: formData.name.trim()
      };
      
      if (formData.url?.trim()) dataToInsert.url = formData.url.trim();
      if (formData.description?.trim()) dataToInsert.description = formData.description.trim();
      if (formData.imageURL?.trim()) dataToInsert.imageURL = formData.imageURL.trim();

      const { data, error } = await supabase
        .from('creators')
        .insert([dataToInsert])
        .select();

      if (error) throw error;

      await fetchCreators();
      setShowAddForm(false);
      alert('Creator added successfully!');
      
    } catch (error) {
      console.error('Error adding creator:', error);
      alert('Failed to add creator. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  // Show hero section first
  if (showHero) {
    return (
      <div className="hero-container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">CREATORVERSE</h1>
            <div className="hero-buttons">
              <button 
                onClick={() => setShowHero(false)} 
                className="hero-button hero-button-primary"
              >
                VIEW ALL CREATORS
              </button>
              <Link 
                to="/new" 
                className="hero-button hero-button-secondary"
              >
                ADD A CREATOR
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show loading
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading creators...</h2>
      </div>
    );
  }

  // Show creators list
  return (
    <div className="show-creators">
      <div className="creators-header">
      <button 
        onClick={() => {
          setShowHero(true);
          setShowCreatorsList(false);
        }} 
        className="back-to-home-btn"
      >
        ← Home
      </button>
        <h2>All Creators</h2>
        <Link to="/new" className="add-creator-button">
          + Add New Creator
        </Link>
      </div>

      {creators.length === 0 ? (
        <div className="empty-state">
          <p>No creators yet! 😢</p>
          <p>Be the first to add a creator.</p>
          <Link to="/new" className="add-creator-link">
            Add Creator
          </Link>
        </div>
      ) : (
        <div className="creators-grid">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowCreator;