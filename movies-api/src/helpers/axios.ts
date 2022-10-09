import axios from 'axios';
import { Types } from 'mongoose';

export const getGenre = async (genreId: Types.ObjectId) => {
    if (genreId) {
        const res = await axios.get(`http://localhost:5001/api/genres/${genreId}`);
        return res.data
    }
    return;
}