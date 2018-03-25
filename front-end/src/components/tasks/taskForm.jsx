import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import {
    changeDescription, search,
    add
} from "./task-action";

class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const { add, search, description } = this.props;
        if (e.key === "Enter") {
            e.shiftKey ? search() : add(description);
        } else if (e.key === "Escape") {
            props.handleClear();
        }
    }
    render() {
        const { add, search, description } = this.props;
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
                    <IconButton style="primary" onClick={() => add(description)} icon="plus" />
                    <IconButton style="info" onClick={() => search()} icon="search" />
                    <IconButton style="default" onClick={this.props.handleClear} icon="close" />

                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => ({ description: state.task.description });
const mapDispacthToProps = dispacth =>
    bindActionCreators({ changeDescription, search, add }, dispacth);
export default connect(mapStateToProps, mapDispacthToProps)(TaskForm);

