import React, { ChangeEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, Col, Row } from "react-bootstrap";
import api from "../../service/api";

import "./style.css";

interface IEntrega {
  goalName: String;
  savedMoney: String;
  goalValue: String;
}

const GoalForm: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const [model, setModel] = useState<IEntrega>({
    goalName: "",
    savedMoney: "",
    goalValue: "",
  });

  useEffect(() => {
    if (id != undefined) {
      findEntrega(id);
    }
  }, [id]);

  function updatedGoal(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      const response = await api.put(`Goal/${id}`, model);
    } else {
      const response = await api.post("/Goal", model);
    }
    back();
  }

  async function findEntrega(id: string) {
    const response = await api.get(`Goal/${id}`);
    setModel({
      goalName: response.data.goalName,
      savedMoney: response.data.savedMoney,
      goalValue: response.data.goalValue,
    });
  }

  function back() {
    history.goBack();
  }

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h3>Meta</h3>
        <Button variant="dark" size="lg" onClick={back}>
          Voltar
        </Button>
      </div>
      <br />
      <div className="container">
        <Form className="f d-grid gap-3" onSubmit={onSubmit}>
          <Form.Group className="w-100">
            <Form.Label>Nome da Meta:</Form.Label>
            <Form.Control
              type="text"
              name="goalName"
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedGoal(e)}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="w-100">
                <Form.Label>Total Guardado:</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  step="any"
                  name="savedMoney"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedGoal(e)
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="w-100">
                <Form.Label>Valor da Meta:</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  step="any"
                  name="goalValue"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedGoal(e)
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" size="lg" type="submit" className="w-100">
            Confirmar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default GoalForm;
