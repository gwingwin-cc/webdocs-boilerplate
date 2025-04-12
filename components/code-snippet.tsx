export const CodeSnippet = (props: { children: any, className?: string }) => {
    return <div className={`code-snippet ${props.className}`}>
        {props.children}
    </div>
}
