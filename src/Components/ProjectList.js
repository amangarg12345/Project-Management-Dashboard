import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectList = () => {
    const projectList = useSelector(store => store?.project?.projects);
  return (
    <div>
      <h1>Project List</h1>
      <table className='table-auto'>
        <tr>
        <th>Project Name</th>
        <th>Description</th>
        </tr>
        {projectList.map((project)=>{
            return(
                <div>
                    <tr>
                        <Link to={"/project/"+ project.id}><td>{project.projectName}</td></Link>
                        <td>{project.Description}</td>
                    </tr>
                </div>
            )
        })}
      </table>
    </div>
  )
}

export default ProjectList
