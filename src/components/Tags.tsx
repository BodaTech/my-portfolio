import type React from "react"


const Tags: React.FC<{tags: string[]}> = ({
    tags
}) => {
    return <>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <span
                key={index}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                >
                {tag}
                </span>
            ))}
        </div>
    </>
}

export default Tags