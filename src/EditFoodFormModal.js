import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function EditFoodForm({ lastSelectedItem, onSubmit }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFoodEdit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    onSubmit(formData); 
    toggleModal(); 
  };

  return (
    <>
      <Button block color="primary" className="my-3 justify-content-center" onClick={toggleModal}>Edit Selected Item</Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Edit Selected Item</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleFoodEdit}>
            <FormGroup>
              <Label for="id">ID:</Label>
              <Input type="text" name="id" id="id" value={lastSelectedItem ? lastSelectedItem["id"] : ''} readOnly />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input type="text" name="name" id="name" defaultValue={lastSelectedItem ? lastSelectedItem["name"] : ''} />
            </FormGroup>
            <FormGroup>
              <Label for="calories">Calories:</Label>
              <Input type="number" name="calories" id="calories" defaultValue={lastSelectedItem ? lastSelectedItem["calories"] : ''} />
            </FormGroup>
            <FormGroup>
              <Label for="totalFat">Total Fat:</Label>
              <Input type="number" name="totalFat" id="totalFat" defaultValue={lastSelectedItem ? lastSelectedItem["totalFat"] : ''} />
            </FormGroup>
            <FormGroup>
              <Label for="saturatedFat">Saturated Fat:</Label>
              <Input type="number" name="saturatedFat" id="saturatedFat" defaultValue={lastSelectedItem ? lastSelectedItem["saturatedFat"] : ''} />
            </FormGroup>
            <FormGroup>
              <Label for="transFat">Trans Fat:</Label>
              <Input type="number" name="transFat" id="transFat" defaultValue={lastSelectedItem ? lastSelectedItem["transFat"] : ''} />
            </FormGroup>
            <FormGroup>
              <Label for="protein">Protein:</Label>
              <Input type="number" name="protein" id="protein" defaultValue={lastSelectedItem ? lastSelectedItem["protein"] : ''} />
            </FormGroup>
            <FormGroup>
              <Label for="carbohydrate">Carbohydrate:</Label>
              <Input type="number" name="carbohydrate" id="carbohydrate" defaultValue={lastSelectedItem ? lastSelectedItem["carbohydrate"] : ''} />
            </FormGroup>
            <Button type="submit" color="primary">Save Changes</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default EditFoodForm;