import React from 'react'

export default function TextDisplay({name, isCapital}) {
  return (
    <span>{isCapital ? String(name).toUpperCase() : name}</span>
  )
}
