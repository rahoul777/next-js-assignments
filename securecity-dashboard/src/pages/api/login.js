import { signToken } from '@/utils/auth';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    // Dummy users for testing (replace with your database logic)
    const users = [
        {
            id: '1',
            email: 'admin@example.com',
            password: 'admin123',
            role: 'admin'
        },
        {
            id: '2',
            email: 'user@example.com',
            password: 'user123',
            role: 'user'
        }
    ];

    // Find user by email and password
    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (user) {
        const token = await signToken(user);
        if (token) {
            res.setHeader('Set-Cookie', `auth-token=${token}; HttpOnly; Path=/; Max-Age=3600`);
            return res.status(200).json({ message: 'Login successful', role: user.role });
        }
    }

    return res.status(401).json({ message: 'Invalid email or password' });
}
