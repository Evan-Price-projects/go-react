
export const api ={
    getAlbums: async():Promise<Album[]>=>{
        const albums = await fetch("http://localhost:8000/albums")
        return await albums.json();
    }
}

export interface Album{
    title: string,
    id: string,
    artist: string,
    price: number;

}