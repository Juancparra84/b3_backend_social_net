import { Router } from "express";
import { register, testUser } from "../controllers/user.js";

const router = Router();

// Definir rutas de user
router.get('/test-user', testUser);
router.post('/register', register)

// Export el Router
export default router;