import React from 'react'

const Dropdown = ({totalPage, handlePage, title}) => {
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">{title}</div>
            <ul tabIndex={0} className="w-[22rem] dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
                <div className='h-40 grid w-full grid-cols-4 overflow-scroll overflow-x-hidden gap-2'>
                    {
                        Array.from({ length: totalPage }, (_, i) => i + 1).map((item, index) => (
                            <li key={index} className="menu-item w-1/4">
                                <button onClick={() => handlePage(item)} className="btn text-center">{item}</button>
                            </li>
                        ))
                    }
                </div>
            </ul>
        </div>
    )
}

export default Dropdown