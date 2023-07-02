import React from "react"
import styled from "styled-components"

import { $routes } from "@/feature/sea-field/model"
import { Button } from "@/ui"
import { colors } from "@/ui/colors"
import { useStore } from "effector-react"
import { deleteAllRoutes, deleteLastRoute } from "../../model"

export const Manage: React.FC = () => {
  const routes = useStore($routes)
  const dist = React.useMemo(() => {
    let result = 0
    routes?.forEach((item) => {
      const dx = item[0].x - item[1].x
      const dy = item[0].y - item[1].y
      result = result + Math.sqrt(dx * dx + dy * dy)
    })

    return result
  }, [routes])

  return (
    <Container>
      <Button onClick={deleteLastRoute}>удалить последний маршрут</Button>
      <Button onClick={deleteAllRoutes}>удалить все маршруты</Button>
      {dist !== 0 && (
        <DestinationWrapper>
          <Text>общая длина маршрута:</Text>
          <Text>{dist.toFixed(1)}</Text>
        </DestinationWrapper>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 620px;
  margin: 24px;
  background-color: ${colors.transparent};
`

const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${colors.text};
`

const DestinationWrapper = styled.div`
  display: flex;
  gap: 18px;
`
