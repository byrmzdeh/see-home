import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import './style.scss'

const Add = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        fetch("http://localhost:9000/")
            .then(res => res.json())
            .then((api) => setData(api))
    }

    function handleAdd(val) {
        fetch("http://localhost:9000/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(val),
          })
          .then((res)=>res.json())
          .then((api)=>{
            getAll()
          })  
    }

    function handleDelete(id) {
        fetch("http://localhost:9000/" +id, {
            method: "DELETE"
          })
          .then((res)=>res.json())
          .then((api)=>{
            getAll()
          })  
    }
    return (
        <div className='add'>
            <Formik
                initialValues={{ name: '', image: '', desc: '', value: '', price: '' }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    image: Yup.string().required('Required'),
                    desc: Yup.string().required('Required'),
                    value: Yup.number().required('Required'),
                    price: Yup.number().required('Required')

                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                       handleAdd(values)
                        setSubmitting(false);
                    }, 400);
                    resetForm()
                }}
            >
                <Form>
                    <label htmlFor="image">Image</label>
                    <Field name="image" type="text" />
                    <ErrorMessage name="image" />


                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="desc"> Description</label>
                    <Field name="desc" type="text" />
                    <ErrorMessage name="desc" />

                    <label htmlFor="price"> Price</label>
                    <Field name="price" type="text" />
                    <ErrorMessage name="price" />

                    <label htmlFor="value"> Value</label>
                    <Field name="value" type="text" />
                    <ErrorMessage name="value" />

                    <button type="submit">Submit</button>
                </Form>
                </Formik>

                <table border={1}>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Value</th>
                        <th>Delete</th>


                    </tr>
                    {data.map(item=>(
                        <tr>
                        <td><img width={110} src={item.image} alt="" /></td>
                        <td>{item.name}</td>
                        <td>{item.desc}</td>
                        <td>{item.price}</td>
                        <td>{item.value}</td>
                        <td><button onClick={()=>handleDelete(item._id)}>X</button></td>
                    </tr>
                    ))}

                </table>

        </div>
    )
}

export default Add