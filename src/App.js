import './App.css';
import CourseManager from "./components/course-manager";
import CourseGrid from "./components/course-grid";
import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";


function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true} component={Home}/>
                <Route path={["/courses/table", "/courses/grid"]} component={CourseManager}/>
                {/*<CourseManager/>*/}
                <Route path="/courses/:courseId/quizzes" exact={true}>
                    <QuizzesList/>
                </Route>
                <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                    <Quiz/>
                </Route>
                <Route path={[
                    "/courses/:layout/edit/",
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widget/:widgetId"
                ]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;