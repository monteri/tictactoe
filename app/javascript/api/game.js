export const makeMove = (id, row, col) => {
  fetch(`/games/${id}/moves`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ col, row })
    })
};