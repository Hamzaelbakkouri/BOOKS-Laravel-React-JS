<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Livre;

class livres extends Controller
{

    public function addLivre(Request $request)
    {
        $livre = new Livre();
        $livre->nom = $request->nom;
        $livre->image = $request->file('image')->store('uploads', 'public');
        $livre->pdf = $request->file('file')->store('uploads', 'public');
        $livre->isArchived = 0;
        $livre->id_cat = $request->id_cat;
        $livre->created_at = date("Y-m-d");
        $livre->save();
        return 'added';
    }

    function supprimerLivre(Livre $livre)
    {
        $livre->isArchived = 1;
        $livre->update();
        return 'deleted';
    }


    function getlivre($id)
    {
        $livre = Livre::find($id);
        return $livre;
    }

    public function updateLivre(Request $request)
    {
        $livre = Livre::find($request->id);
        $livre->nom = $request->nom;
        if ($request->image != null) {
            $livre->image = $request->image;
        }
        if ($request->file != null) {
            $livre->pdf = $request->file;
        }
        if ($request->id_cat != null) {
            $livre->id_cat = $request->id_cat;
        }
        $livre->update();
        return 'updated';
    }
}
