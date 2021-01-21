import React from 'react'
import Part from "./Part"

// Component: Content
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

export default Content;