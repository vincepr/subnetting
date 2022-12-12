type StatusProps = {
    status: "loading" | "success" | "error"
}

export const Status = (props: StatusProps) => {
    let msg
    if(props.status === "loading"){
        msg = "Loading ...."
    } else if (props.status === "success") {
        msg = "Data fetched Successfully!"
    } else {
        msg = "Error fetching data"
    }

    return(
        <div>
            <h2>{msg}</h2>

        </div>
    )
}