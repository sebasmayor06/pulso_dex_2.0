const SideNav = ({ name, href, img }) => {
    return (
        <>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <ul className='pl-8'>
                    <li className='flex items-center pb-6'>
                        <div dangerouslySetInnerHTML={{ __html: img }} />
                        <h2 className='text-[#6D6D6D] pl-4 font-semibold'>
                            {name}
                        </h2>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default SideNav