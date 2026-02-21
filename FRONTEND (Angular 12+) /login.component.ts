login() {
  this.loading = true;
  this.auth.login({
    userId: this.userId,
    password: this.password,
    role: this.role,
    delay: 2000
  }).subscribe((res: any) => {
    this.auth.setUser(res.user);
    this.router.navigate(['/dashboard']);
    this.loading = false;
  });
}
