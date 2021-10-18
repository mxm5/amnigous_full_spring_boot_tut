import logo from './logo.svg';
import './App.css';
import {getAllStudents} from "./client";
import {Component} from "react";
import {Table} from "antd";


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


            const columns = [
                {
                    title:"student Id",
                    dataIndex:"studentId",
                    key:"studentId"
                },

                {
                    title:"firstName",
                    dataIndex:"firstName",
                    key:"firstName"
                },

                {
                    title:"lastName",
                    dataIndex:"lastName",
                    key:"lastName"
                },

                {
                    title:"gender",
                    dataIndex:"gender",
                    key:"gender"
                },
                {
                    title:"email",
                    dataIndex:"email",
                    key:"email"
                }

            ];

            return <Table
                dataSource={students}
                columns={columns}
                rowkey={'studentId'}
            />;

            // return students.map((value, index) => {
            //     return (
            //         // , value.lastName, value.email, value.gender, value.studentId
            //         <div key={index}>
            //             <h3>
            //                 {value.studentId}
            //             </h3>
            //             <p>
            //                 {value.firstName}
            //             </p>
            //             <p>
            //                 {value.lastName}
            //             </p>
            //             <p>
            //                 {value.gender}
            //             </p>
            //             <p>
            //                 {value.email}
            //             </p>
            //         </div>
            //     );
            // });
        } else

            return (
                <h1>
                    no students found
                </h1>
            );

    }
}

export default App;
