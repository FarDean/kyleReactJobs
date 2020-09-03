import React from 'react'
import { Form, FormGroup, FormLabel,Col } from "react-bootstrap";


export default function SearchForm({params,onParamChange}) {
    return (
        <Form>
            <FormGroup  as={Col}>
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
            </FormGroup>
            <FormGroup  as={Col}>
                <Form.Label>Location</Form.Label>
                <Form.Control onChange={onParamChange} value={params.description} name="location" type="text" />
            </FormGroup>
            <Form.Group as={Col} xs="auto" className="ml-2">
                <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2" />
            </Form.Group>
        </Form>
    )
}
