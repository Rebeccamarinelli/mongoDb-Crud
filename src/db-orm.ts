import mongoose from "mongoose";
import {Post} from "./post";


export const insertPost = async (titolo: string, sottotitolo: string, descrizione: string, autore: string) => {

    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, { dbName: "amazon",});
    
        let post = new Post();
        post.titolo = titolo;
        post.sottotitolo = sottotitolo;
        post.descrizione = descrizione;
        post.autore = autore;
    
        return await post.save();
    
    } catch (error) {
        console.log(error)
    }finally {
        await mongoose.disconnect()
    }
    
}

export const getPosts = async () => {

    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, { dbName: "amazon"});
    
      
        return await Post.find();
    
    } catch (error) {
        console.log(error)
    }finally {
        await mongoose.disconnect()
    }
    
}

export const deletePost = async (id:string) => {

    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, { dbName: "amazon"});
    
        
        return await Post.findByIdAndDelete(id);
    
    } catch (error) {
        console.log(error)
    }finally {
        await mongoose.disconnect()
    }
    
}

export const updatePost = async (id:string, titolo:string, sottotitolo:string, descrizione:string, autore:string) => {

    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, { dbName: "amazon"});
        
        let post = await Post.findById(id)

        if(!post){
            throw new Error("Post non trovato")
        }
        post.titolo = titolo;
        post.sottotitolo = sottotitolo;
        post.descrizione = descrizione;
        post.autore = autore;
       
     return await post.save()
    
    } catch (error) {
        console.log(error)
    }finally {
        await mongoose.disconnect()
    }
    
}          

      
    