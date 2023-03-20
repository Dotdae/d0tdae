import Card from "./Card"
import Construction from "../../public/construction.png"


export default function Portfolio() {
  return (
    <>
        <div className="text-center">
            <h3 className="text-7xl py-1">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
                Lorem ipsum dolor, sit <span className="text-teal-500">amet</span> consectetur adipisicing elit. Perspiciatis sit dicta molestiae tenetur est <span className="text-teal-500">officia</span> vel esse doloribus possimus ea.
            </p>
        </div>
        <div className="flex justify-center flex-col gap-10 py-10 lg:flex-row flex-wrap">
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </div>
    </>
  )
}
