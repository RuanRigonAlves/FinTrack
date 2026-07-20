<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function group()
    {
        return $this->belongsTo(CategoryGroup::class, 'group_id');
    }
}
