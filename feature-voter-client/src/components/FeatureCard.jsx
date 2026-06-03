export default function FeatureCard({ feature, onUpVote }) {
    return (
        <div className="feature-card">
            <div className="vote-section">
                <button onClick={() => onUpVote(feature.id)} className="vote-btn">
                    ▲ {feature.upvotes}
                </button>
            </div>
            <div className="content-section">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <span className="date-tag">
                    {new Date(feature.createAt).toLocaleDateString()}
                </span>
            </div>
        </div>
    );
}