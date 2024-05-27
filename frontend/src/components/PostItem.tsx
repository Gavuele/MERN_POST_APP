import React from 'react';
import { Button } from "@/entities/ui/button";

interface Author {
    username: string;
}

interface Post {
    _id: string;
    title: string;
    body: string;
    author: Author;
    createdAt: string;
}

interface PostItemProps {
    post: Post;
    currentUser: { name: string } | null;
    onDelete: (postId: string) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, currentUser, onDelete }) => {
    const { _id, title, body, author, createdAt } = post;

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const response = await fetch(`http://localhost:5001/api/posts/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                onDelete(_id);
            } else {
                console.error('Ошибка удаления поста:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка выполнения запроса:', error);
        }
    };

    const canDeletePost = currentUser && currentUser.name === author.username;

    return (
        <div className="flex flex-row justify-around items-center my-5">
            <div className='flex flex-col items-center justify-center'>
                <p><strong>Заголовок поста:</strong> {title}</p>
                <p><strong>Текст поста:</strong> {body}</p>
                <p><strong>Автор поста:</strong> {author.username}</p>
                <p><strong>Дата публикации:</strong> {new Date(createdAt).toLocaleString()}</p>
            </div>
            <div>
                {canDeletePost && (
                    <Button variant='started' onClick={handleDelete}>Удалить пост</Button>
                )}
            </div>
        </div>
    );
}

export default PostItem;
