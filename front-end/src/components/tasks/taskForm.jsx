import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { changeDescription, search } from "./task-action";

class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillUnmount() {
        this.props.search();
    }

    keyHandler(e) {
        if (e.key === "Enter") {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === "Escape") {
            this.props.handleClear();
        }
    }
    render() {
        return (
            <div>
                <Grid cols="10 9 10">
                    <input id="description"
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        className="form-control" placeholder="Adcione uma tarefa" />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" onClick={this.props.handleAdd} icon="plus" />
                    <IconButton style="info" onClick={this.props.handleSearch} icon="search" />
                    <IconButton style="default" onClick={this.props.handleClear} icon="close" />

                </Grid>
            </div>
        )
    }

}

/* const TaskForm = props => {

    const keyHandler = (e) => {
        if (e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === "Escape") {
            props.handleClear();
        }
    }

    return (
        <div role="from" className="todoForm">
            <Grid cols="10 9 10">
                <input id="description"
                    value={props.description}
                    onChange={props.changeDescription}
                    onKeyUp={keyHandler}
                    className="form-control" placeholder="Adcione uma tarefa" />
            </Grid>
            <Grid cols="12 3 2">
                <IconButton style="primary" onClick={props.handleAdd} icon="plus" />
                <IconButton style="info" onClick={props.handleSearch} icon="search" />
                <IconButton style="default" onClick={props.handleClear} icon="close" />

            </Grid>
        </div>
    )
} */

const mapStateToProps = state => ({ description: state.task.description });
const mapDispacthToProps = dispacth =>
    bindActionCreators({ changeDescription, search }, dispacth);
export default connect(mapStateToProps, mapDispacthToProps)(TaskForm);

