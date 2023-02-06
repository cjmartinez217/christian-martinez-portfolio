import {BsFillMoonStarsFill} from 'react-icons/bs'
export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50">
            <h1 className="font-burtons text-lg">Christian Martinez</h1>
            <ul className="flex items-center">
                <a className="px-4 py-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 bg-blue-300 rounded-md ml-8 text-white" href="https://docs.google.com/document/d/12TqcTXeYXStnxtYo5RFJHnrNPu87Kr3Z/edit?usp=sharing&ouid=104962790973629351147&rtpof=true&sd=true">Resume</a>
            </ul>
        </nav>
    )
}