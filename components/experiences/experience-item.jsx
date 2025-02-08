import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-2 transition-all rounded-lg hover:bg-surface-200">
            <div className="basis-1/4 mr-4 ml-1">
                <Image src={props.logo} alt="Company Logo" width={300} height={300} className="object-contain object-top pt-2 rounded-lg" />
            </div>
            <div className="basis-3/4">
                {props.href ? (
                    <a href={props.href} target="_blank" rel="noopener noreferrer" className="font-medium transition-all">
                        {props.title} | {props.company}
                    </a>
                ) : (
                    <span className="font-medium">
                        {props.title} | {props.company}
                    </span>
                )}
                <div className="mb-2 text-surface-600">
                    {props.startDate} - {props.endDate}
                </div>
                {props.description && (
                    <div className="text-surface-600 mb-4">
                        {props.description.startsWith('http') ? (
                            <a href={props.description} target="_blank" rel="noopener noreferrer" className="underline">
                            {props.description}
                            </a>
                        ) : (
                            props.description
                        )}
                    </div>
                )}
                <div className="flex flex-row">
                    {props.skills?.map((skill) => (
                        <div key={skill} className="bg-surface-400 py-1 px-3 rounded-md text-xs mr-2">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem;