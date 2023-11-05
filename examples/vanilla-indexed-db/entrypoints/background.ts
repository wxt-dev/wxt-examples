export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  const idb = openExtensionDatabase();
  const todosRepo = registerTodosRepo(idb);

  void todosRepo.getAll().then(console.log);
  void todosRepo.createOrUpdate({
    id: '1',
    title: 'Example todo',
  });
});
