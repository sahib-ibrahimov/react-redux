export const actionAdd = (id) => (
  {
    type: "ADD",
    payload: {
      id: id
    }
  }
)

export const actionDelete = (id) => (
  {
    type: "DEL",
    payload: {
      id: id
    }
  }
)
