import React, { useState, useEffect } from 'react';
import PostForm from "@/components/PostForm";
import PostItem from "@/components/PostItem";

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

interface User {
    name: string;
}

interface NewPost {
    title: string;
    body: string;
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await fetch('http://localhost:5001/api/posts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data: Post[] = await response.json();
                    setPosts(data);
                } else {
                    console.error('Ошибка при загрузке постов:', response.statusText);
                }
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
            }
        };

        const fetchCurrentUser = () => {
            const user = localStorage.getItem('user');
            if (user) {
                setCurrentUser(JSON.parse(user) as User);
            }
        };

        fetchPosts();
        fetchCurrentUser();
    }, []);

    const handleAddPost = (newPost: NewPost) => {
        // Обновите посты с добавлением данных о новом посте
        if (currentUser) {
            const post: Post = {
                _id: (Math.random() * 1000).toString(), // Генерация временного ID, измените на реальный ID из вашего бекенда
                title: newPost.title,
                body: newPost.body,
                author: { username: currentUser.name },
                createdAt: new Date().toISOString(),
            };
            setPosts([post, ...posts]);
        }
    };

    const handleDeletePost = (postId: string) => {
        setPosts(posts.filter(post => post._id !== postId));
    };

    return (
        <div className='h-screen flex flex-col items-center justify-center p-4'>
            <div className='w-full max-w-lg'>
                <PostForm onAddPost={handleAddPost} />
            </div>
            <div className='w-full max-w-lg mt-4 h-3/4 overflow-y-scroll scrollbar-hide'>
                {posts.map((post) => (
                    <PostItem key={post._id} post={post} currentUser={currentUser} onDelete={handleDeletePost} />
                ))}
            </div>
        </div>
    );
}

export default Posts;
