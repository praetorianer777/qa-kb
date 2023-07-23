import Link from 'next/link'
import Button from './components/button'
import Navbar from './components/nav'

export default function Page() {
  return (
    <div>
      
      <h1>knowledgebase tool</h1>
      <Link href="/administration">Administration</Link><br></br>
      <Button></Button>
    </div>
    
  )
}
