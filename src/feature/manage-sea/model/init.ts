import { sample } from "effector"

import { $currentRoute, $markPorts } from "@/feature/sea-field/model"
import { deleteAllRoutes, deleteLastRoute } from "./public"

sample({
  clock: deleteLastRoute,
  source: $markPorts,
  filter: Boolean,
  fn: (ports) => {
    if (ports.length >= 2) {
      const result = [...ports]
      result.splice(-1, 1)
      return result
    }
    return null
  },
  target: $markPorts
})

sample({
  clock: deleteAllRoutes,
  fn: () => null,
  target: $markPorts
})

sample({
  clock: [deleteLastRoute, deleteAllRoutes],
  fn: () => null,
  target: $currentRoute
})
