<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'type',
        'icon',
        'color',
        'group_id',

    ];
    
    public function group()
    {
        return $this->belongsTo(CategoryGroup::class, 'group_id');
    }
}
