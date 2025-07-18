import { ChatHeader } from './ChatHeader'
import { ChatDisplay } from './ChatDisplay'

export const Layout = () => {
  return (
    <div className="min-h-dvh bg-gray-200 pt-5 px-7">
        <ChatHeader/>
        <ChatDisplay/>
    </div>
  )
}
