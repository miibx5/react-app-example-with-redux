import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => {

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
                    onChange={props.handleChange}
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
}

