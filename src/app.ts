import { config } from "dotenv";
config();

import * as orm from "./db-orm";
import { Command } from "commander";

const program = new Command();

program
    .name('CRUD-Cli')
    .description('comandi per eseguire le operazioni CRUD')
    .version('1.0.0')


program
    .command('insertPost')
    .description('comandi per inserire un post nel database')
    .requiredOption('-t --titolo <titolo>', 'Titolo del Post')
    .requiredOption('-st --sottotitolo <sottotitolo>', 'Sottotitolo Post')
    .requiredOption('-d --descrizione <descrizione>', 'descrizione Post')
    .requiredOption('-a --autore <autore>', 'autore Post' )
    .action(async (opzioni )=>{

        const {titolo, sottotitolo, descrizione, autore} = opzioni

        try{
            await orm.insertPost(titolo, sottotitolo, descrizione, autore);
            console.log('aggiunto con successo  =) ')
        }catch(error){
            console.log('qualcosa è andato storto =( ')
        }
})

program
    .command('getPosts')
    .description('comandi per ottenere la lista Post')
    .action(async ()=>{

        try{
            console.log(await orm.getPosts())
        }catch(error){
            console.log('qualcosa è andato storto =( ')
        }
})

program
    .command('deletePost')
    .description('comandi eliminare un post dal database')
    .requiredOption('-id --idpost <idpost>', 'id del Post')
    .action(async (opzioni)=>{

        const {idpost} = opzioni        
        try{   
            console.log(await orm.deletePost(idpost), '=)')
        }catch(error){
            console.log('qualcosa è andato storto =( ')
        }
})

program
    .command('upPost')
    .description('comandi per modificare un post nel database')
    .requiredOption('-t --titolo <titolo>', 'Titolo del Post')
    .requiredOption('-st --sottotitolo <sottotitolo>', 'Sottotitolo Post')
    .requiredOption('-d --descrizione <descrizione>', 'descrizione Post')
    .requiredOption('-a --autore <autore>', 'autore Post' )
    .requiredOption('-id --idpost <idpost>', 'id Post' )
    .action(async (opzioni )=>{

        const {idpost, titolo, sottotitolo, descrizione, autore} = opzioni

        try{
            await orm.updatePost(idpost, titolo, sottotitolo, descrizione, autore);
            console.log('modificato con successo  =) ')
        }catch(error){
            console.log('qualcosa è andato storto =( ')
        }
})

  program.parse(process.argv)




