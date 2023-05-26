import { ReactNode } from "react"

interface AuthlayoutProps {
    children: ReactNode
}

export default function Authlayout({ children }: AuthlayoutProps) {
    return (
        <>
            <h1>Layout Sobre</h1>
            {children}
        </>
    )
}