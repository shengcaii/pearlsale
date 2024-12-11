import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ProjectLink = ({children, name}) => {
  return (
    <>
    <a className='flex p-1 place-items-center gap- rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-700/30 transition-colors duration-500'>
    {children}
    <div className='flex overflow-hidden place-items-center justify-between w-full'>
    <p className='text-inherit truncate tracking-wide'>{name}</p>
    <ChevronRightIcon className='stroke-inherit stroke-[0.75] max-w-5'/>
    </div>
    </a>
    </>
  )
}

export default ProjectLink