import React, { useState, useEffect } from 'react'
import { FormGroup, FormLabel, FormControl, Button, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { addProductDetails } from '../actions/productActions'

const AddProductScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState('')
    const [filename, setFilename] = useState('Choose file...');
    const [selectedFile, setSelectedFile] = useState('');
    const [stockCount, setStockCount] = useState(1)

    const dispatch = useDispatch()
    // check of the Admin is signed in for adding product
    const productUpload = useSelector(state => state.productUpload)
    const { loading, error, success } = productUpload
    // useEffect(() => {

    // }, [])
    const handleFileSelect = event => {
        event.preventDefault();
        console.log((event.target.files[0]))
        setSelectedFile(event.target.files[0])
        setFilename((event.target.files[0]['name']))
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // const product = {
        //     name,
        //     desc,
        //     price,
        //     brand,
        //     countInStock: stockCount
        // }
        const formData = new FormData();
        formData.append('name', name)
        formData.append('file', selectedFile)
        formData.append('desc', desc)
        formData.append('price', price)
        formData.append('brand', brand)
        formData.append('countInStock', stockCount)
        dispatch(addProductDetails(formData))
    }
    return (
        <FormContainer>
            <h3>Add Product</h3>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler} encType='multipart/form-data'>
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                        type='text'
                        placeholder='Enter Product Name'
                        value={name}
                        onChange={(e) => (setName(e.target.value))} />
                </FormGroup>
                <div className='custom-file'>
                    <FormLabel className='custom-file-label'>{filename}</FormLabel>
                    <input
                        className='custom-file-input'
                        type="file"
                        onChange={handleFileSelect}
                        />
                </div>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl
                        type='text'
                        placeholder='description'
                        value={desc}
                        onChange={(e) => (setDesc(e.target.value))} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Price</FormLabel>
                    <FormControl
                        type='number'
                        placeholder='price'
                        value={price}
                        onChange={(e) => (setPrice(e.target.value))} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Brand</FormLabel>
                    <FormControl
                        type='text'
                        placeholder='Brand'
                        value={brand}
                        onChange={(e) => (setBrand(e.target.value))} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Stock Count</FormLabel>
                    <FormControl
                        type='number'
                        placeholder='Enter Product Name'
                        value={stockCount}
                        onChange={(e) => (setStockCount(e.target.value))} />
                </FormGroup>
                <Button type='submit' variant='primary' className='btn-block'>
                    Add
                </Button>
            </Form>
        </FormContainer>
    )
}

export default AddProductScreen
