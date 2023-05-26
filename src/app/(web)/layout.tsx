import { ReactNode } from "react"

interface AppLayoutProps {
    children: ReactNode
}

export default function Authlayout({ children }: AppLayoutProps) {
    return (
        <>
            {children}
        </>
    )
}