type GreetProps = {
    name:String
    new_messages?: number
    is_loggedIn: boolean

}

export const GreetOptional = (props:GreetProps) => {
    return (
        <div>
            {
                props.is_loggedIn
                ? <h2>Welcome {props.name}, you have  {props.new_messages} new Messages!</h2>
                : <h2>You are not logged in</h2>
            }
            
        </div>
    )
}