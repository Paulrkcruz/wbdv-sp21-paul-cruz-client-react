import CourseManager from "./components/course-manager";
import CourseGrid from "./components/course-grid";
import CourseEditor from "./components/course-editor";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <CourseManager/>
            </div>
        </BrowserRouter>
    );
}

export default App;
