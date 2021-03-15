import { Injectable } from "@angular/core";
import { Category } from "../shared-models/category.model";
import { Difficulty } from "../shared-models/dificulty.model";

@Injectable({
    providedIn: 'root'
})

export class Collections {
    difficulty: Difficulty[] = [
        new Difficulty('any', 'Any Difficulty'),
        new Difficulty('easy', 'easy'),
        new Difficulty('medium', 'medium'),
        new Difficulty('hard', 'hard'),
    ]

    category: Category[] = [
        new Category(110, 'Any Category'),
        new Category(9, 'General Knowledge'),
        new Category(10, 'Entertainment: Books'),
        new Category(11, 'Entertainment: Film'),
        new Category(12, 'Entertainment: Music'),
        new Category(13, 'Entertainment: Musicals'),
        new Category(14, 'Entertainment: Television'),
        new Category(15, 'Entertainment:  Video Games'),
        new Category(16, 'Entertainment: Board Games'),
        new Category(17, 'Science & Nature'),
        new Category(18, 'Science: Computers'),
        new Category(19, 'Science: Mathematics'),
        new Category(20, 'Mythology'),
        new Category(21, 'Sports'),
        new Category(22, 'Geography'),
        new Category(23, 'History'),
        new Category(24, 'Politics'),
        new Category(25, 'Art'),
        new Category(26, 'Celebrities'),
        new Category(27, 'Animals'),
        new Category(28, 'Vehicles'),
        new Category(29, 'Entertainment: Comics'),
        new Category(30, 'Science: Gadgets'),
        new Category(31, 'Entertainment: Japanese Anime'),
        new Category(32, 'Entertainment: Cartoon')
    ]
}