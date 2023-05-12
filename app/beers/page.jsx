async function getData() {
    const res = await fetch ('https://api.sampleapis.com/beers/ale')
    if(!res.ok) {
        throw new Error('Failed to fecth data from SampleAPI')
    }
    return res.json()
}



export default async function Page() {
    const data = await getData()
    return(
        <main className="p-8">
            <h1 className="text-emerald-400 text-6xl font font-black">
                 The Beers</h1>
                 {data.map(beer => (
                    <div key={beer.id}>
                    <h2>{beer.name}</h2>
                    </div>
                 ))}
        </main>
    )
}