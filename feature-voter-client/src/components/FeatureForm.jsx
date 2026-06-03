import { useState } from "react";

export default function FeatureForm({ onFeatureAdded }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim() || !description.trim()) return;

        onFeatureAdded({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="feature-form">
            <h3>Suggest a Feature</h3>
            <input 
                type="text"
                placeholder="Feature Title..."
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea 
                placeholder="Describe your idea..."
                value={description}
                onChange={e => setDescription(e.target.value)} 
            />
            <button type="submit">Submit Idea</button>
        </form>
    );
}