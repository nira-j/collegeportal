import React from 'react';
import './about.css';
import faculty from '../image/dummy.jpg';

export default function () {
    return (
        <>
            <div className='container'>
                <div className='aboutcontent'>
                    <h3>Vision & Mission</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi distinctio
                        dignissimos exercitationem eum quas modi. Nisi praesentium vel optio culpa dicta
                        accusantium iusto ducimus ratione, sapiente quos libero doloribus! Voluptate distinctio
                        totam tenetur ad dolor, nobis voluptatum eligendi neque architecto. Explicabo officiis,
                        voluptatibus ipsum a mollitia ex assumenda nulla adipisci rerum suscipit dolor consequatur
                        sapiente rem aliquam, quod eligendi. Dolorum dignissimos exercitationem quis ad ipsum nobis
                        magnam recusandae unde non laboriosam! Corporis reiciendis odit provident recusandae nobis
                        similique repellendus animi, non porro iste amet quis omnis praesentium facere nam
                        accusantium rem. Ex dicta inventore, pariatur beatae neque accusamus iste.
                    </p>
                    <p>
                        accusantium iusto ducimus ratione, sapiente quos libero doloribus! Voluptate distinctio
                        totam tenetur ad dolor, nobis voluptatum eligendi neque architecto. Explicabo officiis,
                        voluptatibus ipsum a mollitia ex assumenda nulla adipisci rerum suscipit dolor consequatur
                        sapiente rem aliquam, quod eligendi. Dolorum dignissimos exercitationem quis ad ipsum nobis
                        magnam recusandae unde non laboriosam! Corporis reiciendis odit provident recusandae nobis
                        similique repellendus animi, non porro iste amet quis omnis praesentium facere nam
                        accusantium rem. Ex dicta inventore, pariatur beatae neque accusamus iste.
                    </p>
                </div>
                <hr />
                <div className='aboutcontent'>
                    <h3>Aims & Objectives</h3>
                    <p>
                        accusantium iusto ducimus ratione, sapiente quos libero doloribus! Voluptate distinctio
                        totam tenetur ad dolor, nobis voluptatum eligendi neque architecto. Explicabo officiis,
                        voluptatibus ipsum a mollitia ex assumenda nulla adipisci rerum suscipit dolor consequatur
                        sapiente rem aliquam, quod eligendi. Dolorum dignissimos exercitationem quis ad ipsum nobis
                        magnam recusandae unde non laboriosam! Corporis reiciendis odit provident recusandae nobis
                        similique repellendus animi, non porro iste amet quis omnis praesentium facere nam
                        accusantium rem. Ex dicta inventore, pariatur beatae neque accusamus iste.
                    </p>
                </div>
                <div className='aboutcontent'>
                    <h3>Faculty</h3>
                    <div className='row'>
                        <div className="col-md-3"><img src={faculty} alt="image not found" width='200' height='250'/></div>
                        <div className="col-md-3"><img src={faculty} alt="image not found" width='200' height='250'/></div>
                        <div className="col-md-3"><img src={faculty} alt="image not found" width='200' height='250'/></div>
                        <div className="col-md-3"><img src={faculty} alt="image not found" width='200' height='250'/></div>
                    </div>
                    <div className='row'>
                        <div className="col-md-3"><img src={faculty} alt="image not found" width='200' height='250'/></div>
                        <div className="col-md-3"><img src={faculty} alt="image not found" width='200' height='250'/></div>
                        <div className="col-md-3"><img src={faculty} alt="image not found" width='200' height='250'/></div>
                        <div className="col-md-3"><img src={faculty} alt="image not found" width='200' height='250'/></div>
                    </div>
                </div>
            </div>

        </>
    )
}