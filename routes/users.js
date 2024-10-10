import { Router } from "express";
import { testUser } from "../controllers/user.js";

const router = Router();

// Definir rutas de user
router.get('/test-user', testUser);

// Export el Router
export default router;