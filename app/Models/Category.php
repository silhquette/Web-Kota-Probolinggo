<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
   
    /**
     * Fillable table fields
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];
}
