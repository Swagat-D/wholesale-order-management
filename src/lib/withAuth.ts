import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export function withAuth(handler: NextApiHandler, requiredRole?: 'admin' | 'user') {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as {
        id: string;
        email: string;
        role: 'admin' | 'user';
      };

      if (requiredRole && decoded.role !== requiredRole) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}