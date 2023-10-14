import { useParams } from "react-router-dom"

export default function Area() {

  const { area, turma } = useParams()
  console.log(area,turma)
  return (<div>Curso</div>)
}