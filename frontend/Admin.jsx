import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

export default class Admin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            id: '',
            studentId: '',
            studentName: '',
            studentYear: '',
            courseId: '',
            courseName: '',
            semester: '',
            asmName: '',
            asmDescription: '',
            asmPercentage: '',
            technologyUse: '',
            scope: '',
            description: '',
            linkToIndustry: '',
            application: '',
            imageURL: '',
            addNew: true
        }
    }

    fetchProjects() {
        var url = 'http://localhost:8080/api/projects'
        fetch(url)
        .then(res=>res.json())
        .then(json=>
            this.setState({ projects: json }) )
    }

    componentDidMount() {
        this.fetchProjects()
    }

    handleChange(e) {
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    save() {
        var methodVar = this.state.addNew ? 'post' : 'put'
        if (methodVar == 'post') {
            var url = 'http://localhost:8080/api/project/create';
        } else if (methodVar == 'put') {
            var url = 'http://localhost:8080/api/project/' + this.state.id;
        }
        // var url = 'http://localhost:9000/api/projects'
        fetch(url, {
            method: methodVar,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                studentId: this.state.studentId,
                studentName: this.state.studentName,
                studentYear: this.state.studentYear,
                courseId: this.state.courseId,
                courseName: this.state.courseName,
                semester: this.state.semester,
                asmName: this.state.asmName,
                asmDescription: this.state.asmDescription,
                asmPercentage: this.state.asmPercentage,
                technologyUse: this.state.technologyUse,
                scope: this.state.scope,
                description: this.state.description,
                linkToIndustry: this.state.linkToIndustry,
                application: this.state.application,
                imageURL: this.state.imageURL
            })
        })
            .then(res => res.json())
            .then(json => this.fetchProjects())
    }

    edit(id, studentId, studentName, studentYear, courseId, courseName, semester, asmName, asmDescription, asmPercentage,
        technologyUse, scope, description, linkToIndustry, application, imageURL) {
        this.setState({
            id: id,
            studentId: studentId,
            studentName: studentName,
            studentYear: studentYear,
            courseId: courseId,
            courseName: courseName,
            semester: semester,
            asmName: asmName,
            asmDescription: asmDescription,
            asmPercentage: asmPercentage,
            technologyUse: technologyUse,
            scope: scope,
            description: description,
            linkToIndustry: linkToIndustry,
            application: application,
            imageURL: imageURL,
            addNew: false
        })
    }

    add() {
        this.setState({ addNew: true })
    }

    delete(id) {
        var url = 'http://localhost:8080/api/project'
        fetch(url + "/" + id, {
            method: "delete"
        })
            .then(res => res.json())
            .then(json => this.fetchProjects())
    }

    render() {
        return (
            <div className="container">
                <br />
                <h2>Add/Edit Project</h2>
                <form>
                    Project ID: <input type="text" className="form-control" id="id" name="id" value={this.state.id}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Student ID: <input type="text" className="form-control" id="studentId" name="studentId" value={this.state.studentId}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Student Name: <input type="text" className="form-control" id="studentName" name="studentName" value={this.state.studentName}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Student Year: <input type="text" className="form-control" id="studentYear" name="studentYear" value={this.state.studentYear}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Course ID: <input type="text" className="form-control" id="courseId" name="courseId" value={this.state.courseId}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Course Name: <input type="text" className="form-control" id="courseName" name="courseName" value={this.state.courseName}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Semester: <input type="text" className="form-control" id="semester" name="semester" value={this.state.semester}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Assignment Name: <input type="text" className="form-control" id="asmName" name="asmName" value={this.state.asmName}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Assignment Description: <input type="text" className="form-control" id="asmDescription" name="asmDescription" value={this.state.asmDescription}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Assignment Percentage: <input type="text" className="form-control" id="asmPercentage" name="asmPercentage" value={this.state.asmPercentage}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Technology Use: <input type="text" className="form-control" id="technologyUse" name="technologyUse" value={this.state.technologyUse}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Scope: <input type="text" className="form-control" id="scope" name="scope" value={this.state.scope}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Description: <input type="text" className="form-control" id="description" name="description" value={this.state.description}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Link to industry: <input type="text" className="form-control" id="linkToIndustry" name="linkToIndustry" value={this.state.linkToIndustry}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Application: <input type="text" className="form-control" id="application" name="application" value={this.state.application}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    Image URL: <input type="text" className="form-control" id="imageURL" name="imageURL" value={this.state.imageURL}
                        onChange={this.handleChange.bind(this)} />
                    <br />

                </form>
                <br />
                <button className="btn btn-primary" id="crud-button-2" onClick={this.save.bind(this)}>Save</button>
                <button className="btn btn-primary" id="crud-button-2" onClick={this.add.bind(this)}>Toggle add new project</button>
                <br />
                <br />
                <div className="row">
                    {this.state.projects.map(p =>
                        <div>
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <div className="card" id="c-grid">
                                    <img className="card-img-top" id="c-i-t-grid" src={p.imageURL} alt="Card image"></img>
                                    <div className="card-body">
                                        <h4 className="card-title" id="c-t-grid" title={p.asmName}>
                                            {p.asmName}
                                        </h4>
                                        <button className="btn btn-primary" id="crud-button"
                                            onClick={this.edit.bind(this, 
                                                p.id,
                                                p.studentId, 
                                                p.studentName, 
                                                p.studentYear, 
                                                p.courseId, 
                                                p.courseName, 
                                                p.semester,
                                                p.asmName,
                                                p.asmDescription,
                                                p.asmPercentage,
                                                p.technologyUse,
                                                p.scope,
                                                p.description,
                                                p.linkToIndustry,
                                                p.application,
                                                p.imageURL)}>Edit</button>
                                        <button className="btn btn-primary" id="crud-button"
                                            onClick={this.delete.bind(this, p.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}