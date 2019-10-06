import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
      // conceito (react) 'estado' é qualquer info armazenado em um componente
    const [email, setEmail] = useState('');

    async function handleSubmit(e) {
        e.preventDefault(); // previne o funcionamento padrão do formulário (enviar o usuário para outra tela)
        
        const response = await api.post('/sessions', {
        email
        });

        const { _id } = response.data;

        localStorage.setItem('user', _id) // Banco de dados do navegador

        history.push('/dashboard');
    }

    return (
      <>
        <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
            type='email' 
            id='email' 
            placeholder='Seu melhor e-mail' 
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <button type='submit'>Entrar</button>
        </form>
      </>
    );
}

// <> é uma fragment (como se fossr uma div só que não aparece no browser)  
// pq o react não permite vários 'blocos' de tag.

// o history é utilizado para fazer navegação