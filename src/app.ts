import express, { Request, Response, NextFunction } from "express"
import dotenv from 'dotenv'
import phoneRoutes from './routes/phoneRoutes'

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/phone', phoneRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
export default app;