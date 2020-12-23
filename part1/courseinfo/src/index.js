import React from 'react'
import ReactDOM from 'react-dom'

// Component Header
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

// Component Parts
const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

// Component Content
const Content = ({ parts }) => {
  return (
    <>
      {parts &&
        parts.map((part, index) => {
          return (
            <Part key={index} part={part.name} exercise={part.exercises} />
          );
        })}
    </>
  );
};

// Component Total
const Total = ({ parts }) => {
  let totalExercises = 0;
  if (parts) {
    parts.forEach(part => {
      totalExercises += part.exercises;
    });
  }
  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));