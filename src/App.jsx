import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Umaima zainab"  img="https://plus.unsplash.com/premium_photo-1756099779811-baa284e1b864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user=" Zainab fatima" age='29' img="https://images.unsplash.com/photo-1552053831-71594a27632d"/>
      <Card user="  Aizal khan" age='18' img="https://images.unsplash.com/photo-1679531751641-79f78cbb5c0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D"/>
      <Card user=" Sara faisal" img="https://plus.unsplash.com/premium_photo-1669704098858-8cd103f4ac2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FyYXxlbnwwfHwwfHx8MA%3D%3D" />
      <Card user=" Fatima Khan" img="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8fDA%3D"/>
    </div>
  )
}

export default App