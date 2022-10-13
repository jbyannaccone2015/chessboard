import React from "react";
import { GiChessBishop, GiChessKing, GiChessKnight, GiChessPawn, GiChessQueen, GiChessRook } from "react-icons/gi";

export default function PiecesReverse() {
    return(
        <div>
            <div>
                <GiChessPawn />
                <GiChessPawn />
                <GiChessPawn />
                <GiChessPawn />
                <GiChessPawn />
                <GiChessPawn />
                <GiChessPawn />
                <GiChessPawn />
            </div>
            <div>
                <GiChessRook />
                <GiChessKnight />
                <GiChessBishop />
                <GiChessKing />
                <GiChessQueen />
                <GiChessBishop />
                <GiChessKnight />
                <GiChessRook />
            </div>
        </div>
    )
}