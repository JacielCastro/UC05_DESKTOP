import promptSyng from "prompt-sync"
const prompt = promptSyng()
/* 
let nome = prompt("Informe o seu usuario")
let email = prompt ("informe o seu email")
let Confime_Email = prompt("Confime o seu email")
let senha = prompt ("Informe a sua senha")
let ConfimeSenha = prompt ("Confime a sua senha")

console.log(email,senha,ConfimeSenha);
*/
export class usuario{
    #nome_usuario 
    #email 
    #senha 
    constructor (nome_usuario,email,senha){
        this.#nome_usuario = nome_usuario
        this.#email = email
        this.#senha = senha
        }
        
        set nome_usuario(nomeUsuario){
            this.#nome_usuario = nomeUsuario
        }
        get nome_usuario(){
            return this.#nome_usuario
        
    
    
    }
}