import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills section " id="skills">
         <h2 className="section__title">Course</h2>
      <span className="section__subtitle">Explore Our Comprehensive Range of Cutting-edge IT Courses</span>

      <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
      </div>
    </section>
  )
}

export default Skills