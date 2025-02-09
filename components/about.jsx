import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='mb-16 group'>
            <div className='text-surface-600'>
                {props.data.about.map(function(paragraph, index){
                    return <div className='mb-6'>{paragraph}</div>
                })}
            </div>
            <div className="flex flex-row">
            <div className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">HTML</div>
            <div className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">CSS</div>
            <div className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">JS</div>
            <div className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">PHP</div>
            <div className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">Python</div>
            <div className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">Fortinet</div>
            </div>
            <div className="flex flex-row mt-2">
            <div className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">Node.js</div>
            <div className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">MariaDB</div>
            <div className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">Redis</div>
            <div className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">Linux Cluster</div>
            </div>
        </div>
    )
}

export default About
