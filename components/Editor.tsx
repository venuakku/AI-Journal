'use client'

import { updateEntry } from "@/utils/api"
import { data } from "autoprefixer"
import { useState } from "react"
import { useAutosave } from "react-autosave"

const Editor = ({entry}) => {
    const [value, setValue] = useState(entry.content)
    const [isSaving, setIsSaving] = useState(false)
    const [analysis, setAnalysis] = useState(entry.analysis)
    const { mood, summary, subject, color, negative } = analysis

    const analysisData = [
        {name: "Summary", value: summary},
        {name: "Subject", value: subject},
        {name: "Mood", value: mood},
        {name: "Negative", value: negative ? 'True' : 'False' },
    ]

    useAutosave({
        data: value,
        onSave: async (_value) => {
            setIsSaving(true)
            const data = await updateEntry(entry.id, _value)
            setAnalysis(data.analysis)
            setIsSaving(false)
        }
    })

    return <div className="h-full w-full grid grid-cols-3">
        <div className="col-span-2">
        {isSaving && <div>...saving</div>}
        <textarea 
        className="h-full w-full p-8 text-xl outline-none"  
        value={value} 
        onChange={e => setValue(e.target.value)} />
        </div>

        <div className='border-l border-black/10'>
            <div className='px-6 py-10' style={{backgroundColor: color}}>
                <h2 className='text-2xl'>Analysis</h2>
            </div>
            <ul>
                {analysisData.map((item) => (
                    <li key={item.name} className='px-2 py-4 flex items-center justify-between border-t border-b border-black/10'>
                        <span className='text-lg font-semibold'>{item.name}</span>
                        <span>{item.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}

export default Editor