import { ReactNode } from "react"

interface AuthlayoutProps {
    children: ReactNode
}

export default function Authlayout({ children }: AuthlayoutProps) {
    return (
        <>
            <h1>Layout HOME</h1>
            {children}
        </>
    )
}