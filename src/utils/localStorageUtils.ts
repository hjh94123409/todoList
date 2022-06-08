import { ITodo } from "@/types/todo";

export function saveTodos(todos:ITodo[]){
    localStorage.setItem('todos_key', JSON.stringify(todos))
}

export function readTodos(){
    return JSON.parse(localStorage.getItem('todos_key') || '[]')
}