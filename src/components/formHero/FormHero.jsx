import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as formik from 'formik'
import * as yup from 'yup'

function FormHero() {
    const { Formik } = formik

    const schema = yup.object().shape({
        name: yup.string().required(),
        //   lastName: yup.string().required(),
        //   username: yup.string().required(),
        //   city: yup.string().required(),
        //   state: yup.string().required(),
        //   zip: yup.string().required(),
        file: yup.mixed().required(),
        //   terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
    })
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                //   firstName: 'Mark',
                //   lastName: 'Otto',
                //   username: '',
                //   city: '',
                //   state: '',
                //   zip: '',
                file: null,
                //   terms: false,
            }}
        >
            {({ errors }) => (
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre del personaje</Form.Label>
                        <Form.Control type="text" required name="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRealName">
                        <Form.Label>Nombre Real del personaje</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Casa</Form.Label>
                        <Form.Select required>
                            <option>Seleccione una casa...</option>
                            <option>Marvel</option>
                            <option>DC</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEquipment">
                        <Form.Label>Equipamiento</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicYearAppearence"
                    >
                        <Form.Label>Año de aparición</Form.Label>
                        <Form.Control required type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicBiography">
                        <Form.Label>Biografía</Form.Label>
                        <Form.Control as="textarea" />
                    </Form.Group>

                    <Form.Group className="position-relative mb-3">
                        <Form.Label>File</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            name="file"
                            //   onChange={handleChange}
                            isInvalid={!!errors.file}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.file}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default FormHero
