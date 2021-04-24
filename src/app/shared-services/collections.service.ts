import { Injectable } from "@angular/core";
import { Collection } from "../main-page/collections.model"


@Injectable({
    providedIn: 'root'
})

export class Collections {
    difficulty: Collection[] = [
        new Collection('any', 'Any'),
        new Collection('easy', 'easy'),
        new Collection('medium', 'medium'),
        new Collection('hard', 'hard'),
    ]

    category: Collection[] = [
        new Collection('any', 'Any'),
        new Collection('9', 'General Knowledge'),
        new Collection('10', 'Entertainment: Books'),
        new Collection('11', 'Entertainment: Film'),
        new Collection('12', 'Entertainment: Music'),
        new Collection('13', 'Entertainment: Musicals'),
        new Collection('14', 'Entertainment: Television'),
        new Collection('15', 'Entertainment:  Video Games'),
        new Collection('16', 'Entertainment: Board Games'),
        new Collection('17', 'Science & Nature'),
        new Collection('18', 'Science: Computers'),
        new Collection('19', 'Science: Mathematics'),
        new Collection('20', 'Mythology'),
        new Collection('21', 'Sports'),
        new Collection('22', 'Geography'),
        new Collection('23', 'History'),
        new Collection('24', 'Politics'),
        new Collection('25', 'Art'),
        new Collection('26', 'Celebrities'),
        new Collection('27', 'Animals'),
        new Collection('28', 'Vehicles'),
        new Collection('29', 'Entertainment: Comics'),
        new Collection('30', 'Science: Gadgets'),
        new Collection('31', 'Entertainment: Japanese Anime'),
        new Collection('32', 'Entertainment: Cartoon')
    ]
}
