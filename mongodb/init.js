db.createUser({
  user: 'foo',
  pwd: 'foo',
  roles: [
    {
      role: 'readWrite',
      db: 'foo',
    },
  ],
});
