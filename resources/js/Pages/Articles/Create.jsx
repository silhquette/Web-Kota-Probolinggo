import React, { useState } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

// import inertia adapter
import { Inertia } from '@inertiajs/inertia';

// import quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// import input field components
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

export default function ArticleCreate({ errors, auth, categories }) {

    // define state
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [body, setBody] = useState('');
    const [category_id, setCategory_id] = useState('');
    const user_id = auth.user.id;
    const [image, setImage] = useState(null); // State untuk menyimpan file gambar

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Menyimpan file gambar ke state
    };

    // Konfigurasi modul Quill
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            matchVisual: false,
        }
    };

    // Tambahkan semua format yang didukung Quill
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    // function "storeArticle"
    const storeArticle = (e) => {
        e.preventDefault();

        // Menggunakan FormData untuk mengirim data termasuk gambar
        const formData = new FormData();
        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('excerpt', excerpt);
        formData.append('body', body);
        formData.append('category_id', category_id);
        formData.append('user_id', user_id);
        if (image) {
            formData.append('thumbnail', image); // Menambahkan gambar ke FormData
        }

        Inertia.post('/article', formData);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <form onSubmit={storeArticle} className='grid grid-cols-2 gap-8' enctype="multipart/form-data">
                            <div>
                                <InputLabel htmlFor="title" value="Judul Berita" />
                                <TextInput
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={title}
                                    className="mt-1 block w-full"
                                    autoComplete="title"
                                    isFocused={true}
                                    onChange={(e) => {
                                        const newTitle = e.target.value;
                                        setTitle(newTitle);
                                        setSlug(newTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, ''));
                                    }}
                                />
                                <InputError message={errors.title} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="slug" value="Slug" />
                                <TextInput
                                    id="slug"
                                    type="text"
                                    name="slug"
                                    value={slug}
                                    className="mt-1 block w-full"
                                    autoComplete="slug"
                                    readOnly={true}
                                />
                                <InputError message={errors.slug} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="excerpt" value="Ringkasan Singkat Berita" />
                                <TextInput
                                    id="excerpt"
                                    type="text"
                                    name="excerpt"
                                    value={excerpt}
                                    className="mt-1 block w-full"
                                    autoComplete="excerpt"
                                    isFocused={true}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                />
                                <InputError message={errors.excerpt} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="category_id" value="Kategori" />
                                <select
                                    id="category_id"
                                    name="category_id"
                                    value={category_id}
                                    onChange={(e) => setCategory_id(e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="">Pilih Kategori</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.category_id} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="image" value="Upload Gambar" />
                                <input
                                    id="image"
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <InputError message={errors.image} className="mt-2" />
                            </div>

                            <div className='col-span-2'>
                                <InputLabel htmlFor="body" value="Isi Berita" />
                                <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                                    <ReactQuill
                                        id='body'
                                        theme="snow"
                                        value={body}
                                        onChange={setBody}
                                        modules={modules} // Define your Quill modules
                                        formats={formats} // Define your Quill formats
                                    />
                                </div>
                            </div>

                            <div>
                                <PrimaryButton type="submit">SAVE</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
