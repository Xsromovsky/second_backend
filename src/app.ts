import express, { Request, Response, NextFunction } from "express"
import dotenv from 'dotenv'

import productRoutes from './routes/productRoutes'

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
export default app;