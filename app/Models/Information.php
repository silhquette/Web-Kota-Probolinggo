<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Information extends Model
{
    use HasFactory;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * Fillable table fields
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'summary',
        'format',
        'announced',
        'period',
        'link',
        'category',
    ];
}
