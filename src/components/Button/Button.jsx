



export const Button = ({children, isGhost }) => {

    const classes = isGhost ? "bg-white/10 hover:bg-white/20 text-white" : "bg-primary hover:bg-primary/90 text-white"

    return (<a
        href="/projects"
        className={classes + " px-8 py-3 rounded-md font-semibold transition-colors"}
    >
        {children}

    </a>)
}
