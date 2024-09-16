import mongoose from "mongoose";

interface IPost{
    titolo: string,
    sottotitolo?: string,
    descrizione?: string,
    autore:string,
    dataCreazione: Date
}

const postSchema = new mongoose.Schema<IPost>({
    titolo: {type: String, required: true},
    sottotitolo: String,
    descrizione: String,
    autore: {type: String, required: true},
    dataCreazione: { type: Date, default: Date.now()}
});

export const Post = mongoose.model<IPost>("Post", postSchema, "Posts");



