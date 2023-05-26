import { ReactNode } from "react"

interface AuthlayoutProps {
    children: ReactNode
}

export default function Authlayout({ children }: AuthlayoutProps) {
    return (
        <>
            {children}
        </>
    )
}