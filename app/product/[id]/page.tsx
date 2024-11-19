import React from 'react'

const page = ({ params: { id } }: { params: { id: string } }) => {
    return <div>Product {id}</div>
}

export default page
