export interface INewBook {
    _id: number
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    bookPicture?: string[];
    comments: Comment[];
}