app.post("/api/login", async (req, res) => {
  const { userId, password, role, delay } = req.body;

  setTimeout(() => {
    const user = users.find(
      u => u.userId === userId && u.password === password && u.role === role
    );

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  }, delay || 1000);
});
