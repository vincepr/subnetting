// what is the type of a react component
// -> savest bet is using React.ReactNode 
// (from the /types React package)


type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>
}