import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "../template/iconButton";
import {
    markAsDone, markAsPending,
    remove
} from "../tasks/task-action"


const TaskList = props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(task => (
            <tr key={task._id}>
                <td className={task.done ? "markedAsDone" : ""}>{task.description}</td>
                <td>
                    <IconButton style="success" icon="check" onClick={() => props.markAsDone(task)} hide={task.done} />
                    <IconButton style="warning" icon="undo" onClick={() => props.markAsPending(task)} hide={!task.done} />
                    <IconButton style="danger" icon="trash-o" onClick={() => props.remove(task)} hide={!task.done} />
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="tableActions">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
};
const mapStateToProps = state => ({ list: state.task.list });
const mapDispacthToProps = dispacth =>
    bindActionCreators({ markAsDone, markAsPending, remove }, dispacth);
export default connect(mapStateToProps, mapDispacthToProps)(TaskList);