import React from "react";
import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(task => (
            <tr key={task._id}>
                <td className={task.done ? "markedAsDone" : ""}>{task.description}</td>
                <td>
                    <IconButton style="success" icon="check" onClick={() => props.handleMarkAsDone(task)} hide={task.done} />
                    <IconButton style="warning" icon="undo" onClick={() => props.handleMarkAsPending(task)} hide={!task.done} />
                    <IconButton style="danger" icon="trash-o" onClick={() => props.handleRemove(task)} hide={!task.done} />
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