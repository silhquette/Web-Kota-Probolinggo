//import hook useState from react
import React, { useState } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function ArticleCreate({ errors, auth }) {

    //define state
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [body, setBody] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [user_id, setUser_id] = useState('');

    //function "storePost"
    const storeArticle = async (e) => {
        e.preventDefault();

        Inertia.post('/article', {
            title: title,
            slug: slug,
            excerpt: excerpt,
            body: body,
            category_id: category_id,
            user_id: user_id,
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800  leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={storeArticle}>
                            <label htmlFor="title">title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id='title' />
                            <br />
                            <label htmlFor="slug">slug</label>
                            <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} id='slug' />
                            <br />
                            <label htmlFor="excerpt">excerpt</label>
                            <input type="text" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} id='excerpt' />
                            <br />
                            <label htmlFor="body">body</label>
                            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} id='body' />
                            <br />
                            <label htmlFor="category_id">category_id</label>
                            <input type="text" value={category_id} onChange={(e) => setCategory_id(e.target.value)} id='category_id' />
                            <br />
                            <label htmlFor="user_id">user_id</label>
                            <input type="text" value={user_id} onChange={(e) => setUser_id(e.target.value)} id='user_id' />

                            <div>
                                <button type="submit" className="btn btn-md btn-success me-2">SAVE</button>
                                <button type="reset" className="btn btn-md btn-warning">RESET</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}