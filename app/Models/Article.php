<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    /**
     * Fillable table fields
     *
     * @var array
     */
    protected $fillable = [
        'header',
        'title',
        'slug',
        'excerpt',
        'body',
        'category_id',
        'user_id',
    ];
}
