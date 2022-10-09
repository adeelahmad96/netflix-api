import { logger } from './helpers/logger';
import app from './index';
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT

logger.info(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, () => {
    logger.info(`Example app listening at port http://localhost:${port}`)
}) 
