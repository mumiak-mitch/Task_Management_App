import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.activeItem
        };
    }

    render() {
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Task Item</ModalHeader>

                <ModalBody>
                    <Form>
                        {/*title label*/}
                        <FormGroup>
                            <Label htmlFor="title">Title</Label>
                            <Input
                                type='text'
                                name='title'
                                value={this.state.activeItem.title} // Use this.state.activeItem
                                onChange={this.handleChange}
                                placeholder='Enter task title'
                            />
                        </FormGroup>

                        {/*description label*/}
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input
                                type='text'
                                name='description'
                                value={this.state.activeItem.description} // Use this.state.activeItem
                                onChange={this.handleChange}
                                placeholder='Enter task Description'
                            />
                        </FormGroup>

                        {/*completed label*/}
                        <FormGroup check>
                            <Label htmlFor="completed">
                                <Input
                                    type='checkbox'
                                    name='completed'
                                    checked={this.state.activeItem.completed} // Use this.state.activeItem
                                    onChange={this.handleChange}
                                />
                                Completed
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                
                <ModalFooter>
                    <Button color='success' onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }

    //checks if checkbox is checked or not
    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };
}

export default CustomModal;
