import Editor from '@/components/Editor'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { text } from 'stream/consumers'

const getEntry = async (id) => {
    const user = await getUserByClerkId()
    const entry = await prisma.journalEntry.findUnique({
        where: {
            userId_id: {
                userId: user.id,
                id,
            }
        },
        include: {
            analysis: true,
        },
    })

    return entry
}

const Entrypage = async ({params}) => {
    const entry = await getEntry(params.id)

    return(
        <div className='h-full w-full'>
            <Editor entry={entry} />        
        </div>
    )
}

export default Entrypage