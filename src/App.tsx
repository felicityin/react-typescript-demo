import './App.css';
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { Counter } from  './components/state/Counter'
import { LoggedIn } from  './components/state/LoggedIn'
import { User } from './components/state/User'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { User as ContextUser } from './components/context/User'
import { UserContextProvider } from './components/context/UserContext'
import { DomRef } from './components/ref/DomRef'
import { MutableRef } from './components/ref/MutableRef'
import { Counter as ClassCounter } from './components/class/Counter'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { List } from './components/generics/List'
import { RandomNumber } from './components/restriction/RandomNumber'
import { Toast } from './components/templateliterals/Toast'
import { CustomButton } from './components/html/Button'
import { CustomInput } from './components/html/Input'
import { CustomComponent } from './components/html/CustomComponent'
import { Text } from './components/polymorphic/Text'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    }
  ]

  return (
    <div className="App">
      <Greet name='felicityin' isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }}/>
      <Input value='' handleChange={(event) => console.log(event)}/>
      <Container styles={{ border: '1px solid black', padding: '1rem'}} />

      <Counter/>
      <LoggedIn/>
      <User/>

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

      <UserContextProvider>
        <ContextUser/>
      </UserContextProvider>

      <DomRef/>
      <MutableRef/>

      <ClassCounter message='Counter'/>

      <Private isLoggedIn={true} component={Profile}/>

      <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)}/>

      <RandomNumber value={10} isPositive/>

      <Toast position='center'/>

      <CustomButton variant='primary'>custom button</CustomButton>
      <CustomInput/>
      <CustomComponent name='felicityin' isLoggedIn={true}/>

      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='primary'>Label</Text>
    </div>
  );
}

export default App;
