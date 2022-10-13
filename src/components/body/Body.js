import React from "react";
import Board from "./Board";
import Pieces from "./Pieces";
import PiecesReverse from "./PiecesReverse";

export default function Body() {
    return(
        <div class="bg-gray-700">
            <div class="p-2">
                <button class="bg-slate-400 p-1 border-black border-2 rounded">RESET</button>
            </div>
            <Pieces />
            <Board />
            <PiecesReverse />
        </div>
    )
}