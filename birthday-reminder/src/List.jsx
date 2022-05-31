import React from 'react'

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <div className=" d-flex">
                        <img src={image} className="" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{id}</h5>
                            <h6 className="card-text"> {name} </h6>
                            <p>{age} Years</p>
                        </div>
                    </div>

                )
            })}





        </>
    )
}

export default List