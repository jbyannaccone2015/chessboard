import React from "react";


export default function Login() {

    return(
    <div class="bg-gray-700 flex content-center items-center justify-center h-[100vh] text-slate-600">
    <div class="flex flex-col items-center px-2 py-2 border-1 border-slate-500 bg-gray-300 h-[50vh] w-[50vh] rounded">
        <div class="pt-2 text-xl font-bold">Log In</div>
            <div class="flex flex-col px-3 pt-2 pb-12 w-5/6">
                <label class="pb-1 pt-7">Email</label>
                <input type="text" placeholder="Enter your email" class="rounded px-1 py-1 outline-none" />
                <label class="pb-1 pt-5">Password</label>
                <input type="password" placeholder="Enter your password" class="rounded px-1 py-1 outline-none"/>
            </div>
        <div class="flex flex-row pt-2.5">
            <div class="pr-2">
                <button class="bg-violet-500 hover:bg-violet-700 text-white rounded px-3 py-1" >
                    Log In
                </button>
            </div>
        </div>
    </div>
    </div>
    )
}