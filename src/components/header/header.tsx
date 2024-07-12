import { FileText } from "lucide-react"

const Header = () => {
 return (
   <div className="p-4 pt-0 pl-0 flex bg-white items-center">
     <div className="mr-4">
       <FileText className="h-10 w-10" color="#31A1F6" />
     </div>
     <div>
       <div>
         <input
           className="rounded-md text-black border-none placeholder-gray-500 focus:outline-none"
           placeholder="Documento sem título"
         ></input>
         {/* <input
           type="text"
           placeholder="Digite seu texto aqui"
           className="placeholder-gray-500 placeholder-opacity-75 text-gray-700 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
         /> */}
       </div>
       <div></div>
     </div>
     <div></div>
   </div>
 );
}

export default Header

