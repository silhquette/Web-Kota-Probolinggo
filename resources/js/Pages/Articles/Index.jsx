//import React
import React from 'react';

//import layout
import GuestLayout from '../../Layouts/GuestLayout';

//import Link
import { Link } from '@inertiajs/inertia-react';

export default function ArticleIndex({ articles, session }) {

    console.log(articles);

  return (
    <GuestLayout>
      <h1>Helo ini page index</h1>
    </GuestLayout>
  )
}