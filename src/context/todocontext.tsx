import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

export interface Todo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'todo' | 'in progress' | 'done';
  priority: 'low' | 'medium' | 'high';
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'id'>) => Promise<void>;
  updateTodo: (id: string, todo: Partial<Todo>) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  loading: boolean;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (querySnapshot) => {
      const todosArray: Todo[] = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ id: doc.id, ...doc.data() } as Todo);
      });
      setTodos(todosArray);
      setLoading(false);
      console.log("Updated todos:", todosArray);
    }, (error) => {
      console.error("Error in onSnapshot:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addTodo = async (todo: Omit<Todo, 'id'>) => {
    try {
      console.log("Adding todo:", todo);
      const docRef = await addDoc(collection(db, "todos"), todo);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  const updateTodo = async (id: string, updatedFields: Partial<Todo>) => {
    try {
      await updateDoc(doc(db, "todos", id), updatedFields);
      console.log("Document successfully updated");
    } catch (e) {
      console.error("Error updating document: ", e);
      throw e;
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await deleteDoc(doc(db, "todos", id));
      console.log("Document successfully deleted");
    } catch (e) {
      console.error("Error removing document: ", e);
      throw e;
    }
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, loading }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}