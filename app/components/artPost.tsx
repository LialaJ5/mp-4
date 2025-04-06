"use client"

import {ArtPostProps} from "@/types";
import getArtData from "../api/getArtData";
import {useEffect, useState} from "react";

export default function ArtPost() {
    const [artData, setArtData] = useState<ArtPostProps[]>([]);

    useEffect(() => {
        async function getValue() {
            setArtData(await getArtData());
        }
        getValue().catch((e) => console.error(e));
    }, [5]);

    return(
        <div className="flex flex-col p-4 items-center justify-center pt-28 text-center">
            {artData.map((p) => {
                return (
                    <div key={p.objectnumber} className="flex flex-col justify-center items-center w-full max-w-md p-4 border-2 text-center">
                        <h1 className="text-2xl font-bold p-2">{p.colorcount} Colors</h1>
                        <div className="max-w-1/3">
                            <img src={p.primaryimageurl} alt={`Art: ${p.title}`} className="max-w-full"/>
                        </div>
                        <p className="text-2xl text-wrap text-center">{p.title}</p>
                        <p className="text-1xl text-wrap w-full">{p.description}</p>
                    </div>
                )
            })}
        </div>
    )
}