const BASE_URL = 'http://localhost:5281/api/features';

export const api = {
    async getAll() {
        const res = await fetch(BASE_URL);
        if(!res.ok) throw new Error('Failed to fetch features');
        return res.json();
    },

    async create(feature) {
        const res = fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(feature),
        });
        if(!res.ok) throw new Error('Failed to create feature');
        return res.json();
    },

    async upvote(id) {
        const res = await fetch(`${BASE_URL}/${id}/upvote`, { method: 'POST' });
        if (!res.ok) throw new Error('Failed to record upvote');
    }
};