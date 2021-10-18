import logo from './logo.svg';
import './App.css';
import {getAllStudents} from "./client";
import {Component} from "react";
import {Avatar, Spin, Table} from "antd";
import Container from "./Container";
import { HourglassOutlined } from '@ant-design/icons';
// LoadingOutlined
const antIcon = <HourglassOutlined  style={{ fontSize: 50 ,margin: '5rem' }} spin />;
class App extends Component {

    state = {
        students: [],
        isFetching: false
    }


    componentDidMount() {
        this.fetchStudents();
    }

    fetchStudents = () => {
        this.setState({isFetching: true})
        getAllStudents().then(res => res.json().then(
            students => {
                console.log(students);
                this.setState({students, isFetching: false});
            }
        ));
    }




    render() {
        const {students , isFetching} = this.state;

        if(isFetching){
            return (<Container>
                <Spin indicator={antIcon}/>
            </Container>)
        }

        if (students && students.length) {


            const columns = [
                {
                    title: "avatar",
                    key: "avatar",
                    render: (text, student) => (
                        <Avatar size='large'>
                            {
                                `${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`
                            }
                        </Avatar>
                    )
                },
                {
                    title: "student Id",
                    dataIndex: "studentId",
                    key: "studentId"
                },

                {
                    title: "firstName",
                    dataIndex: "firstName",
                    key: "firstName"
                },

                {
                    title: "lastName",
                    dataIndex: "lastName",
                    key: "lastName"
                },

                {
                    title: "gender",
                    dataIndex: "gender",
                    key: "gender"
                },
                {
                    title: "email",
                    dataIndex: "email",
                    key: "email"
                }

            ];

            return <Container>
                <Table
                    dataSource={students}
                    columns={columns}
                    rowkey={'studentId'}
                    pagination={false}
                />
            </Container>;


        } else

            return (
                <h1>
                    no students found
                </h1>
            );

    }
}

export default App;
