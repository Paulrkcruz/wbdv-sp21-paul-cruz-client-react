import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";


export default class CourseTable extends React.Component {
    constructor(props) {
        super(props);
    }

    // add course function, and move to it's parent
    // addCourse = () => {
    //     const newCourse = {
    //         title: "New Course",
    //         owner: "New Owner",
    //         lastModified: "Never"
    //     }
    //     this.state.courses.push(newCourse)
    //     this.setState(this.state)
    // }

    render() {
        return(
            <div>
                {/*<button onClick={this.addCourse}>Add Course</button>*/}
                <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th float-right"></i>
                </Link>
                <h2 style={{color: "blue"}}>Course Table</h2>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <th>
                            <select defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Owned by</option>
                                <option value="first">me</option>
                            </select>
                        </th>
                        <th>Last modified by me</th>
                        <th>Quizzes</th>
                        <th><i className="fas fa-folder fa-lg"></i></th>
                        <th><i className="fas fa-th fa-lg"></i></th>
                        <th><i className="fas fa-sort-alpha-down fa-lg"></i></th>
                    </tr>
                        {/*<CourseRow title="CS1234" owner="Alice" lastModified={"1/1/2021"}/>*/}
                        {/*<CourseRow title="CS2345" owner="Charlies" lastModified={"1/8/2021"}/>*/}
                        {/*<CourseRow title="CS3456" owner="James" lastModified={"1/12/2021"}/>*/}
                        {/*<CourseRow title="CS4567" owner="Dan" lastModified={"1/17/2021"}/>*/}
                        {
                            this.props.courses.map(course =>
                                <CourseRow
                                    updateCourse={this.props.updateCourse}
                                    deleteCourse={this.props.deleteCourse}
                                    key={course._id} //add anything unique
                                    course={course}
                                    title={course.title}
                                    owner={course.owner}
                                    lastModified={course.lastModified}
                                />)
                        }
                        {/*<tr>*/}
                        {/*    <td>CS5610</td>*/}
                        {/*    <td>me</td>*/}
                        {/*    <td>1/1/2021</td>*/}
                        {/*    <td>*/}
                        {/*        <i className="fas fa-check"></i>*/}
                        {/*        <i className="fas fa-trash"></i>*/}
                        {/*        <i className="fas fa-edit"></i>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td>CS3200</td>*/}
                        {/*    <td>you</td>*/}
                        {/*    <td>1/21/2021</td>*/}
                        {/*    <td>*/}
                        {/*        <i className="fas fa-check"></i>*/}
                        {/*        <i className="fas fa-trash"></i>*/}
                        {/*        <i className="fas fa-edit"></i>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                    </tbody>
                </table>
            </div>
        )
    }
}