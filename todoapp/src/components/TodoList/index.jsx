import React from 'react';
import axios from "../../axios";
import { ListContainer, Row, Text, DeleteIcon } from './styles';

export default function TodoList({ todos, fetchData }) {
    console.log(todos, 'hi');

    const updateTodo = async (id) => {
        try {
            const response = await axios.put(`/todos/${id}`, { completed: true });
            fetchData();
            return response.data;
        } catch (err) {
            console.error("Update Error:", err.response ? err.response.data : err.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await axios.delete(`/todos/${id}`);
            fetchData();
            return response.data;
        } catch (err) {
            console.error("Delete Error:", err.response ? err.response.data : err.message);
        }
    };    
    
    return (
        <div>
            <ListContainer>
                {/* Render all todos in bullet points */}
                {todos?.map((todo) => (
                    <Row key={todo._id}>
                        <Text 
                            onClick={() => updateTodo(todo._id)}
                            isCompleted={todo.completed} // Fixed logic
                        >
                            {todo.text}
                        </Text>
                        <DeleteIcon
                            onClick={() => deleteTodo(todo._id)}
                        >
                            X
                        </DeleteIcon>
                    </Row>
                ))}
            </ListContainer>
        </div>
    );
}
