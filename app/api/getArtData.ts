"use server";

/*import { ArtPostProps } from "@/types";*/

export default async function getArtData() {
    const HARVARD_API_KEY= process.env.HARVARD_API_KEY;
    const res = await fetch(`https://api.harvardartmuseums.org/object?apikey=${HARVARD_API_KEY}&size=5&sort=random&primaryimageurl!=null`,);
    const jsonRes = await res.json();
    return jsonRes.records;
}