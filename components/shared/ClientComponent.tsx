"use client"
import React from 'react'

function ClientComponent({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    )
}

export default ClientComponent