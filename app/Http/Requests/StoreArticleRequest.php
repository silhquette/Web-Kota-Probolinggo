<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'header',
            'title' => 'required|min:10',
            'slug' => 'required|min:10',
            'excerpt' => 'required|min:10',
            'body' => 'required|min:10',
            'category_id' => 'required|exists:categories,id',
            'user_id'=> 'required|exists:users,id',
        ];
    }
}
