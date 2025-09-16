import React, { useEffect } from 'react'
import './Projectsdetails.css'
import { useParams } from 'react-router-dom'
import { greenProjects } from '../../data/Projectsdata'

export default function Projectdetails() {

    // Get the Id of the displayed project and display It
    const { projectId } = useParams()

    // find at least one project that matches the project Id
    const foundProject = greenProjects.find(project => project.id === Number(projectId))


    // scroll to the top of the page on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) // empty dependency array
    
    return(
        <section
            className='project-details-page'
        >
            <h2 className='project-title'>{foundProject.title}</h2>
            <img
                src={foundProject.img}
                alt={foundProject.title}
                className='project-image'
            />

            <div
                className='project-details-div'
            >
                <p className='project-details-category'>
                    CATEGORY: <strong>{foundProject.category}</strong>
                </p>
                {foundProject.description}
            </div>

        </section>
    )
}