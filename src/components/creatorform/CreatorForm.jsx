import './CreatorForm.css';
import React, { useState } from 'react';


function CreatorForm({ initialData = {}, onSubmit, submitText = "Submit", loading = false }) {
    const [formData, setFormData] = useState({
        name: initialData.name || '',
        url: initialData.url || '',
        description: initialData.description || '',
        imageURL: initialData.imageURL || '',
        youtube: initialData.youtube || '',      // Make sure these are initialized
        twitter: initialData.twitter || '',      
        instagram: initialData.instagram || ''   
        
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();

        // Basic Validation
        if (!formData.name.trim()) {
            alert("Please enter a creator name");
            return;
        }

        // Call the parent's submit function
        onSubmit(formData)
           
    }
    return (
        <form onSubmit={handleSubmit} className='creator-form'>
            <div className='form-group'>
                <label htmlFor="name">
                    Name <span className='required'>*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Creator's name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="imageURL">
                Image
                <span className="helper-text">Provide a link to an image of your creator. Be sure to include the http://</span>
                </label>
                <input
                type="url"
                id="imageURL"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
                placeholder="https://example.com/creator-image.jpg"
                />
            </div>
            <div className='form-group'>
                <label htmlFor="description">
                    Description
                    <span className='helper-text'>Provide a description of the creator. Who are they? What makes them interesting?</span>
                </label>
                <textarea 
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about this creator..."
                    rows={4}
                />

            </div>
            <div className="form-section">
                <h3>SOCIAL MEDIA LINKS</h3>
                <p className="section-helper">Provide at least one of the creator's social media links.</p>
                
                <div className="form-group">
                    <label htmlFor="youtube">
                        <span className="social-icon">📺</span> YouTube
                        <span className="helper-text">The creator's YouTube handle (without the @)</span>
                    </label>
                    <input
                        type="text"
                        id="youtube"
                        name="youtube"
                        value={formData.youtube}
                        onChange={handleChange}
                        placeholder="channelname"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="twitter">
                        <span className="social-icon">🐦</span> Twitter
                        <span className="helper-text">The creator's Twitter handle (without the @)</span>
                    </label>
                    <input
                        type="text"
                        id="twitter"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                        placeholder="twitterhandle"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="instagram">
                        <span className="social-icon">📷</span> Instagram
                        <span className="helper-text">The creator's Instagram handle (without the @)</span>
                    </label>
                    <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="instagramhandle"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="url">
                        <span className="social-icon">🔗</span> Other URL
                        <span className="helper-text">Any other website or social media link</span>
                    </label>
                    <input
                        type="url"
                        id="url"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        placeholder="https://example.com"
                    />
                </div>
            </div>

            <button 
                type="submit" 
                className="submit-button"
                disabled={loading}
            >
                {loading ? "Saving..." : submitText}
            </button>
            

        </form>
    )

}
export default CreatorForm;