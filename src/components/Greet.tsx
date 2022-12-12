type GreetProps = {
    name:String
    new_messages: number
    is_loggedIn: boolean

}

export const Greet = (props:GreetProps) => {
    const {new_messages = 0} = props        // set default value 0
    return (
        <div>
            {
                props.is_loggedIn
                ? <h2>Welcome {props.name}, you have {new_messages}  new Messages!</h2>
                : <h2>You are not logged in</h2>
            }
            
        </div>
    )
}