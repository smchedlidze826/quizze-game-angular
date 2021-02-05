import { Difficulty } from "../shared-models/dificulty.model";

export class DifficultyService {
    difficulty: Difficulty[] = [
        new Difficulty('any', 'Any Difficulty'),
        new Difficulty('easy', 'easy'),
        new Difficulty('medium', 'medium'),
        new Difficulty('hard', 'hard'),
    ]
}