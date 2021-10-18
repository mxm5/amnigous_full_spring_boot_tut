import logo from './logo.svg';
import './App.css';
import {getAllStudents} from "./client";
import {Component} from "react";


class App extends Component {

    state = {
        students: []
    }


    componentDidMount() {
        this.fetchStudents();
    }

    fetchStudents = () => {
        getAllStudents().then(res => res.json().then(
            students => {
                console.log(students);
                this.setState({students});
                console.log(this.state)
            }
        ));
    }


    render() {
        const {students} = this.state;

        if (students && students.length) {

            return students.map((value, index) => {
                return (
                    // , value.lastName, value.email, value.gender, value.studentId
                    <div key={index}>
                        <h3>
                            {value.studentId}
                        </h3>
                        <p>
                            {value.firstName}
                        </p>
                        <p>
                            {value.lastName}
                        </p>
                        <p>
                            {value.gender}
                        </p>
                        <p>
                            {value.email}
                        </p>
                    </div>
                );
            });
        } else

            return (
                <h1>
                    no students found
                </h1>
            );

    }
}

export default App;
