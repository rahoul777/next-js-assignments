import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || '';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Dummy authentication 
        if (username === 'admin' && password === 'password') {
            // Sign JWT Token
            const token = jwt.sign({ username, role: 'admin' }, SECRET_KEY, { expiresIn: '1h' });

            // Send token as JSON response
            return res.status(200).json({ token });
        } else {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
