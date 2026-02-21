app.get("/api/records/:userId", (req, res) => {
  const userRecords = records.filter(r => r.owner === req.params.userId);
  res.json(userRecords);
});
