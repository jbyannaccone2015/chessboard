import React from "react";
import Row from "./Row";
import RowReverse from "./RowReverse";

export default function Board() {

    return(
        <div class="bg-gray-700 content-center items-center justify-center h-[100vh] text-slate-600">
            <div class="flex flex-row content-center items-center justify-center">
                <Row />
                <RowReverse />
                <Row />
                <RowReverse />
                <Row />
                <RowReverse />
                <Row />
                <RowReverse />
                <Row />
                <RowReverse />
            </div>
        </div>
    )
}