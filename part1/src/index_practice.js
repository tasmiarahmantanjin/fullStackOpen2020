import React from 'react'
import ReactDOM from 'react-dom'

// First Example:
// const App = () => (
//   <div>
//     <p>Hello This is my first react app</p>
//   </div>
// )

// 2nd Example: 
// const App = () => {
//   console.log('Hello from console')
//   return (
//     <div>
//       <p>Hello Tasmia</p>
//     </div>
//   )
// }

// 3rd Example
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         Addition of {a} and {b} is: {a + b}
//       </p>
//     </div>
//   )
// }
// ReactDOM.render(<App />, document.getElementById('root'))

// 4th Example
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/tasmiarahmantanjin">trahman</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
