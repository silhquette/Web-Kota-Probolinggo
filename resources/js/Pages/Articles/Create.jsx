//import hook useState from react
import React, { useState } from 'react';

//import layout
import GuestLayout from '../../Layouts/GuestLayout';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function ArticleCreate({ errors }) {

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
        <GuestLayout>
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
        </GuestLayout>
    )
}