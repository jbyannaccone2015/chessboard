import React from "react";
// import { GiChessBishop, GiChessKing, GiChessKnight, GiChessPawn, GiChessQueen, GiChessRook } from "react-icons/gi";

export default function Row() {
    return(
        <div class="bg-gray-700 flex content-center items-center justify-center h-[100vh] text-slate-600">
            <div>
               <div class="w-20 h-20 bg-black"></div> 
               <div class="w-20 h-20 bg-white"></div> 
               <div class="w-20 h-20 bg-black"></div>  
               <div class="w-20 h-20 bg-white"></div> 
               <div class="w-20 h-20 bg-black"></div> 
               <div class="w-20 h-20 bg-white"></div> 
               <div class="w-20 h-20 bg-black"></div> 
               <div class="w-20 h-20 bg-white"></div> 
               <div class="w-20 h-20 bg-black"></div> 
            </div>
        </div>
    )
}