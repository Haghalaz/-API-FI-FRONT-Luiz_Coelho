import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../service/api";

interface IGoal {
  id: number;
  goalName: String;
  savedMoney: String;
  goalValue: String;
}

const Home: React.FC = () => {
  const [goals, setGoals] = useState<IGoal[]>([]);
  const history = useHistory();

  useEffect(() => {
    loadgoals();
  }, []);

  async function loadgoals() {
    const response = await api.get("/Goal");
    setGoals(response.data);
  }

  function editGoal(id: number) {
    history.push(`/Editar_Meta/${id}`);
  }

  async function deletarGoal(id: number) {
    await api.delete(`/Goal/${id}`);
    loadgoals();
  }

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h1>Metas</h1>
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome da Meta</th>
            <th>Dinheiro guardado</th>
            <th>Valor da Meta</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((Goal) => (
            <tr key={Goal.id}>
              <td>{Goal.id}</td>
              <td>{Goal.goalName}</td>
              <td>R$: {Goal.savedMoney}</td>
              <td>R$: {Goal.goalValue}</td>
              <td>
                <Button
                  size="sm"
                  variant="outline-primary"
                  onClick={() => editGoal(Goal.id)}
                >
                  Editar
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deletarGoal(Goal.id)}
                >
                  Deletar
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
