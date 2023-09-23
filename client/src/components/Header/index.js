import { Link } from 'react-router-dom';
import Logo from "../../images/logo_transparent.png";

export default function Header({
    heading,
    heading2,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className='my-2 flex items-center justify-center mx-auto flex-wrap md:flex-nowrap md:block xl:flex-nowrap xl:block'>
            <div className='flex items-center justify-center -mt-6'>
                <img
                    alt=""
                    className=' w-24'
                    src={Logo}/>
            </div>
            <h1 className='font-head mt-6 text-center text-4xl xl:text-6xl font-extrabold text-zinc-50'>
                {heading}
            </h1>
            <h2 className='font-body mt-6 text-center text-2xl font-extrabold text-zinc-50'>
                {heading2}
            </h2>
            <p className='font-body text-center text-sm text-zinc-50 mt-5'>
                {paragraph} {' '}
            <Link to={linkUrl} className='font-medium text-green-600 mt-5 hover:text-green-500'>
                {linkName}
            </Link>
            </p>
        </div>
    )
}