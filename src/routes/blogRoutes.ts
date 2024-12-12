// backend/src/routes/blogRoutes.ts
import express from 'express';
import { createBlog, getBlogs, getBlogById } from '../controllers/blogController';
import { protect, adminOnly } from '../middleware/auth';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.post('/', protect, adminOnly, createBlog);

export default router;