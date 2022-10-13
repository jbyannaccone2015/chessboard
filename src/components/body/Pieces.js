import React from "react";
import { GiChessBishop, GiChessKing, GiChessKnight, GiChessPawn, GiChessQueen, GiChessRook } from "react-icons/gi";

export default function Pieces() {
    return(
        <div>
            <div>
                <GiChessRook />
                <GiChessKnight />
                <GiChessBishop />
                <GiChessQueen />
                <GiChessKing />
                <GiChessBishop />
                <GiChessKnight />
                <GiChessRook />
            </div>
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
        </div>
    )
}