"use client"

export default function CulturePost() {
    return(
        <div className="w-full max-w-md p-4 bg-pink-200 m-4 mt-14 flex flex-col justify-center text-center">
        <form action={"/culture"}>
            <h2 className="text-4xl w-full text-blue-950 text-center p-4">View artworks by how many colors they have!</h2>
            <button className="bg-blue-900 hover:bg-blue-800 transition-colors text-2xl text-white max-w-1/2 p-4 text-center"
                    type="submit">Get Art</button>
        </form>
        </div>
    )
}