import React from 'react';
import './CreatorCard.css'; 
import { Link } from 'react-router-dom';


function CreatorCard({ creator }) {
    const {
        id,
        name = "Unknown Creator",
        url = "",
        description = "No description available.",
        imageURL = ""
    } = creator || {};
     // If there's no id, show error
     if (!id) {
        console.error('No ID found for creator:', creator);
    }

  return (
    <div className="creator-card">
        <Link to={`/creator/${id}`} className='card-link'>
            {/* Image Section */}
            {imageURL ? (
                <img
                    src={imageURL}
                    alt={`${name}'s profile`}
                    className="creator-image"
                    onError={(e) => {
                        e.target.style.display = "none";
                    }}
                />
            ) : (
                <div className="placeholder-image">
                    <span>No Image</span>
                </div>
            )}

            {/* Content Section */}
            <div className="card-content">
                <h3 className="creator-name">{name}</h3> 
                <p className="creator-description">{description}</p>
            </div>
        </Link>
        {/* External link - outside the card link */}

        <div className="card-footer">
            {url && (
                <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="creator-link"
                    onClick={(e) => e.stopPropagation()}
                >
                    Visit Channel →
                </a>
            )}
            <Link 
                to={`/creator/${id}/edit`}
                className="edit-link"
                onClick={(e) => e.stopPropagation()}
            >
                Edit
            </Link>
        </div>
      
    </div>
  );
}

export default CreatorCard