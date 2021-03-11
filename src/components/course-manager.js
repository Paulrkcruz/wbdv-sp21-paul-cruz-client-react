import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";
import courseService, {findAllCourses} from "../services/course-service";


class CourseManager extends React.Component {
    state = {
        courses: [
            // {title: "CS5500 Software Engineering Graduate", owner:"me", lastModified: "1/22/2021"},
            // {title: "CS4550 Software Engineering Undergraduate", owner:"me", lastModified: "1/25/2021"},
            // {title: "CS4500 WebDev Undergraduate", owner:"me", lastModified: "1/26/2021"},
            // {title: "CS5610 WebDev Graduate", owner:"me", lastModified: "2/1/2021"},
        ]
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
                // courses: prevState.courses.map(c => {
                //     if(c._id === course._id) {
                //         return course
                //     } else {
                //         return c
                //     }
                //     })
            })))
    }

    componentDidMount = () =>
        // findAllCourses()
        //     .then(actualCourses => this.setState({
        //         courses.actualCourses
        //         }
        //     ))
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "mm/dd/yyy"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
        // .then(
        //     course =>
        //     this.setState((prevState) => ({
        //     ...prevState,
        //     courses: [
        //         ...prevState.courses,
        //         course
        //     ]
        // })))

        // this.state.courses.push(newCourse)
        // this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // const newCourse = this.state.courses
                //     .filter(course => course !== courseToDelete)
                // this.setState({
                //     courses: newCourse})
                this.setState((prevState) => {
                    let nextState = {}
                    nextState.courses =
                        prevState
                            .courses
                            .filter(course => course !== courseToDelete)
                    return nextState
                })
            })
        // console.log(course)
        // const newCourse = this.state.courses.filter(course => course !== courseToDelete)
        // this.setState({courses: newCourse})
    }

    render() {
        return (
            <div className="container">
                <div className="wbdv-sticky-nav-bar row">
                    <div className="col-1">
                        <i className="fas fa-bars fa-2x"></i>
                    </div>
                    <div className="col-3">
                        <h2>Course Manager</h2>
                    </div>
                    <div className="col-7">
                        <input className="form-control"
                               placeholder="New Course Title"></input>
                    </div>
                    <div className="col-1" onClick={this.addCourse}>
                        <i className="fas fa-plus-circle fa-2x" style={{color: "red"}}></i>
                        {/*<button onClick={this.addCourse}>Add Course</button>*/}
                    </div>
                </div>
                <Route path="/courses/table">
                    <CourseTable deleteCourse={this.deleteCourse}
                                 courses={this.state.courses}
                                 updateCourse={this.updateCourse}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid deleteCourse={this.deleteCourse}
                                courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/editor">*/}
                {/*    <CourseEditor/>*/}
                {/*</Route>*/}
                <Route path={[
                    "/courses/:layout/edit/",
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                ]}
                       exact={true}
                       render={(props) =>
                           <CourseEditor {...props}/> }>
                </Route>
            </div>
        );
    }
}


export default CourseManager