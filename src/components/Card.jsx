
export default function Card() {
  return (
    <div className="flex w-92 items-center justify-center">
        <div className="grid gap-5">
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-96 w-auto">
                    <img src="https://lanetaneta.com/wp-content/uploads/2022/06/One-Piece-finalmente-le-da-a-Nico-Robin-una-pelea.png" alt="" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                    <h1 className="text-3xl font-bold text-white font-oxygen">Nico Robin</h1>
                    <p className="text-lg italic text-white font-oxygen mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, deleniti!</p>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white shadow shadow-black/60">See more!</button>
                </div>
            </div>
        </div>
    </div>
  )
}
