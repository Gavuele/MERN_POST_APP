import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Button } from "@/entities/ui/button";

interface NewPost {
    title: string;
    body: string;
}

interface PostFormProps {
    onAddPost: (post: NewPost) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onAddPost }) => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const newPost: NewPost = {
            title,
            body: content,
        };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const response = await fetch('http://localhost:5001/api/posts/createpost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newPost)
            });

            if (response.ok) {
                const postData = await response.json();
                onAddPost(postData);
                setTitle('');
                setContent('');
            } else {
                console.error('Ошибка при создании поста:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    return (
        <div>
            <h1 className='text-4xl my-5'>Post Form</h1>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input
                    type='text'
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    placeholder='Заголовок поста'
                    className='border border-solid border-black rounded p-2'
                />
                <textarea
                    value={content}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                    placeholder='Текст поста'
                    className='border border-solid border-black rounded p-2 mt-2'
                />
                <Button type='submit' variant='started' className='mt-2'>Добавить пост</Button>
            </form>
        </div>
    );
}

export default PostForm;
