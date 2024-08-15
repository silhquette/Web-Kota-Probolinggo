import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

//import Link
import PrimaryLink from '../../../Components/PrimaryLink';
import DangerButton from '../../../Components/DangerButton';

//import card
import ArticleCard from "@/Components/ArticleCard";

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function Article({ articles, session, auth }) {
    //method deletePost
    const deletePost = async (id) => {
        Inertia.delete(`/article/${id}`);
        location.reload();
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800  leading-tight">My Article List</h2>}
        >
            <Head title="Article" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {session?.success && (
                        <div className="alert alert-success border-0 shadow-sm rounded-3">
                            {session.success}
                        </div>
                    )}

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1440px] mx-auto">
                            {/* Card */}
                            <a href='/article/create' className='text-xl font-semibold flex gap-2 items-center justify-center hover:text-blue-700 border-2 border-dashed rounded-xl'><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>Tambah artikel baru</a>
                            {articles.map((article, index) => (
                                <div key={index} className='flex flex-col gap-4 items-end border border-transparent hover:border-gray-200 rounded-xl p-4'>
                                    <ArticleCard article={article} ImageHeight='min' editable={true}/>
                                    <div className='flex gap-2 h-full items-end'>
                                        <PrimaryLink href='' disabled={true}>Edit</PrimaryLink>
                                        <DangerButton onClick={() => deletePost(article.slug)} href='google.com'>Delete</DangerButton>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
